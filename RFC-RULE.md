# RFC-RULE


## RFC7231

### RFC语法解释

#### *操作符

*操作符用于描述重复次数

```
<min>*<max>element

min表示最小重复次数，最小为0
max表示最大重复次数，最大为infinity
```

#### []操作符

[]操作符等价于 *1()

```
[foo bar] === *1(foo bar)
```

## User-Agent格式

```

根据RFC7231中对User-Agent的定义

User-Agent = product *( RWS ( product / comment ) )
product         = token ["/" product-version]
product-version = token

可见遵循RFC定义的UserAgent单个条目结构为

product/product-version + " " (comment) + " "
```



