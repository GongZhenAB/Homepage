# 模态框事件

你可以通过监听模态框的返回值来执行一些操作

#### 监听模态框返回值

```
async function whenClose() {
    const result = await modal.show({
        title: "是否要关闭页面？",
        type: "confirm",
    });
    if (result) window.close();
}

window.addEventListener("beforeunload", whenClose);
```

在上面的代码中，我们监听了 `window` 对象的 `beforeunload` 事件

当用户关闭当前页面时，显示一个确认框，并监听了 `modal` 的返回值。如果用户点击了确认按钮，则调用 `window.close()` 方法关闭当前页面
