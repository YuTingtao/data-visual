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
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  title: {
    type: [String, Number]
  }
})
</script>

<style lang="scss">
.app-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  background: rgba(255, 255, 255, 0.04) url('@/assets/img/bg_line.png') 50% 50% no-repeat;
  background-size: cover;
  border: 1px solid rgba(25, 186, 139, 0.17);
  & + .app-panel {
    margin-top: 15px;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 15px;
    height: 15px;
    border-top: 2px solid #02a6b5;
  }
  &:before {
    left: 0;
    border-left: 2px solid #02a6b5;
  }
  &:after {
    right: 0;
    border-right: 2px solid #02a6b5;
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
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #02a6b5;
  }
  &:before {
    left: 0;
    border-left: 2px solid #02a6b5;
  }
  &:after {
    right: 0;
    border-right: 2px solid #02a6b5;
  }
}

.app-panel-title {
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: -15px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  color: #fff;
}
</style>
