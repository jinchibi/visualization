<template>
  <div>
    <common-card
      title="今日交易用户数"
      value="81,014"
    >
      <template>
        <v-chart :option="getOptions()"></v-chart>
        <div id="today-users-chart" :style="{ width: '100%', height: '100%' }"></div>
      </template>
      <template v-slot:footer>
        <div>
          <span>退货率</span>
          <span class="emphasis">5.14%</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 220, 150, 82, 200, 134, 290, 330, 150, 234, 97],
          barWidth: '60%'
        }],
        xAxis: {
          type: 'category',
          data: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00'],
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style>

</style>
