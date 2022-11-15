<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ModelComponent v-model="text"/>
    {{text}}
  </div>
</template>

<script>
import ModelComponent from './components/ModelComponent.vue'
export default {
 name: 'App',
 data() {
  return {
   text:'zhang'
  }
 },
 methods: {
  handle(e) {
   this.text=e
  }
 },
  components: {
  ModelComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
