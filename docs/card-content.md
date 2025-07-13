# 卡片内容

`.card-content` 为卡片内容容器，用于放置卡片的主要内容

## 基础样式

| 属性           | 值   | 作用                 |
| -------------- | ---- | -------------------- |
| display        | flex | 启用 flex 布局       |
| flex-direction | row  | 将排列方向设置为横向 |
| gap            | 1rem | 控制子元素间距相等   |
| flex           | 1    | 内容占满剩余空间     |

建议添加额外类便于单独控制样式

## 示例

```html
<template>
    <div class="card example">
        ...
        <div class="card-content example-grid">
            <div class="example-item">1</div>
            <div class="example-item">2</div>
            <div class="example-item">3</div>
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
</style>
```
