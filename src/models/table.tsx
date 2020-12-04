const columns = [
  {
    title: 'item',
    dataIndex: 'item',
  },

  {
    title: 'count',
    dataIndex: 'count',
  },
];
//投标区域
const columnsHexin = [
  {
    title: '地区',
    dataIndex: 'name',
  },

  {
    title: '国家',
    dataIndex: 'type',
  },
  {
    title: '数量',
    dataIndex: 'count',
  },
];
const columnsHexin1 = [
  {
    title: '地区',
    dataIndex: 'name',
  },

  {
    title: '国家',
    dataIndex: 'type',
  },
  {
    title: '数量',
    dataIndex: 'count2',
  },
];
export default () => [columns, columnsHexin, columnsHexin1];
