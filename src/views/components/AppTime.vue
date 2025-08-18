<template>
  <span class="app-time"> {{ date.y }}年{{ date.M }}月{{ date.d }}日 {{ date.h }}:{{ date.m }}:{{ date.s }} </span>
</template>

<script setup>
import { reactive } from 'vue';

const date = reactive({
  y: null,
  M: null,
  d: null,
  h: null,
  m: null,
  s: null
});

function setTime() {
  let dt = new Date();
  let M = dt.getMonth() + 1;
  let d = dt.getDate();
  let h = dt.getHours();
  let m = dt.getMinutes();
  let s = dt.getSeconds();
  date.y = dt.getFullYear();
  date.M = M < 10 ? '0' + M : M;
  date.d = d < 10 ? '0' + d : d;
  date.h = h < 10 ? '0' + h : h;
  date.m = m < 10 ? '0' + m : m;
  date.s = s < 10 ? '0' + s : s;
}
setTime();
setInterval(() => {
  setTime();
}, 500);
</script>

<style lang="scss">
.app-time {
  font-size: 0.18rem;
}
</style>
