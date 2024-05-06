<template>
  <echarts ref="chartRef" :option="option" :autoresize="true" @click="handleClick"></echarts>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { registerMap } from 'echarts/core'
import china from '@/assets/map/china.json'

const chartRef = ref()

// 注册中国地图
registerMap('china', china)

// 生成随机数
function getRrandom() {
  return Math.round(Math.random() * 10000)
}

const data = [
  { name: '北京', value: getRrandom() },
  { name: '上海', value: getRrandom() },
  { name: '广州', value: getRrandom() },
  { name: '深圳', value: getRrandom() },
  { name: '杭州', value: getRrandom() },
]

const geoCoordMap = {
  北京: [116.46, 39.92],
  上海: [121.48, 31.22],
  广州: [113.23, 23.16],
  深圳: [114.07, 22.62],
  杭州: [120.19, 30.26],
}

function convertData(data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
}

const option = ref({
  tooltip: {
    formatter: function (params) {
      if (params.seriesType == 'effectScatter') {
        return params.data.name + '<br>需求人数: ' + params.data.value[2] + '人'
      }
    },
  },
  geo: {
    map: 'china',
    roam: false, // 不开启缩放和平移
    zoom: 1.0, // 视角缩放比例
    label: {
      show: false,
      color: '#fff',
    },
    tooltip: {
      show: false,
    },
    itemStyle: {
      areaColor: 'rgba(43, 196, 243, 0.42)',
      borderColor: 'rgba(43, 196, 243, 1)',
      borderWidth: 1,
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(43, 145, 183, 1)',
      },
      label: {
        show: true,
        color: '#fff',
      }
    },
    select: {
      disabled: true,
      label: {
        color: '#fff',
      },
      itemStyle: {
        areaColor: 'rgba(43, 145, 183, 1)',
      },
    },
  },
  series: [
    {
      name: '人数',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      rippleEffect: {
        brushType: 'stroke',
      },
      tooltip: {
        show: true,
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        color: '#fff',
      },
      itemStyle: {
        color: '#fff',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#2B91B7',
        },
      },
      data: convertData(data),
    },
  ],
})

function handleClick(params) {
  console.log(params)
}
</script>

<style lang="scss" scoped>

</style>
