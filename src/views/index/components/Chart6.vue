<template>
  <echarts ref="chartRef" :option="option" :autoresize="true"></echarts>
</template>

<script setup>
import { ref, reactive } from 'vue'

const chartRef = ref()

const option = ref({
  color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8'],
  legend: {
    bottom: '0%',
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      color: 'rgba(255, 255, 255, .6)',
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '点位统计',
      type: 'pie',
      radius: ['10%', '70%'],
      center: ['50%', '42%'],
      roseType: 'radius',
      top: '4%',
      bottom: '10%',
      data: [
        { value: 30, name: '北京' },
        { value: 25, name: '上海' },
        { value: 42, name: '广东' },
        { value: 30, name: '深圳' },
        { value: 25, name: '杭州' },
        { value: 20, name: '成都' },
      ],
      label: {
        fontSize: 12,
        color: '#fff',
      },
      labelLine: {
        length: 10,
        length2: 10,
      },
    },
  ],
})
</script>

<style lang="scss" scoped>

</style>
