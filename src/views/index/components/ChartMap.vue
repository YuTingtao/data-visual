<template>
  <div class="map-inner">
    <echarts ref="chartRef" :option="option" :autoresize="true" @click="onClick"></echarts>
    <span v-show="option.geo.map !== 'china'" class="map-back" @click="goBack">返回全国</span>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { registerMap } from 'echarts/core';
import china from '/public/map/china.json';
import provinces from '/public/map/province/index.js';
// console.log('中国:', china.features)

const chartRef = ref();

// 注册中国地图
registerMap('china', china);
provinces.forEach(item => {
  registerMap(item.name, item.data);
});

// 生成随机数
function getRrandom() {
  return Math.round(Math.random() * 1000);
}

// 模拟点位数据
const data = [
  { name: '北京', value: [116.46, 39.92, getRrandom()] },
  { name: '上海', value: [121.48, 31.22, getRrandom()] },
  { name: '广州', value: [113.23, 236, getRrandom()] },
  { name: '深圳', value: [114.07, 22.62, getRrandom()] },
  { name: '杭州', value: [120.19, 30.26, getRrandom()] }
];

const option = ref({
  tooltip: {
    formatter: function (params) {
      if (params.seriesType == 'effectScatter') {
        return params.data.name + '<br>需求人数: ' + params.data.value[2] + '人';
      }
    }
  },
  geo: {
    map: 'china',
    roam: false, // 不开启缩放和平移
    zoom: 1.0, // 视角缩放比例
    label: {
      show: false,
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    itemStyle: {
      areaColor: 'rgba(43, 196, 243, 0.42)',
      borderColor: 'rgba(43, 196, 243, 1)',
      borderWidth: 1
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(33, 205, 231, 1)'
      },
      label: {
        show: true,
        color: '#fff'
      }
    },
    select: {
      disabled: true,
      label: {
        color: '#fff'
      },
      itemStyle: {
        areaColor: 'rgba(33, 205, 231, 1)'
      }
    }
  },
  series: [
    {
      name: '人数',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      rippleEffect: {
        brushType: 'stroke'
      },
      tooltip: {
        show: false
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}{@[2]}',
        color: '#fff'
      },
      itemStyle: {
        color: '#fff'
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(33, 205, 231, 1)'
        }
      },
      data: data
    }
  ]
});

// 点击，进入省级地图
function onClick(params) {
  // console.log(params)
  if (provinces.some(item => item.name == params.name)) {
    option.value.geo.map = params.name;
    option.value.series[0].data = [];
  }
}

// 返回中国地图
function goBack(params) {
  option.value.geo.map = 'china';
  option.value.series[0].data = data;
}
</script>

<style lang="scss" scoped>
.map-inner {
  position: relative;
  width: 100%;
  height: 100%;
  .map-back {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
    z-index: 10;
    font-size: 18px;
    padding: 5px 10px;
  }
}
</style>
