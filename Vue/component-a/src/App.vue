<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-toast{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  border: 1px solid green;
  color: green;
  padding: 10px 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  animation: show-hide 2s linear forwards;
}
@keyframes show-hide {
  0% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
  20%, 80% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
}
.vue-toast.toast-top{
  top: 20px;
}
.vue-toast.toast-center{
  top: 50%;
  transform: translateY(-50%);
}
.vue-toast.toast-bottom{
  bottom: 20px;
}

</style>
