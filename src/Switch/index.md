---
title: Switch
nav:
    title: 通用
    path: /components
group:
    path: /components
---

# Switch开关

### 基础用法

> 基础使用Switch组件方法(传入value值,必填项!!!)

<code src="./demo/demo1.jsx"/>

### 设置选中颜色

> 通过设置activeColor和negativeColor属性设置自定义选中/不选中的背景颜色

<code src="./demo/demo2.jsx"/>

### 设置选中文字

> 通过设置activeWord和negativeWord属性来设置自定义选中/不选中的文字颜色，设置activeWordColor属性设置选中时的文字颜色

<code src="./demo/demo3.jsx"/>

### 设置自定义事件

> 通过设置changeHandle，可以设置自定义事件，形参即为点击完之后的状态值value

<code src="./demo/demo4.jsx"/>

### 设置不可选中

> 通过设置disable属性，可以设置组件是否可选属性

<code src="./demo/demo5.jsx"/>

### 参数说明

| 参数 | 说明 | 类型 |  默认值 |
| :-: | :-: | :-: |  :-: |
| value | 初始数据 | `number` |
| activeColor | 自定义成功颜色 | `string` | `green` |
| negativeColor | 自定义失败颜色 | `string` | `red` |
| activeWord | 自定义成功文字 | `string` | 
| negativeWord | 自定义失败文字 | `string` | 
| activeWordColor | 自定义成功文字颜色 | `string` | `skyblue` |
| disable | 是否禁止修改 | `boolean` | `false` |



### 事件说明

|    参数     |   说明   |    类型    |
| :---------: | :------: | :--------:  |
| changeHandle | 自定义点击事件 | `function` |