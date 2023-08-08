---
title: Step
nav:
    title: 数据展示
    path: /components
group:
    path: /data
---

# Step 步进器

### 基础用法

> 基础使用Step组件方法(传入value值,必填项!!!)

<code src="./Demo/Demo1.jsx"/>

### 设置增减幅度

> 通过设置 step 属性设置每次增加/减少的数值(默认是1)

<code src="./Demo/Demo2.jsx"/>

### 设置最大和最小值，规定取值范围

> 通过设置 maxValue 和 minValue 属性，设定值的范围，超出则为显示为最小/大值

<code src="./Demo/Demo3.jsx"/>

### 设置增加/减少触发的事件

> 通过设置addHandle/reduceHandle触发增加/减少的事件

<code src="./Demo/Demo4.jsx"/>

### 设置手动修改数据事件

> 通过设置 changeValue 触发手动修改的事件，函数的形参是修改后的值

<code src="./Demo/Demo5.jsx"/>

### 设置是否关闭手动修改数据

> 通过设置 isChange 属性，设定是否关闭手动修改

<code src="./Demo/Demo6.jsx"/>

### 参数说明

| 参数 | 说明 | 类型 |  默认值 |
| :-: | :-: | :-: |  :-: |
| value | 初始值 | `number` |
| minValue | 最小值 | `number` | `0` |
| maxValue | 最大值 | `number` |
| step | 递进值 | `number` | `1` |
| isChange | 是否可以手动修改 | `boolean` | `false` |


### 事件说明

|    参数     |   说明   |    类型    |
| :---------: | :------: | :--------:  |
| addHandle | 增加触发函数 | `function` |
| reduceHandle | 减少触发函数 | `function` |
| changeValue | 手动修改触发函数 | `function`  |