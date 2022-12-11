<template>
  <div>
    <common-card
      title="累积用户数"
      value="1,087,503"
    >
      <template>
        <v-chart :option="getOptions()"></v-chart>
        <!-- <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div> -->
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
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
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          data: [200],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [220],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])

            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M512 426.666667l170.666667 213.333333H341.333333z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M512 640l170.666667-213.333333H341.333333z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }]
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
