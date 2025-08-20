<template>
  <VChart ref="chartRef" :option="option" :autoresize="true"></VChart>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';

const chartRef = ref();

const option = ref({
  color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'],
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '年龄分布',
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [
        { value: 400, name: '20-29岁' },
        { value: 200, name: '30-39岁' },
        { value: 200, name: '40-49岁' },
        { value: 100, name: '50岁以上' }
      ],
      label: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.9)',
        formatter: '{b}: {d}%'
      },
      labelLine: {
        length: 15,
        length2: 10
      }
    }
  ]
});
</script>
