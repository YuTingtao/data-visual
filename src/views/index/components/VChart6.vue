<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const option = ref({
  color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'],
  legend: {
    bottom: '0%',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.7)'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '点位统计',
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['40%', '60%'],
      data: [
        { value: 30, name: '北京' },
        { value: 25, name: '上海' },
        { value: 42, name: '广东' },
        { value: 30, name: '深圳' }
      ],
      label: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.9)'
      },
      labelLine: {
        length: 15,
        length2: 10
      }
    }
  ]
});
</script>

<style lang="scss" scoped></style>
