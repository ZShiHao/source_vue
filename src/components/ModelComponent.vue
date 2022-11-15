<template>
 <div>
  <input type="text" v-model="inputText"  />
 </div>
</template>

<script>
// 自定义组件的双向绑定
// 双向绑定,绑定的是元素或组件内部的一个变量(与view相关)和父组件的一个变量
// 父组件的变量从而改变内部的变量(v - bind),子元素的变量同时会通知父组件的变量改变($emit)
// 对于表单元素:内部有value属性,视图view改变,value改变,通过$emit改变父组件属性,v-v-bind绑定value与父组件属性
// 对于自定义组件:内部属性text和父组件的text双向绑定,但是子text不能在子组件内部直接改变(prop只能通过父组件v-bind改变)
export default {
 model: {
  prop: 'text', // 定义了双向绑定的内部属性,默认是value属性
  event:'input' //定义了父组件v-model监听的事件
 },
 data() {
  return  {
   inputText:'' //内部临时变量,相当于text的内部映射
  }
 },
 watch: {
  // 通过监听这个临时变量,触发自定义事件,从而将改变的值传给父组件的text,然后通过父组件的v-bind将数据再传回组件内部
  inputText(v) {
   this.$emit('input',v)
  }
 },
 props: {
   text: {
    type:String
   }
  }
 }
</script>

<style lang="scss" scoped>

</style>