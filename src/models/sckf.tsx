const data1 = [
  { name: '人', type: '市场开发目标', count: 3 },
  { name: '人', type: '已完成', count: 1.58 },
  { name: '人', type: '缺口/超额', count: 1.42 },
];
//市场开发目标完成
const data2 = [
  { name: '非洲', type: '埃及', count: 1 },
  { name: '东南亚', type: '新加坡', count: 2 },
  { name: '中东', type: '卡塔尔', count: 5 },
  { name: '中东', type: '阿联酋', count: 12 },
  { name: '中东', type: '沙特', count: 15 },
];
//投标区域和国家情况
const data3 = [
  {
    item: '新加坡crisp项目',
    count: 1.58,
  },
  {
    item: '沙特berri项目',
    count: 1.77,
  },
];
//中标项目
const data4 = [
  {
    item: '施工投标',
    count: 20,
  },
  {
    item: '配合EPC',
    count: 12,
  },
  {
    item: '正在投标',
    count: 5,
  },
  {
    item: '投标关闭',
    count: 4,
  },
];
//投标状态
const columns = [
  {
    title: '项目名称',
    dataIndex: 'item',
  },

  {
    title: '值',
    dataIndex: 'count',
  },
];
export default () => [data1, data2, data3, data4, columns];
