import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'

import './assets/style/main.scss'

import ECharts from 'vue-echarts'
import { use as EchartsUse } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, MapChart, EffectScatterChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, GeoComponent } from 'echarts/components'

EchartsUse([
  CanvasRenderer,
  BarChart, LineChart, PieChart, MapChart, EffectScatterChart,
  GridComponent, TooltipComponent, LegendComponent, GeoComponent,
])

const app = createApp(App)
app.use(router)
app.component('svg-icon', SvgIcon)
app.component('echarts', ECharts)
app.mount('#app')

console.log('node_env:', process.env.NODE_ENV)
console.log('vite_env:', import.meta.env)
