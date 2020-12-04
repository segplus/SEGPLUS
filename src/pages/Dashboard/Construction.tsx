import React, { useState, useEffect } from 'react';
import {
  Chart,
  Tooltip,
  Interval,
  PieChart,
  ColumnChart,
  StackedColumnChart,
  Legend,
} from 'bizcharts';
import {
  Row,
  Col,
  Tabs,
  Card,
  Drawer,
  Button,
  Table,
  Pagination,
  Popconfirm,
} from 'antd';
import {
  Line,
  Point,
  FunnelChart,
  GroupedBarChart,
  GroupedColumnChart,
} from 'bizcharts';
import { useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Statistic } from 'antd';
import { DualAxes } from '@ant-design/charts';

export default () => {
  const data1 = useModel('const')[0];
  const data2 = useModel('const')[1];
  const data3 = useModel('const')[2];
  const data4 = useModel('const')[3];
  const data5a = useModel('const')[4];
  const data5b = useModel('const')[5];
  const data5c = useModel('const')[6];
  const data6 = useModel('const')[7];
  const data7 = useModel('const')[8];
  const data8a = useModel('const')[9];
  const data8b = useModel('const')[10];
  const data9 = useModel('const')[11];
  const data10 = useModel('const')[12];
  const data11 = useModel('const')[13];

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const DemoDualAxes: React.FC = () => {
    var uvBillData = [
      { time: '2019-03', value: 950, type: 'uv' },
      { time: '2019-04', value: 900, type: 'uv' },
      { time: '2019-05', value: 800, type: 'uv' },
      { time: '2019-06', value: 790, type: 'uv' },
      { time: '2019-07', value: 150, type: 'uv' },
      { time: '2019-08', value: 790, type: 'uv' },
      { time: '2019-09', value: 850, type: 'uv' },

      { time: '2019-03', value: 220, type: 'bill' },
      { time: '2019-04', value: 300, type: 'bill' },
      { time: '2019-05', value: 250, type: 'bill' },
      { time: '2019-06', value: 220, type: 'bill' },
      { time: '2019-07', value: 62, type: 'bill' },
      { time: '2019-08', value: 220, type: 'bill' },
      { time: '2019-09', value: 362, type: 'bill' },
    ];
    var transformData = [
      { time: '2019-03', count: 80 },
      { time: '2019-04', count: 77 },
      { time: '2019-05', count: 75 },
      { time: '2019-06', count: 76 },
      { time: '2019-07', count: 66 },
      { time: '2019-08', count: 76 },
      { time: '2019-09', count: 83 },
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

  //在一起
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Website', dataIndex: 'website', key: 'website' },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm
            title="Confirm to delete?"
            onConfirm={deleteHandler.bind(null, id)}
          >
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  var config = {
    data: [data11, data11],
    xField: 'time',
    yField: ['焊接量', 'count'],
    yAxis: {
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return ''.concat(val, '英吋');
          },
        },
      },
      count: false,
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        columnWidthRatio: 0.4,
        label: { position: 'middle' },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
      },
    ],
    interactions: [{ type: 'element-highlight' }, { type: 'active-region' }],
  };

  const { Column } = Table;
  const { TabPane } = Tabs;

  return (
    <PageContainer>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Table columns={columns} />;
      </Drawer>
      <div>
        <Row gutter={[16, 16]}>
          {/*  <Col span={8}>
            <Card title="项目工程量">

              <Col span={12}>
                <Statistic title="Active Users" value={112893} />
              </Col>
            </Card>
          </Col> */}
          {/* <Col span={8}>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="项目直接人员" key="1">
                  <Col span={12}></Col>
                  <h2>2020年</h2>
                  <h4>数量</h4>
                  <ColumnChart
                    data={data8a}
                    height={300}
                    forceFit
                    padding="auto"
                    xField="day"
                    yField="产量"
                    meta={{ day: { alias: 'day' }, 产量: { alias: '产量' } }}
                    label={{ visible: true }}
                  />
                </TabPane>
                <TabPane tab="项目间接人员" key="2">
                  <Col span={12}></Col>
                  <h4>（人数）</h4>
                  <Card>
                    {
                      <StackedColumnChart
                        height={300}
                        padding="auto"
                        data={data8b}
                        title={{ visible: true, text: '' }}
                        forceFit
                        xField="year"
                        yField="value"
                        yAxis={{ min: 0 }}
                        color={['#ae331b', '#1a6179']}
                        stackField="type"
                        label={{ visible: true }}
                      />
                    }
                  </Card>
                </TabPane>
              </Tabs>
            </Card>
          </Col> */}
          <Col span={8}>
            <Card title="施工进度计划">
              <Chart
                scale={{ temperature: { min: 0 } }}
                padding={[30, 20, 50, 40]}
                autoFit
                height={400}
                data={data3}
                interactions={['element-active']}
              >
                <Line
                  shape="smooth"
                  position="month*temperature"
                  color="city"
                  label="temperature"
                />
                <Point position="month*temperature" color="city" />
                <Tooltip shared showCrosshairs />
              </Chart>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="近七天管道焊接产量"
              extra={<a href="/dashboard/construction/weld">More</a>}
            >
              <DemoDualAxes />
            </Card>
          </Col>

          <Col span={8}>
            <Card title="施工图纸统计">
              <GroupedBarChart
                data={data9}
                xField="value"
                yField="label"
                groupField="type"
                color={['#1383ab', '#c52125']}
                label={{
                  formatter: v =>
                    `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
                }}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card title="施工材料统计">
              {
                <GroupedColumnChart
                  data={data1}
                  title={{ visible: true, text: '' }}
                  forceFit
                  xField="type"
                  yField="count"
                  yAxis={{ min: 0 }}
                  label={{ visible: true }}
                  groupField="name"
                  color={['#1ca9e6', '#f88c24']}
                />
              }
            </Card>
          </Col>

          <Col span={8}>
            <Card title="管段释放状态">
              <FunnelChart data={data7} xField="action" yField="pv" transpose />
            </Card>
          </Col>

          {/*  <Col span={8}>
            <Card title="施工机械统计分布">
              <Chart height={400} padding="auto" data={data6} autoFit>
                <Interval
                  adjust={[{ type: 'stack' }]}
                  color="区域"
                  position="类型*数量"
                />
                 <Tooltip shared />
                </Chart>
            </Card>
          </Col> */}
          <Col span={8}>
            <Card title="试压包状态">
              <FunnelChart
                data={data4}
                xField="action"
                yField="pv"
                compareField="quarter"
                transpose
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};
