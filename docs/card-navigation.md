# 卡片导航

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


```
<button data-card="about">关于</button>

<div class="card about">
...
</div>
```
