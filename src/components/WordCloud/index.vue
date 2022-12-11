<template>
  <div id="container1"></div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  mounted () {
    const data = [{
      name: '星期日',
      value: 100
    }, {
      name: '商店',
      value: 83
    }, {
      name: '一毛',
      value: 83
    }, {
      name: '请问',
      value: 99
    }, {
      name: '今天',
      value: 85
    }]
    const chart = this.$echarts.init(document.getElementById('container1'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        // shape: 'circle',
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          // Color can be a callback function or a color string
          color: function () {
            // Random color
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')'
          }
        },
        emphasis: {
          focus: 'self',

          textStyle: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        left: null,
        top: null,
        width: '100%',
        height: '100%',
        right: null,
        bottom: null
      }]

    })
  }
}
</script>

<style lang="scss" scoped>
  #container1 {
    width: 100%;
    height: 100%;
  }
</style>
