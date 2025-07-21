# 模态框内容

模态框的 `title` `content` `note` 部分均允许插入 HTML 内容

#### 插入 HTML 内容

```
title/content/note: `<div>你的 HTML 内容</div>`
```

## 示例

```
modal.show({
    content: `<iframe src="https://gongz.moe/src/components/player.html" width="100%" height="90" frameborder="0"></iframe>`,
    note: `<a href="https://baike.baidu.com/item/%E5%A5%8F/21435781" target="_blank">了解这首歌</a>`,
    type: "confirm",
});
```

| [← 上一篇](modal.md) | [下一篇 →](modal-event.md) | [文档首页](index.md) |
| -------------------- | -------------------------- | -------------------- |
