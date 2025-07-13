// ========== 工具函数 ==========
const $ = (selector, parent = document) => parent.querySelector(selector);
const $all = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

const createElement = (selector, content) => {
    const [tagMatch, ...classAndIdMatches] = selector.split(/([.#][^.#]+)/g);
    const tag = tagMatch || "div";

    const element = document.createElement(tag);

    classAndIdMatches.forEach((match) => {
        if (!match) return;
        const [prefix, value] = [match[0], match.slice(1)];
        if (prefix === ".") {
            element.classList.add(value);
        } else if (prefix === "#") {
            element.id = value;
        }
    });

    if (typeof content === "string") {
        element.innerHTML = content;
    } else if (content instanceof Node) {
        element.appendChild(content);
    }

    return element;
};

// ========== 加载动画 ==========
const loading = $(".loading");
window.onload = () => {
    document.body.classList.add("loaded");
    loading.classList.remove("show");
};

// ========== 组件 ==========
class Component {
    constructor(name) {
        this.name = name;
        this.el = null;
        this.events = new Map();
        this.scriptsLoaded = false;
    }

    async load() {
        if (!this.el) {
            try {
                loading.classList.add("show");

                const response = await fetch(
                    `src/components/${this.name}.html`
                );
                const html = await response.text();
                const temp = document.createElement("div");
                temp.innerHTML = html;

                await this.loadStyles(temp);

                const template = temp.querySelector("template");
                if (template) {
                    const content = template.content.firstElementChild;
                    if (!content) throw new Error("模板内容为空");
                    this.el = content;
                    document.querySelector(".cards").appendChild(this.el);
                }

                const scriptLoadPromise = new Promise((resolve) => {
                    this.events.set("scriptsLoaded", resolve);
                });

                await this.loadScripts(temp);
                this.scriptsLoaded = true;

                await scriptLoadPromise;

                loading.classList.remove("show");
            } catch (error) {
                console.error(`加载组件失败: ${error}`);
                loading.classList.remove("show");
                this.el?.remove();
                this.el = null;
                return false;
            }
        }
        return true;
    }

    async loadStyles(temp) {
        const styles = Array.from(
            temp.querySelectorAll('link[rel="stylesheet"]')
        );
        styles.forEach((style) => {
            if (
                !document.querySelector(
                    `link[href="${style.getAttribute("href")}"]`
                )
            ) {
                document.head.appendChild(style);
            }
        });

        const inlineStyles = Array.from(temp.querySelectorAll("style"));
        inlineStyles.forEach((style) => {
            const newStyle = document.createElement("style");
            newStyle.textContent = style.textContent;
            document.head.appendChild(newStyle);
        });
    }

    async loadScripts(temp) {
        const externalScripts = Array.from(
            temp.querySelectorAll("script[src]")
        );
        await Promise.all(
            externalScripts.map(async (script) => {
                const src = script.getAttribute("src");
                if (!document.querySelector(`script[src="${src}"]`)) {
                    await new Promise((resolve, reject) => {
                        const newScript = document.createElement("script");
                        newScript.src = src;
                        newScript.onload = resolve;
                        newScript.onerror = reject;
                        document.body.appendChild(newScript);
                    });
                }
            })
        );

        let fetchPromises = [];
        const inlineScripts = Array.from(
            temp.querySelectorAll("script:not([src])")
        );
        inlineScripts.forEach((script) => {
            const newScript = document.createElement("script");
            const originalFetch = window.fetch;
            window.fetch = (...args) => {
                const promise = originalFetch.apply(window, args);
                fetchPromises.push(promise);
                return promise;
            };
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
            window.fetch = originalFetch;
        });

        await Promise.all(fetchPromises);
        const resolve = this.events.get("scriptsLoaded");
        if (resolve) resolve();
    }
}

// ========== 卡片 ==========
const cardContainer = $(".cards");
let cardStack = [];

class Card extends Component {
    constructor(name) {
        super(name);
        this.closeBtn = null;
        this.header = null;
        this.btns = null;
    }

    async open() {
        if (await this.load()) {
            if (!this.el.parentNode) cardContainer.appendChild(this.el);
            this.closeBtn = $(".close-btn", this.el);
            this.header = $(".card-header", this.el);
            this.btns = this.header ? $(".card-btns", this.header) : null;
            this.init();

            $all(".card").forEach((c) => c.classList.remove("active"));
            this.el.classList.add("active");
            cardStack.push(this.el);
            cardContainer.classList.add("show");
            this.updateBackBtn();
        }
    }

    close() {
        this.el.classList.remove("active");
        cardStack = [];
        $all(".back-btn").forEach((b) => b.remove());
        if (!$all(".card.active").length)
            cardContainer?.classList.remove("show");
    }

    init() {
        this?.closeBtn.addEventListener("click", () => this.close());
    }

    updateBackBtn() {
        if (!this.btns) return;
        let backBtn = $(".back-btn", this.btns);
        if (cardStack.length > 1 && !backBtn) {
            backBtn = document.createElement("button");
            backBtn.className = "back-btn";
            backBtn.innerHTML =
                '<i class="fa fa-angle-left"></i><span>返回</span>';
            backBtn.onclick = () => {
                this.el.classList.remove("active");
                cardStack.pop();
                const prevCard = cardStack[cardStack.length - 1];
                if (prevCard) prevCard.classList.add("active");
                backBtn.remove();
            };
            if (this.closeBtn) this.btns.insertBefore(backBtn, this.closeBtn);
        }
    }
}

// ========== 模态框 ==========
class Modal {
    constructor() {
        this.container = $(".modal-container");
        this.el = $(".modal");
    }

    show({ title, content, note, type }) {
        return new Promise((resolve) => {
            this.el.innerHTML = "";
            if (title)
                this.el.appendChild(createElement("h2.modal-title", title));
            if (content)
                this.el.appendChild(createElement(".modal-content", content));
            if (note) this.el.appendChild(createElement(".modal-note", note));

            const modalBtns = createElement(".modal-actions");
            if (type === "confirm") {
                const cancelBtn = createElement(
                    "button.modal-btn.cancel",
                    "取消"
                );
                cancelBtn.onclick = () => {
                    this.container.classList.remove("show");
                    resolve(false);
                };
                modalBtns.appendChild(cancelBtn);
            }

            const confirmBtn = createElement(
                "button.modal-btn.confirm",
                "确认"
            );
            confirmBtn.onclick = () => {
                this.container.classList.remove("show");
                resolve(true);
            };
            modalBtns.appendChild(confirmBtn);
            this.el.appendChild(modalBtns);

            this.container.classList.add("show");
        });
    }
}

// ========== 管理器 ==========
const cardManager = new Map();
const modal = new Modal();

// ========== 外链拦截 ==========
let TRUSTED_DOMAINS = [location.hostname];
let DEEP_LINK_PATTERN;
let TRUSTED_DOMAIN_REGEXES;

// 加载白名单配置
fetch("/src/config/whitelist.json")
    .then((res) => res.json())
    .then((config) => {
        TRUSTED_DOMAINS = [location.hostname, ...config.trustedDomains];
        DEEP_LINK_PATTERN = new RegExp(config.deepLinkPattern, "i");
        TRUSTED_DOMAIN_REGEXES = TRUSTED_DOMAINS.map((domain) => {
            return new RegExp(`(^|\\.)${domain.replace(".", "\\.")}$`, "i");
        });
    });

function isDeepLink(url) {
    return DEEP_LINK_PATTERN.test(url);
}
function isTrusted(url) {
    try {
        const u = new URL(url, location.href);
        return TRUSTED_DOMAIN_REGEXES.some((reg) => reg.test(u.hostname));
    } catch {
        return false;
    }
}

document.addEventListener("click", function (e) {
    const a = e.target.closest("a");
    if (
        !a ||
        !a.href ||
        a.target === "_self" ||
        a.href.startsWith("javascript:")
    )
        return;
    if (isDeepLink(a.href)) {
        e.preventDefault();
        showDeepLinkModal(a.href);
    } else if (a.hostname !== location.hostname && !isTrusted(a.href)) {
        e.preventDefault();
        showExternalLinkModal(a.href);
    }
});

async function showDeepLinkModal(url) {
    const result = await modal.show({
        title: "即将跳转到其他应用",
        content: `<a>${url}</a>`,
        type: "confirm",
    });
    if (result) window.location.href = url;
}

async function showExternalLinkModal(url) {
    const result = await modal.show({
        title: "即将跳转到外部链接",
        content: `<a>${url}</a>`,
        note: `<p>本站不能保证此链接的安全性</p><p>如继续访问，造成的损失本站概不负责</p>`,
        type: "confirm",
    });
    if (result) window.open(url, "_blank");
}

// ========== 事件监听 ==========
// 卡片导航
document.addEventListener("click", (e) => {
    const cardLink = e.target.closest("[data-card]");
    if (!cardLink) return;

    const cardName = cardLink.getAttribute("data-card");
    if (!cardManager.has(cardName))
        cardManager.set(cardName, new Card(cardName));
    cardManager.get(cardName).open();
});

// 点击背景关闭卡片
cardContainer?.addEventListener("click", (e) => {
    if (e.target === cardContainer) {
        $all(".card").forEach((c) => c.classList.remove("active"));
        cardStack = [];
        $all(".back-btn").forEach((b) => b.remove());
        cardContainer.classList.remove("show");
    }
});

// 点击背景关闭模态框
modal.container?.addEventListener("click", (e) => {
    if (e.target === modal.container) modal.container.classList.remove("show");
});

// 按键事件
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        $(".modal-actions .confirm")?.click();
    } else if (e.key === "Escape") {
        if ($(".modal-container.show")) {
            $(".modal-container").classList.remove("show");
        } else if ($(".card.active")) {
            $all(".card").forEach((c) => c.classList.remove("active"));
            cardStack = [];
            $all(".back-btn").forEach((b) => b.remove());
            cardContainer.classList.remove("show");
        }
    }
});

// ========== 页脚版权 ==========
$("footer")?.appendChild(
    createElement(
        "p",
        `© ${new Date().getFullYear()} Zhen. All rights reserved.`
    )
);
