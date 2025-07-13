# 外链链接

> [!NOTE]
> 请确保添加的域名是可信任的

打开 `src/config/whitelist.json` 文件，向 `trustedDomains` 数组中添加域名，如下所示：

```
{
  "trustedDomains": [
    "example1.com",
    "example2.com"
  ]
}
```

如果需要编辑深度链接匹配正则，请编辑 `deepLinkPattern` 的键值

```
"deepLinkPattern": "^(?!https?:|ftp:|file:)[a-z][a-z0-9+\\-.]*:"
```
