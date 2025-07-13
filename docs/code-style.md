# 代码风格

## 指南

好的代码风格可以让代码更加易读、易懂、易维护。下面是一些常见的代码风格指南：

[Google HTML/CSS 代码风格指南](https://google.github.io/styleguide/htmlcssguide.html)

[Google JavaScript 代码风格指南](https://google.github.io/styleguide/jsguide.html)

[Google JSON 风格指南](https://google.github.io/styleguide/jsoncstyleguide.html)

[Google Markdown 风格指南](https://google.github.io/styleguide/docguide/style.html)

## 注释

注释是代码中重要的部分，它们可以帮助其他人理解代码的意图、作用、功能。好的注释应该简洁、明了、准确。

-   注释应该是简洁的，避免使用过多的标点符号
-   注释应该与代码保持相同的缩进

#### HTML 注释：

-   单行注释以 `<!-- -->` 开头，后面跟一个空格
-   多行注释以 `<!-- -->` 开头，`-->` 结尾，中间用空格隔开，每行注释前面也要加一个空格

```
<!-- 这是一条单行注释 -->

<!--
这是多行注释
注释内容
-->
```

#### CSS 注释：

-   单行注释以 `/* */` 开头，后面跟一个空格
-   多行注释以 `/* */` 开头，`*/` 结尾，中间用空格隔开，每行注释前面也要加一个空格

```
/* 这是一条单行注释 */

/*
这是多行注释
注释内容
*/
```

#### JavaScript 注释：

-   单行注释以 `//` 开头，后面跟一个空格
-   多行注释以 `/*` 开头，`*/` 结尾，中间用空格隔开，每行注释前面也要加一个空格

```
// 这是一条单行注释

/*
这是多行注释
注释内容
*/
```

#### JSON 注释：

> [!IMPORTANT]
> 我们不建议在 JSON 文件中使用注释，因为 JSON 格式本身就不支持注释

## 命名

命名是指给变量、函数、类、属性等名称，它们应该具有描述性、可读性和唯一性

1.  变量名应该具有描述性，能够准确反映变量的用途和内容
2.  变量名应该具有可读性，能够准确表达变量的含义
3.  变量名应该具有唯一性，避免与其他变量重名
4.  变量名应该采用驼峰命名法，即首字母小写，后续单词首字母大写
5.  常量名应该全部大写，单词间用下划线分隔

```
// 变量名
var userName;
var userAge;

// 函数名
function calculateSum(a, b) {
  return a + b;
}

// 类名
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 常量名
const PI = 3.14159265359;
```

## 格式化

格式化是指对代码进行美化、排版，使其更容易阅读、理解。

1.  使用 2 个空格作为缩进，不要使用 4 个空格
2.  每行代码的长度不超过 80 个字符
3.  代码应该使用 Unix 换行符（LF）
4.  代码文件名应该全部小写，单词间用下划线分隔
5.  代码文件名应该具有描述性，能够准确反映文件的内容

```
// 格式化后的代码
function calculateSum(a, b) {
  return a + b;
}
```
