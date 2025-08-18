<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const option = ref({
  color: ['#00f2f1', '#ed3f35'],
  grid: {
    left: '0%',
    top: '0%',
    right: '4%',
    bottom: '4%',
    containLabel: false
  },
  legend: {
    textStyle: {
      color: '#4c9bfd'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .7)'
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
      name: '新增粉丝',
      type: 'line',
      smooth: true,
      data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
    },
    {
      name: '新增游客',
      type: 'line',
      smooth: true,
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    }
  ]
});
</script>

<style lang="scss" scoped></style>
