import React, { useState } from 'react';
import { Table, Card, Statistic, Row, Col } from 'antd';
import { useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { DualAxes } from '@ant-design/charts';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import { Modal, Button } from 'antd';
const { TabPane } = Tabs;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        详情
      </Button>
      <Modal
        title="上月管道焊接"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="按区域统计" key="1">
            <Table
              columns={abcde}
              dataSource={data3}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 400 }}
            />
          </TabPane>
          <TabPane tab="按日期统计" key="2">
            <Table
              columns={abcdef}
              dataSource={data4}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 400 }}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

interface PageProps extends ConnectProps {
  RFI: IndexModelState;
  loading: boolean;
}

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    { time: '2019-03-03', value: 950, type: 'uv' },
    { time: '2019-03-04', value: 900, type: 'uv' },
    { time: '2019-03-05', value: 800, type: 'uv' },
    { time: '2019-03-06', value: 790, type: 'uv' },
    { time: '2019-03-07', value: 150, type: 'uv' },
    { time: '2019-03-08', value: 790, type: 'uv' },
    { time: '2019-03-09', value: 850, type: 'uv' },

    { time: '2019-03-03', value: 220, type: 'bill' },
    { time: '2019-03-04', value: 300, type: 'bill' },
    { time: '2019-03-05', value: 250, type: 'bill' },
    { time: '2019-03-06', value: 220, type: 'bill' },
    { time: '2019-03-07', value: 62, type: 'bill' },
    { time: '2019-03-08', value: 220, type: 'bill' },
    { time: '2019-03-09', value: 362, type: 'bill' },
  ];
  var transformData = [
    { time: '2019-03-03', count: 80 },
    { time: '2019-03-04', count: 77 },
    { time: '2019-03-05', count: 75 },
    { time: '2019-03-06', count: 76 },
    { time: '2019-03-07', count: 66 },
    { time: '2019-03-08', count: 76 },
    { time: '2019-03-09', count: 83 },
  ];

  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],

    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
        columnWidthRatio: 0.3,
        label: {},
        color: ['#5B8FF9', '#5D7092'],
      },
      { geometry: 'line', color: '#5AD8A6' },
    ],
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'uv',
          name: '管道焊接量',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'bill',
          name: '支架焊接量',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5D7092',
              r: 5,
            },
          },
        },
        {
          value: 'count',
          name: '焊工数',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5AD8A6',
              r: 5,
            },
          },
        },
      ],
    },
  };

  return <DualAxes {...config} />;
};

const abc = [
  {
    title: '区域',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '累计管道产量',
    dataIndex: 'value',
    width: 150,
  },
  {
    title: '前一天管道产量',
    dataIndex: 'attr3',
  },
  {
    title: '前一天支架产量',
    dataIndex: 'attr2',
  },
];
const abcd = [
  {
    title: '分包单位',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '累计管道产量',
    dataIndex: 'value1',
    width: 150,
  },
  {
    title: '前一天管道产量',
    dataIndex: 'attr31',
  },
  {
    title: '前一天支架产量',
    dataIndex: 'attr2',
  },
];
const abcde = [
  {
    title: '区域',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '上月管道焊接量',
    dataIndex: 'attr3',
    width: 150,
  },
  {
    title: '上月支架焊接量',
    dataIndex: 'attr2',
  },
];

const abcdef = [
  {
    title: '日期',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '管道焊接量',
    dataIndex: 'value',
    width: 150,
  },
  {
    title: '支架焊接量',
    dataIndex: 'attr3',
  },
];

const RFIcolumns = [
  {
    title: 'SN.',
    width: 100,
    dataIndex: 'SN.',
    key: 'SN.',
    fixed: 'left',
  },
  {
    title: 'RFI No.#',
    width: 100,
    dataIndex: 'RFI No.#',
    key: 'RFI No.#',
    fixed: 'left',
  },
  {
    title: 'Decipline ',
    dataIndex: 'Decipline',
    key: 'Decipline',
    width: 150,
  },
  {
    title: 'Unit',
    dataIndex: 'Unit',
    key: 'Unit',
    width: 150,
  },
  {
    title: 'Check list',
    dataIndex: 'Check list',
    key: 'Check list',
    width: 150,
  },
  {
    title: 'Report NO.',
    dataIndex: 'Report NO.',
    key: 'Report NO.',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    width: 150,
  },
  {
    title: 'SINO inspector',
    dataIndex: 'SINO inspector',
    key: 'SINO inspector',
    width: 150,
  },
  {
    title: 'TRG inspector',
    dataIndex: 'TRG inspector',
    key: 'TRG inspector',
    width: 150,
  },
  {
    title: 'TRG inspector',
    dataIndex: 'TRG inspector',
    key: 'TRG inspector',
    width: 150,
  },
  {
    title: 'Inspection level',
    dataIndex: 'Inspection level',
    key: 'Inspection level',
    width: 150,
  },
  {
    title: 'Inspection date',
    dataIndex: 'Inspection date',
    key: 'Inspection date',
    width: 150,
  },
  {
    title: 'Time',
    dataIndex: 'Time',
    key: 'Time',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    width: 150,
  },
  {
    title: 'Hard copy signed received date',
    dataIndex: 'Hard copy signed received date',
    key: 'Hard copy signed received date',
    width: 150,
  },
  {
    title: 'Scanned copy received date',
    dataIndex: 'Scanned copy received date',
    key: 'Scanned copy received date',
    width: 150,
  },
];

const data1 = [
  { name: '01区', value: 17399.5, attr3: 186.5, attr2: 50 },
  { name: '02区', value: 17505.5, attr3: 187.5, attr2: 62 },
  { name: '11区', value: 9328.25, attr3: 246.5, attr2: 48 },
  { name: '12区', value: 5004.75, attr3: 125, attr2: 48 },
  { name: '21区', value: 3878, attr3: 139, attr2: 82 },
  { name: '22区', value: 14905.75, attr3: 84.5, attr2: 62 },
];

