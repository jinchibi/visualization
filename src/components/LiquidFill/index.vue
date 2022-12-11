<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  mounted () {
    const data = [0.34]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data,
        name: '支付转化率',
        color: ['rgba(97, 216, 0, .7)'],
        radius: '90%',
        itemStyle: {
          opacity: 0.6,
          shadowBlur: 0,
          shadowColor: '#fff'
        },
        // 选中时的透明度
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        },
        // 振幅
        amplitude: 11,
        label: {
          position: ['50%', '50%'],
          formatter: function (v) {
            return `${v.data * 100}%`
          },
          fontSize: 36,
          color: '#999',
          fontWeight: 'normal'
        },
        outline: {
          itemStyle: {
            borderColor: '#aaa4a4',
            borderWidth: 1,
            color: 'none',
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          borderDistance: 0
        },
        backgroundStyle: {
          color: '#fff'
        }
        // backgroundStyle: {
        //   color: 'gray',
        //   borderWidth: 4,
        //   borderColor: '#333'
        // },
        // outline: {
        //   show: false
        // },
        // shape: 'diamond'
      }],
      tooltip: {
        show: true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
