# 元素选择器

## 语法

#### `$()` 单元素选择器

选择匹配的第一个元素

```
const $ = (selector, parent = document) => parent.querySelector(selector);
```

#### `$all()` 多元素选择器

选择匹配的所有元素

```
const $all = (selector, parent = document) => parent.querySelectorAll(selector);
```

##### 参数说明

-   `selector` CSS 选择器字符串
-   `parent` 可选，父元素，默认为 document

## 示例:

```
// 选择第一个 .card
const $card = $('.card');

// 选择所有 .card
const $cards = $all('.card');
```

| [← 上一篇](modal-event.md) | [下一篇 →](creator.md) | [文档首页](index.md) |
| -------------------------- | ---------------------- | -------------------- |
