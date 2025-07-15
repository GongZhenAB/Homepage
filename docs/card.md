# 创建卡片

1. ## 创建卡片模板

    在 `src/components/` 文件夹下创建 `<卡片名>.html` 文件，内容如下：

    ```
    <template>
    <div class="card `卡片名`">
            <div class="card-header">
                <h2><i class=""></i></h2>
                <div class="card-btns">
                    <button class="close-btn"></button>
                </div>
            <div class="card-content"></div>
        </div>
    </template>
    ```

2. ## 绑定导航

    在按钮或链接上添加 `data-card` 属性，并设置值为目标卡片的类名

    #### 按钮

    ```
    <button data-card="about">关于</button>
    ```

    #### 链接

    ```
    <a href="javascript:void(0)" data-card="about">关于</a>
    ```

    点击按钮或链接时，卡片组件会切换到相应的卡片

3. ## 添加样式

    #### 内联样式

    向模板文件中添加 `<style></style>` 标签，并在其中添加样式

    #### 外部样式

    在 `src/css/` 文件夹下创建 `<卡片名>.css` 文件，并在模板文件中通过 `link` 标签引入

4. ## 添加脚本

    #### 内联脚本

    向模板文件中添加 `<script></script>` 标签，并在其中添加脚本

    #### 外部脚本

    在 `src/js/` 文件夹下创建 `<卡片名>.js` 文件，并在模板文件中通过 `script` 标签引入

## 示例

以下代码实现了一个简单的 **示例** 卡片

```
<button data-card="example">示例</button>
```

```
<!-- example.html -->

<template>
    <div class="card example">
        <div class="card-header">
            <h2>示例</h2>
            <div class="card-btns">
                <button class="close-btn"></button>
            </div>
        </div>
        <div class="card-content example-inner">
            <p id="example2">0</p </div>
            <button id="example1">点击我</button>
        </div>
</template>

<style>
    .example-inner {
        flex-direction: column;
        justify-content: center;
    }

    #example1 {
        padding: 10px;
        border-radius: 5px;
        background-color: #4CAF50;
    }

    #example1:active {
        background-color: #3E8E41;
    }
</style>

<script>
    var count = 0;
    $("#example1").addEventListener("click", function () {
        count++;
        $("#example2").innerHTML = count;
    });
</script>
```
