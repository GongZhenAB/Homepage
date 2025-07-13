# 创建模态框

## 基本用法

使用 `show()` 方法显示模态框：

```
modal.show({
    title: "标题",
    content: "内容",
    note: "注释信息",
    type: "confirm/alert",
});
```

## 配置选项

| 参数    | 说明 | 可选值                                  | 缺省值  |
| ------- | ---- | --------------------------------------- | ------- |
| title   | 标题 | 文本或 HTML                             |         |
| content | 内容 | 文本或 HTML                             |         |
| note    | 备注 | 文本或 HTML                             |         |
| type    | 类型 | `confirm`（确认框）或 `alert`（提示框） | `alert` |

## 返回值

`show()` 方法返回 Promise 对象：

-   点击确认按钮返回 `true`
-   点击取消按钮返回 `false`

## 示例

```
// 提示框
modal.show({
    title: "提示",
    content: "这是一个提示框",
});

// 确认框
const result = await modal.show({
    title: "确认",
    content: "这是一个确认框",
    note: "确认后将执行一些操作",
    type: "confirm",
});

if (result) {
    console.log("用户点击了确认");
} else {
    console.log("用户点击了取消");
}
```
