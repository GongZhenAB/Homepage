# 文件目录

命名规范

-   文件与文件夹名全部小写，使用 `-` 连接
-   文件名不超过 20 个字符，文件夹名不超过 10 个字符
-   文件名不应包含特殊字符，如 `!` 等
-   文件名应与内容相对应，如 `about.html` 为 about 卡片组件
-   文件夹名应与文件类型相对应，如 `README.md` 应放置于 `docs` 文件夹中

## 目录结构

```
Homepage/
├── docs/                 放置文档文件
├── images/               放置仓库图片资源
├── source/               放置源码文件
│   ├── config/           放置配置文件
│   ├── src/
│       ├── assets/       放置静态资源文件
│       │   ├── icons/    放置图标文件
│       │   ├── fonts/    放置字体文件
│       │   ├── images/   放置图片文件
│       ├── components/   放置组件文件
│       ├── css/          放置样式文件
│       ├── data/         放置 JSON 数据文件
│       ├── js/           放置脚本文件及 JS 库
├── favicon.ico           网站图标
├── index.html            网站入口文件
├── CODE_OF_CONDUCT.md    行为准则文件
├── CONTRIBUTING.md       贡献指南文件
├── LICENSE               许可证文件
├── README.md             项目说明文件
```
