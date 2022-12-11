<template>
  <div>
    <ve-map :data="chartData"></ve-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['位置', '税收']
      }
    }
  }
}
</script>

<style>

</style>
