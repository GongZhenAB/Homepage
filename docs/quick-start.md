# 快速上手

## 配置环境

1. #### 安装 Git

    从 [Git 官网](https://git-scm.com/downloads) 下载安装包并安装

    ##### 验证 Git 安装

    ```
    git --version
    ```

2. #### 安装 PHP（可选）

    > PHP 是本项目的后端语言，如果你不需要修改后端代码，可以跳过此步骤

    从 [PHP 官网](https://www.php.net/downloads.php) 下载安装包并安装

    ##### 验证 PHP 安装

    ```
    php -v
    ```

    ##### 配置环境变量

    在系统环境变量中添加以下路径：

    `<你的 PHP 安装路径>`（如：`C:\Program Files\PHP`）

3. #### 配置开发环境

    推荐使用 Chrome 浏览器，安装以下插件：

    - **Live Server Web Extension** 前后端联动插件  
      [配置教程](https://blog.csdn.net/m0_66441341/article/details/125129775)

    推荐使用 VSCode 编辑器，安装以下插件：

    - **Live Server** 实时预览
    - **PHP Server** 本地 PHP 服务器

## 创建项目

1. #### 克隆项目

    在任意位置新建文件夹，在命令行中进入该文件夹，输入以下命令克隆项目：

    ```
    git clone https://github.com/GongZhenAB/Homepage.git
    ```

2. #### 提取源码

    进入 `Homepage/source/` 文件夹

    将所有文件复制到项目根目录，删除其余的文件

3. #### 开始开发

    1. 打开 VSCode，打开 `Homepage` 文件夹，在左侧资源管理器中打开 `index.html` 文件

    2. 点击底部状态栏的 ![Go Live](/images/quick-start-1.png) 按钮，启动实时预览（Live Server 的默认端口为 `127.0.0.1:5500`）

    3. 点击顶部菜单栏的 ![PHP Server](/images/quick-start-2.png) 按钮，启动本地 PHP 服务器（PHP Server 的默认端口为 `localhost:3000`）

    4. 打开浏览器，访问 `127.0.0.1:5500`（若你需要使用 PHP 服务，请访问 `localhost:3000`）

    此时你应该能看到一个基本的网页了
