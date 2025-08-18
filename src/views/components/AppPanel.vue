<template>
  <div class="app-panel">
    <div class="app-panel-title">
      <slot name="header">{{ title }}</slot>
    </div>
    <slot></slot>
    <div class="app-panel-border"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: [String, Number]
  }
});
</script>

<style lang="scss">
.app-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 0.15rem;
  background: rgba(255, 255, 255, 0.04) url('@/assets/img/bg_line.png') 50% 50% no-repeat;
  background-size: cover;
  border: 0.01rem solid rgba(25, 186, 139, 0.17);
  & + .app-panel {
    margin-top: 0.15rem;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0.15rem;
    height: 0.15rem;
    border-top: 0.02rem solid #02a6b5;
  }
  &:before {
    left: 0;
    border-left: 0.02rem solid #02a6b5;
  }
  &:after {
    right: 0;
    border-right: 0.02rem solid #02a6b5;
  }

  .echarts {
    flex-grow: 1;
  }
}

.app-panel-border {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0.15rem;
    height: 0.15rem;
    border-bottom: 0.02rem solid #02a6b5;
  }
  &:before {
    left: 0;
    border-left: 0.02rem solid #02a6b5;
  }
  &:after {
    right: 0;
    border-right: 0.02rem solid #02a6b5;
  }
}

.app-panel-title {
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: -0.15rem;
  line-height: 0.5rem;
  font-size: 0.18rem;
  text-align: center;
  color: #fff;
}
</style>
