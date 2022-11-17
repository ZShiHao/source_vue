import Vue from '../src/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

let vm=new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(vm)