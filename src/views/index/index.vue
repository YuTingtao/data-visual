<template>
  <div class="page-index">
    <div class="page-head">
      <h2 class="item-title">ECharts-数据可视化</h2>
      <AppTime></AppTime>
    </div>

    <div class="page-main">
      <div class="page-column">
        <AppPanel title="就业行业">
          <VChart1></VChart1>
        </AppPanel>
        <AppPanel title="人员变化">
          <VChart2></VChart2>
        </AppPanel>
        <AppPanel title="年龄分布">
          <VChart3></VChart3>
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
          <MapChart></MapChart>
        </div>
      </div>

      <div class="page-column">
        <AppPanel title="技能掌握">
          <VChart4></VChart4>
        </AppPanel>
        <AppPanel title="播放量">
          <VChart5></VChart5>
        </AppPanel>
        <AppPanel title="地区分布">
          <VChart6></VChart6>
        </AppPanel>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppPanel from './components/AppPanel.vue';
import AppTime from './components/AppTime.vue';
import VChart1 from './components/VChart1.vue';
import VChart2 from './components/VChart2.vue';
import VChart3 from './components/VChart3.vue';
import VChart4 from './components/VChart4.vue';
import VChart5 from './components/VChart5.vue';
import VChart6 from './components/VChart6.vue';
import MapChart from './components/MapChart.vue';
</script>

<style lang="scss" scoped>
.page-index {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #00093e url('@/assets/img/bg_page.jpg') 50% 50% no-repeat;
  background-size: cover;
}

.page-head {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 1rem;
  background: url('@/assets/img/bg_head.png') top center no-repeat;
  background-size: 100% 100%;
  color: #fff;
  text-align: center;
  line-height: 0.9rem;
  .item-title {
    font-size: 0.38rem;
  }
  :deep(.app-time) {
    position: absolute;
    top: -0.1rem;
    right: 0.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

.page-main {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 0.1rem 0.15rem 0.15rem 0.15rem;
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
  padding: 0 0.15rem;
}

.middle-top {
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  height: 1.54rem;
  margin-bottom: 0.15rem;
  background: rgba(101, 132, 226, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.18rem;
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
      width: 0.015rem;
      height: 0.7rem;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .num {
    font-size: 0.7rem;
    font-family: digitFont;
    font-weight: bold;
    color: #ffeb7b;
  }
}

.map-box {
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  .map-bg1,
  .map-bg2,
  .map-bg3 {
    position: absolute;
    left: 50%;
    top: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }
  .map-bg1 {
    width: 5.18rem;
    height: 5.18rem;
    margin-left: -2.59rem;
    margin-top: -2.59rem;
    background-image: url('@/assets/img/map.png');
    opacity: 0.3;
  }
  .map-bg2 {
    width: 5.66rem;
    height: 5.66rem;
    margin-left: -2.83rem;
    margin-top: -2.83rem;
    background-image: url('@/assets/img/map_line.png');
    opacity: 0.6;
    animation: rotate 10s linear infinite;
  }
  .map-bg3 {
    width: 5.66rem;
    height: 5.66rem;
    margin-left: -2.83rem;
    margin-top: -2.83rem;
    background-image: url('@/assets/img/map_grid.png');
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    animation-direction: reverse;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
