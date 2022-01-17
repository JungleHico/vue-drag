# Vue 自定义元素拖拽指令

对需要拖拽的元素使用 `v-drag` 指令，该指令兼容移动端，注意元素定位需要改成 `absolute` 或 `fixed`。

## 核心代码

```js
el.onmousedown = e => {
  const diffX = e.clientX - el.offsetLeft
  const diffY = e.clientY - el.offsetTop
  document.onmousemove = e => {
    el.style.left = (e.clientX - diffX) + 'px'
    el.style.top = (e.clientY - diffY) + 'px'
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
  }
}
```
