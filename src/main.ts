import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import pinia from './store/createPinia.ts';

// 公共样式
import './assets/style/main.scss';
import './utils/flexible.js';
// svg
import SvgIcon from './components/svgIcon/SvgIcon.vue';
import 'virtual:svg-icons-register';

// Echarts
import { use as EchartsUse } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart, PieChart, MapChart, EffectScatterChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, GeoComponent } from 'echarts/components';

const app = createApp(App);
app.use(router);
app.use(pinia);

// 注册svg-icon组件
app.component('svg-icon', SvgIcon);

EchartsUse([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  GeoComponent
]);

// 挂载
app.mount('#app');
