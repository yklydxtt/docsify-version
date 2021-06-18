# docsify-version(2.x)

### 功能

- 使用 docisfy 文档中自由添加变量的插件（1.x 版本只能添加 version 变量）
- 在 markdown 中像使用模板语法一样书写变量  
  [点此查看 1.x 文档](https://github.com/yklydxtt/docsify-version#readme)

# 使用方法

在 html 中配置dv参数

```
<script>
    window.$docsify={
      dv: {
          model: {
              version: 'v2.4.0',
              data:{
                  title: '下载'
              }
          }
       },
    }
</script>
```

引入

```
<script src="https://cdn.jsdelivr.net/gh/yklydxtt/docsify-version@2.0.1/dv.min.js" ></script>
```

在 markdown 文件中使用

```
# <% data.title %>

### HFish <% version %>

```

启动 dicsify 服务可以看到效果  
![image](https://user-images.githubusercontent.com/52593709/122228769-c18f5f80-ceea-11eb-820a-fca2bdce8e00.png)

## 自定义模板字符串
默认字符串为“<%”和“%>”   
如果需要修改：
```
<script>
    window.$docsify={
      dv: {
          model: {
              version: 'v2.4.0'
          },
          option:{
            starter:'{%',
            ender:'%}'
          }
       },
    }
</script>
```
在 markdown 文件中使用

```
### HFish {% version %}
```
