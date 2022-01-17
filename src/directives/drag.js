import Vue from 'vue'

Vue.directive('drag', {
  inserted (el) {
    if (typeof document.ontouchstart !== 'undefined') {
      // 移动端
      el.ontouchstart = e => {
        const diffX = e.changedTouches[0].clientX - el.offsetLeft
        const diffY = e.changedTouches[0].clientY - el.offsetTop
        document.ontouchmove = e => {
          el.style.left = (e.changedTouches[0].clientX - diffX) + 'px'
          el.style.top = (e.changedTouches[0].clientY - diffY) + 'px'
        }
        document.ontouchend = () => {
          document.ontouchmove = null
          document.ontouchend = null
        }
      }
    } else {
      // pc端
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
    }
  }
})