const data2 = [
  { name: '吉林信邦', value1: 2399.5, attr31: 86.5, attr2: 22 },
  { name: '江苏汉皇', value1: 1505.5, attr31: 87.5, attr2: 18 },
  { name: '江苏恒和安装', value1: 3328.25, attr31: 346.5, attr2: 26 },
  { name: '江苏金马', value1: 5004.75, attr31: 125, attr2: 34 },
  { name: '江苏首阔', value1: 1878, attr31: 39, attr2: 38 },
  { name: '金昌石化', value1: 3905.75, attr31: 424.5, attr2: 18 },
  { name: '南京权正', value1: 1708.75, attr31: 138.5, attr2: 22 },
  { name: '山东钰祥安装', value1: 2542, attr31: 227.5, attr2: 26 },
  { name: '苏州华宇', value1: 6799.5, attr31: 233.5, attr2: 38 },
  { name: '西固四建二队', value1: 1769.5, attr31: 253.5, attr2: 32 },
  { name: '西固四建一队', value1: 1242.5, attr31: 271, attr2: 28 },
  { name: '中电环宇', value1: 2861.25, attr31: 579, attr2: 16 },
  { name: '中核华誉', value1: 3762.75, attr31: 293.5, attr2: 46 },
  { name: '中原春城', value1: 4056.5, attr31: 680, attr2: 68 },
];
const data3 = [
  { name: '01区', attr3: 4849, attr2: 1502 },
  { name: '02区', attr3: 4875, attr2: 1762 },
  { name: '11区', attr3: 6409, attr2: 1348 },
  { name: '12区', attr3: 3250, attr2: 1248 },
  { name: '21区', attr3: 3614, attr2: 2382 },
  { name: '22区', attr3: 2197, attr2: 782 },
];
const data4 = [
  { name: '2019/2/1', value: 582, attr3: 335 },
  { name: '2019/2/2', value: 724, attr3: 417 },
  { name: '2019/2/3', value: 802, attr3: 462 },
  { name: '2019/2/4', value: 0, attr3: 0 },
  { name: '2019/2/5', value: 0, attr3: 0 },
  { name: '2019/2/6', value: 628, attr3: 362 },
  { name: '2019/2/7', value: 832, attr3: 480 },
  { name: '2019/2/8', value: 918, attr3: 529 },
  { name: '2019/2/9', value: 1086, attr3: 568 },
  { name: '2019/2/10', value: 810, attr3: 467 },
  { name: '2019/2/11', value: 862, attr3: 497 },
  { name: '2019/2/12', value: 281, attr3: 162 },
  { name: '2019/2/13', value: 1024, attr3: 519 },
  { name: '2019/2/14', value: 828, attr3: 477 },
  { name: '2019/2/15', value: 818, attr3: 471 },
  { name: '2019/2/16', value: 862, attr3: 497 },
  { name: '2019/2/17', value: 900, attr3: 519 },
  { name: '2019/2/18', value: 882, attr3: 508 },
  { name: '2019/2/19', value: 260, attr3: 150 },
  { name: '2019/2/20', value: 920, attr3: 530 },
  { name: '2019/2/21', value: 828, attr3: 477 },
  { name: '2019/2/22', value: 818, attr3: 471 },
  { name: '2019/2/23', value: 862, attr3: 497 },
  { name: '2019/2/24', value: 900, attr3: 519 },
  { name: '2019/2/25', value: 682, attr3: 393 },
  { name: '2019/2/26', value: 192, attr3: 110 },
  { name: '2019/2/27', value: 920, attr3: 530 },
  { name: '2019/2/28', value: 862, attr3: 497 },
];

const IndexPage: React.FC<PageProps> = ({ RFI, dispatch }) => {
  const { list } = RFI;
  return (
    <PageContainer>
      <>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Card title="累计管道焊接量">
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="管道" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="支架" value={82912} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="上月累计管道焊接量" extra={<App />}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="管道" value={22104} />
                </Col>
                <Col span={12}>
                  <Statistic title="支架" value={10860} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="前一天管道焊接量" extra={<a href="/WM">详情</a>}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="管道" value={850} />
                </Col>
                <Col span={12}>
                  <Statistic title="支架" value={362} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <ProCard style={{ marginTop: 8 }} gutter={8} ghost>
          <ProCard bordered>
            <Card title="近七天管道焊接产量">
              <DemoDualAxes />
            </Card>
          </ProCard>

          <ProCard colSpan="40%" bordered>
            <Tabs defaultActiveKey="1">
              <TabPane tab="按区域统计" key="1">
                <Table
                  columns={abc}
                  dataSource={data1}
                  pagination={{ pageSize: 50 }}
                  scroll={{ y: 400 }}
                />
              </TabPane>
              <TabPane tab="按分包单位统计" key="2">
                <Table
                  columns={abcd}
                  dataSource={data2}
                  pagination={{ pageSize: 50 }}
                  scroll={{ y: 400 }}
                />
              </TabPane>
            </Tabs>
          </ProCard>
        </ProCard>

        {/* <Row gutter={[8, 8]}>
          <Col span={24}>
            <Card title="RFI List">
              <Table
                columns={RFIcolumns}
                dataSource={list}
                scroll={{ x: 1500 }}
                sticky
              />
            </Card>
          </Col>
        </Row> */}
      </>
    </PageContainer>
  );
};
export default connect(
  ({ RFI, loading }: { RFI: IndexModelState; loading: Loading }) => ({
    RFI,
    loading: loading.models.RFI,
  }),
)(IndexPage);
