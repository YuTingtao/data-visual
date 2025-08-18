<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const colors = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
const option = ref({
  grid: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      show: true,
      data: ['HTML5', 'CSS3', 'JavaScript', 'VUE', 'NODE'],
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .9)'
      }
    },
    {
      show: true,
      data: [702, 350, 610, 793, 664],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, .9)'
      }
    }
  ],
  series: [
    {
      name: '条',
      type: 'bar',
      yAxisIndex: 0,
      data: [70, 34, 60, 78, 69],
      barCategoryGap: 50,
      barWidth: 10,
      itemStyle: {
        borderRadius: 5,
        color: function (params) {
          let len = colors.length;
          return colors[params.dataIndex % len];
        }
      },
      label: {
        show: true,
        color: '#fff',
        position: 'inside',
        formatter: '{c}%'
      },
      emphasis: {
        disabled: true
      }
    },
    {
      name: '框',
      type: 'bar',
      yAxisIndex: 1,
      barCategoryGap: 50,
      data: [100, 100, 100, 100, 100],
      barWidth: 14,
      itemStyle: {
        color: 'none',
        borderColor: '#00c1de',
        borderWidth: 1,
        borderRadius: 7
      }
    }
  ]
});
</script>

<style lang="scss" scoped></style>
