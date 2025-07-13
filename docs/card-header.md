# 卡片顶部

卡片 header 部分包含卡片的标题和按钮

## 标题

卡片的标题使用标题标签 `<h2>` 进行标记，可添加 `<i>` 标签添加图标

## 按钮

卡片按钮位于 `card-btns` 中

-   按钮可使用 `<button>` 标签或 `<a>` 标签标记
-   按钮图标须使用 `<i>` 标签
-   按钮文字须使用 `<span>` 标签包裹
-   多个同类按钮可使用按钮组 `<div class="btn-group">` 进行编组

##### 注意

-   按钮必须添加图标与文字，否则将显示异常
-   必须添加关闭按钮，并使用 `close-btn` 类标记
-   卡片间切换时会自动向卡片添加返回按钮，不需要额外添加
-   按钮的数量应控制在 2-3 个，过多的按钮会影响布局

## 示例

以下是一个完整的 header 部分示例：

```
<div class="card-header">
    <h2><i class="fa fa-bolt"></i>卡片标题</h2>
    <div class="card-btns">
        <button>
            <i class="fa fa-sun"></i>
            <span>按钮1</span>
        </button>
        <div class="btn-group">
            <button>
                <i class="fa fa-moon"></i>
                <span>按钮2</span>
            </button>
            <button>
                <i class="fa fa-star"></i>
                <span>按钮3</span>
            </button>
        </div>
        <button class="close-btn"></button>
    </div>
</div>
```
