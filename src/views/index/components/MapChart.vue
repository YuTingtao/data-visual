<template>
  <div v-loading.fullscreen="loading" class="map-inner">
    <VChart ref="chartRef" :option="option" :autoresize="true" @click="onClick"></VChart>
    <span v-show="option.geo && option.geo?.map !== 'china'" class="map-back" @click="goBack">返回全国</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';
import axios from 'axios';
import { registerMap, getMap } from 'echarts/core';
import chinaMap from '/public/map/china.json';

const chartRef = ref();

// 注册中国地图
registerMap('china', chinaMap);

// 生成随机数
function getRandom() {
  return Math.round(Math.random() * 1000);
}

// 模拟点位数据
const data = [
  { name: '北京', value: [116.46, 39.92, getRandom()] },
  { name: '上海', value: [121.48, 31.22, getRandom()] },
  { name: '广州', value: [113.23, 236, getRandom()] },
  { name: '深圳', value: [114.07, 22.62, getRandom()] },
  { name: '杭州', value: [120.19, 30.26, getRandom()] }
];

// echarts 配置项
const option = ref({
  geo: {
    map: 'china',
    roam: true, // 缩放和平移
    zoom: 1.0, // 视角缩放比例
    center: ['50%', '50%'], // 地图中心点坐标
    top: '4%',
    left: '4%',
    right: '4%',
    bottom: '4%',
    preserveAspect: true, // 保持被渲染的内容的原始包围盒的 aspect ratio
    label: {
      show: false,
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    itemStyle: {
      areaColor: 'rgba(43, 196, 243, 0.5)',
      borderColor: 'rgba(43, 196, 243, 1)',
      borderWidth: 1
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(33, 205, 231, 0.8)'
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
        areaColor: 'rgba(33, 205, 231, 0.8)'
      }
    }
  },
  tooltip: {
    formatter: function (params) {
      if (params.seriesType == 'effectScatter') {
        return params.data.name + '<br>需求人数: ' + params.data.value[2] + '人';
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

// 点击地图下钻
function onClick(params) {
  // console.log(params);
  // 判断是否注册了地图
  if (getMap(params.name)) {
    option.value.geo.map = params.name;
    option.value.series[0].data = [];
    return;
  }
  // 如果是中国地图，加载省级地图
  if (option.value.geo.map === 'china') {
    loadMap(params.name);
  }
}

const loading = ref(false);

// 加载地图
function loadMap(name) {
  loading.value = true;
  axios
    .get(`${import.meta.env.BASE_URL}./map/province/${name}.json`)
    .then(res => {
      registerMap(name, res.data);
      option.value.geo.map = name;
      option.value.series[0].data = [];
    })
    .finally(() => {
      loading.value = false;
    });
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
}
.map-back {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
  font-size: 0.18rem;
  line-height: 1.6;
  color: #fff;
}
</style>
