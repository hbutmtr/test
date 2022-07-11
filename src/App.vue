<template>
  <div id="app">
    <myHead></myHead>
    <br><br><br>
    <MyMain></MyMain>
    <router-link to="/content">点这里</router-link>
    <router-view/>
  </div>
</template>

<script>
import myHead from './myHead/myHead'
import MyMain from './myMain/myMain.vue'
export default {
  components: { myHead, MyMain },
  name: 'App'
}
</script>

<style>
</style>
