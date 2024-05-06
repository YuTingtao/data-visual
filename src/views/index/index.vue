<template>
  <div class="page-index">
    <div class="page-head">
      <h2 class="item-title">ECharts-数据可视化</h2>
      <AppTime></AppTime>
    </div>

    <div class="page-main">
      <div class="page-column">
        <AppPanel title="就业行业">
          <Chart1></Chart1>
        </AppPanel>
        <AppPanel title="人员变化">
          <Chart2></Chart2>
        </AppPanel>
        <AppPanel title="年龄分布">
          <Chart3></Chart3>
        </AppPanel>
      </div>

      <div class="page-column-middle">
        <AppPanel class="middle-top">
          <div class="item">
            <div class="num">135800</div>
            <div>前端需求人数</div>
          </div>
          <div class="item">
            <div class="num">158800</div>
            <div>市场供应人数</div>
          </div>
        </AppPanel>
        <div class="map-box">
          <div class="map-bg1"></div>
          <div class="map-bg2"></div>
          <div class="map-bg3"></div>
          <ChartMap></ChartMap>
        </div>
      </div>

      <div class="page-column">
        <AppPanel title="技能掌握">
          <Chart4></Chart4>
        </AppPanel>
        <AppPanel title="播放量">
          <Chart5></Chart5>
        </AppPanel>
        <AppPanel title="地区分布">
          <Chart6></Chart6>
        </AppPanel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import autofit from 'autofit.js'
import AppPanel from './components/AppPanel.vue'
import AppTime from './components/AppTime.vue'
import Chart1 from './components/Chart1.vue'
import Chart2 from './components/Chart2.vue'
import Chart3 from './components/Chart3.vue'
import Chart4 from './components/Chart4.vue'
import Chart5 from './components/Chart5.vue'
import Chart6 from './components/Chart6.vue'
import ChartMap from './components/ChartMap.vue'

const router = useRouter()
const route = useRoute()

// autofit
onMounted(() => {
  autofit.init({
    dh: 1080,
    dw: 1920,
    el: 'body',
    resize: true
  })
})
</script>

<style lang="scss" scoped>
.page-index {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/bg_page.jpg') 50% 50% no-repeat;
  background-size: cover;
}

.page-head {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 100px;
  background: url('@/assets/img/bg_head.png') top center no-repeat;
  background-size: 100% 100%;
  color: #fff;
  text-align: center;
  line-height: 90px;
  .item-title {
    font-size: 38px;
  }
  :deep(.app-time) {
    position: absolute;
    top: -10px;
    right: 20px;
    color: rgba(255, 255, 255, .7);
  }
}

.page-main {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px 15px 15px;
}

.page-column {
  display: flex;
  flex-direction: column;
  width: 27.25%;
}

.page-column-middle {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 45.5%;
  padding: 0 15px;
}

.middle-top {
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  height: 154px;
  background: rgba(101, 132, 226, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  .item {
    position: relative;
    width: 50%;
    & + .item:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 1.5px;
      height: 70px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .num {
    font-size: 70px;
    font-family: digitFont;
    font-weight: bold;
    color: #ffeb7b;
  }
}

.map-box {
  flex-shrink: 0;
  flex-grow: 1;
  position: relative;
  height: 786px;
  margin-top: 15px;
  .map-bg1, .map-bg2, .map-bg3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }
  .map-bg1 {
    width: 518px;
    height: 518px;
    background-image: url('@/assets/img/map.png');
    opacity: 0.3;
  }
  .map-bg2 {
    width: 566px;
    height: 566px;
    background-image: url('@/assets/img/map_line.png');
    opacity: 0.6;
    animation: rotate 10s linear infinite;
  }
  .map-bg3 {
    width: 566px;
    height: 566px;
    background-image: url('@/assets/img/map_grid.png');
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    animation-direction: reverse;
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
