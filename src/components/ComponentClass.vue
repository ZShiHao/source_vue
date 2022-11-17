<template>
  <div>
  {{value}}
  </div>
</template>

<script>
export default {
  props:['value'],
  created() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>