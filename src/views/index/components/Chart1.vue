<template>
  <echarts ref="chartRef" :option="option" :autoresize="true"></echarts>
</template>

<script setup>
import { ref } from 'vue'

const chartRef = ref()

const option = ref({
  color: ['#409eff'],
  grid: {
    left: '0%',
    top: '4%',
    right: '2%',
    bottom: '4%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
      },
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: true,
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        formatter: '{value}',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)',
        },
      },
    },
  ],
  series: [
    {
      name: '就业人数',
      type: 'bar',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      barWidth: 20,
      itemStyle: {
        borderRadius: 2,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#00FFE3' },
            { offset: 1, color: '#4693EC' }
          ],
          global: false // 缺省为 false
        }
      },
    },
  ],
})
</script>

<style lang="scss" scoped>

</style>
