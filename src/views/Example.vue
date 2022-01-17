<template>
  <div class="container">
    <div class="box" v-drag>拖拽</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
.box {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>
