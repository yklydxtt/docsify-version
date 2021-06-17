# docsify-version

### 功能
- 使用 docisfy 文档中自由添加变量的插件（1.x版本只能添加version变量）
- 在markdown中像使用模板语法一样书写变量   
[点此查看2.x文档](https://github.com/yklydxtt/docsify-version/tree/v2.0.0#readme)

# 使用方法

在 html 中配置appVersion参数

```
<script>
    window.$docsify ={
        appVersion:'v2.4.0'
    }
</script>
```

引入

```
<script src="https://cdn.jsdelivr.net/gh/yklydxtt/docsify-version@1.0.1/index.js" ></script>
```

在markdown文件中使用   
```
# 下载

### HFish <%- version %>

```
启动dicsify服务可以看到效果   
![image](https://user-images.githubusercontent.com/52593709/122228769-c18f5f80-ceea-11eb-820a-fca2bdce8e00.png)
