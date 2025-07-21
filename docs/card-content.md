# 卡片内容

`.card-content` 为卡片内容容器，用于放置卡片的主要内容

## 基础样式

| 属性           | 值         | 作用                 |
| -------------- | ---------- | -------------------- |
| display        | flex       | 启用 flex 布局       |
| flex-direction | row        | 将排列方向设置为横向 |
| gap            | 1rem       | 控制子元素间距相等   |
| flex           | 1          | 内容占满剩余空间     |
| padding        | 0.5rem     | 内边距               |
| width          | 100%       | 宽度占满容器         |
| box-sizing     | border-box | 防止内边距导致溢出   |
| overflow-y     | auto       | 内容溢出时自动滚动   |

建议添加额外类便于单独控制样式

## 响应式

使用 `@media` 媒体查询，创建自适应卡片

```
@media screen and (max-width: 768px) {
   .card-content {
        ...
    }

    ...
}
```

## 示例

```html
<template>
    <div class="card example">
        ...
        <div class="card-content example-grid">
            <div class="example-item">1</div>
            <div class="example-item">2</div>
            <div class="example-item">3</div>
            <div class="example-item">4</div>
            <div class="example-item">5</div>
            <div class="example-item">6</div>
        </div>
    </div>
</template>

<style>
    .example-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .example-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5rem;
        background-color: #00000040;
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        .example-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
```

| [← 上一篇](card-header.md) | [下一篇 →](modal.md) | [文档首页](index.md) |
| -------------------------- | -------------------- | -------------------- |
