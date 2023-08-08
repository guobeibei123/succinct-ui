---
title: Rate
nav:
    title: 数据展示
    path: /components
group:
    path: /data
---

# Rate 评分

### 基础用法

> 基础使用Rate组件方法(totalScore,总分值是必填项!!!)

<code src="./Demo/Demo1.jsx"/>

### 设置自定义符号

> 可以通过写双标签中插入内容 children 自定义符号(文字符号，默认⚝)

<code src="./Demo/Demo2.jsx"/>

### 设置提示文本

> 可以通过设置 text 属性，插入提示分数文本(默认为false)

<code src="./Demo/Demo3.jsx"/>

### 设置默认分值

> 可以通过设置 score 属性，设置初始分值(默认为1)

<code src="./Demo/Demo4.jsx"/>

### 设置只读属性

> 可以通过设置 readonly 属性，设置属性只读(默认为false)

<code src="./Demo/Demo5.jsx"/>



### 参数说明

| 参数 | 说明 | 类型 |  默认值 |
| :-: | :-: | :-: |  :-: |
| totalScore | 评分总数 | `number` |
| score | 默认评分 | `number` |  `1` |
| text | 文本展示 | `boolean` |  `false` |
| children | 选择标志 | `string` |  `⚝` |
| readonly | 是否只读 | `boolean` |  `false` |
