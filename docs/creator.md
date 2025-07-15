# 元素创建器

## 语法

```
createElement(selector, content)
```

##### 参数说明

-   `selector` : 选择器字符串

    -   支持标签名: `div` `p` `span` 等
    -   支持类名: `.class`
    -   支持 ID: `#id`
    -   支持组合: `div.class#id`

-   `content` : 元素内容
    -   字符串: 将作为 HTML 内容插入
    -   DOM 节点: 将作为子节点插入

##### 注意事项

1. 如果不指定标签名，默认创建 `div` 元素
2. 类名和 ID 可以添加多个：`div.class1.class2#id1`
3. 内容参数可选，不传则创建空元素

## 示例

```
// 创建空元素
const element = createElement("");

// 创建基础元素
const div = createElement("div", "这是一个div");

// 创建带类名的元素
const card = createElement("div.card", "这是一个卡片");

// 创建带 ID 的元素
const header = createElement("header#main-header", "页面头部");

// 创建带类名和 ID 的元素
const button = createElement("button.btn#submit", "提交");

// 创建嵌套元素
const parent = createElement("div.parent");
const child = createElement("div.child", "子元素");
parent.appendChild(child);

// 创建元素并添加到 head
$("head").append(createElement("style", "body { background-color: #f0f0f0; }"));
```
