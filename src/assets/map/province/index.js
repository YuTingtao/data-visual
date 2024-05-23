const modules = import.meta.glob('./*.json', { eager: true })
const data = {}
for (const path in modules) {
  let key = path.replace(/(.*\/)*([^.]+).*/gi,'$2')
  data[key] = modules[path].default
}

export default [
  {
    name: '北京',
    id: '110000',
    data: data.beijing,
  },
  {
    name: '天津',
    id: '120000',
    data:  data.tianjin,
  },
  {
    name: '河北',
    id: '130000',
    data: data.hebei,
  },
  {
    name: '山西',
    id: '140000',
    data: data.shanxi,
  },
  {
    name: '内蒙古',
    id: '150000',
    data: data.shanxi,
  },
  {
    name: '辽宁',
    id: '210000',
    data: data.liaoning,
  },
  {
    name: '吉林',
    id: '220000',
    data: data.jilin,
  },
  {
    name: '黑龙江',
    id: '230000',
    data: data.heilongjiang,
  },
  {
    name: '上海',
    id: '310000',
    data: data.shanghai,
  },
  {
    name: '江苏',
    id: '320000',
    data: data.jiangsu,
  },
  {
    name: '浙江',
    id: '330000',
    data: data.zhejiang,
  },
  {
    name: '安徽',
    id: '340000',
    data: data.anhui,
  },
  {
    name: '福建',
    id: '350000',
    data: data.fujian,
  },
  {
    name: '江西',
    id: '360000',
    data: data.jiangxi,
  },
  {
    name: '山东',
    id: '370000',
    data: data.shandong,
  },
  {
    name: '河南',
    id: '410000',
    data: data.henan,
  },
  {
    name: '湖北',
    id: '420000',
    data: data.hubei,
  },
  {
    name: '湖南',
    id: '430000',
    data: data.hunan,
  },
  {
    name: '广东',
    id: '440000',
    data: data.guangdong,
  },
  {
    name: '广西',
    id: '450000',
    data: data.guangxi,
  },
  {
    name: '海南',
    id: '460000',
    data: data.hainan,
  },
  {
    name: '重庆',
    id: '500000',
    data: data.chongqing,
  },
  {
    name: '四川',
    id: '510000',
    data: data.sichuan,
  },
  {
    name: '贵州',
    id: '520000',
    data: data.guizhou,
  },
  {
    name: '云南',
    id: '530000',
    data: data.yunnan,
  },
  {
    name: '西藏',
    id: '540000',
    data: data.xizang,
  },
  {
    name: '陕西',
    id: '610000',
    data: data.shanxi1,
  },
  {
    name: '甘肃',
    id: '620000',
    data: data.gansu,
  },
  {
    name: '青海',
    id: '630000',
    data: data.qinghai,
  },
  {
    name: '宁夏',
    id: '640000',
    data: data.ningxia,
  },
  {
    name: '新疆',
    id: '650000',
    data: data.xinjiang,
  },
  {
    name: '香港',
    id: '810000',
    data: data.xianggang,
  },
  {
    name: '澳门',
    id: '820000',
    data: data.aomen,
  },
  {
    name: '台湾',
    id: '710000',
    data: data.taiwan,
  },
]