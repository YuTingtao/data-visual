<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const option = ref({
  color: ['#409eff'],
  grid: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['旅游', '教育培训', '游戏', '医疗', '电商', '社交', '金融'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .7)',
        interval: 0
      },
      axisLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: true
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .7)',
        formatter: '{value}'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)'
        }
      }
    }
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
      }
    }
  ]
});
</script>

<style lang="scss" scoped></style>
