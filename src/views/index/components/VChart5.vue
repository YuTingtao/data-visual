<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const option = ref({
  color: ['#0184d5', '#00d887'],
  grid: {
    left: '0%',
    top: '0%',
    right: '4%',
    bottom: '0%'
  },
  legend: {
    bottom: '14%',
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
        formatter: '{value}',
        color: 'rgba(255, 255, 255, .7)'
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
      name: '播放量',
      type: 'line',
      smooth: true,
      areaStyle: {
        // 区域渐变色
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(1, 132, 213, 0.4)' },
            { offset: 1, color: 'rgba(1, 132, 213, 0.1)' }
          ],
          global: false
        }
      },
      data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
    },
    {
      name: '转发量',
      type: 'line',
      smooth: true,
      areaStyle: {
        // 区域渐变色
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(0, 216, 135, 0.4)' },
            { offset: 1, color: 'rgba(0, 216, 135, 0.1)' }
          ],
          global: false
        }
      },
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    }
  ]
});
</script>
