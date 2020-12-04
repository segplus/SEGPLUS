import React from 'react';
import { Table, Card, Statistic, Row, Col } from 'antd';
import { useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { DualAxes } from '@ant-design/charts';

/* const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};
 */
const DemoDualAxes: React.FC = () => {
  var data = [
    {
      time: '2019-03',
      value: 350,
      count: 800,
    },
    {
      time: '2019-04',
      value: 900,
      count: 600,
    },
    {
      time: '2019-05',
      value: 300,
      count: 400,
    },
    {
      time: '2019-06',
      value: 450,
      count: 380,
    },
    {
      time: '2019-07',
      value: 470,
      count: 220,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    yAxis: {
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return ''.concat(val, '个');
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
  return <DualAxes {...config} />;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data1 = [];
for (let i = 0; i < 100; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const RFIcolumns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data2 = [];
for (let i = 0; i < 100; i++) {
  data2.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default () => {
  return (
    <PageContainer>
      <>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Card title="NCR状态" extra={<a href="#">More</a>}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="总量" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="剩余量" value={112893} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="NED状态" extra={<a href="#">More</a>}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="总量" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="剩余量" value={112893} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="焊口数" extra={<a href="#">More</a>}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="总量" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="剩余量" value={112893} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col xs={24} sm={12} md={16} lg={16} xl={16}>
            <Card>
              <DemoDualAxes />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card title="质量部人员状态">
              <Table
                columns={columns}
                dataSource={data1}
                pagination={{ pageSize: 50 }}
                scroll={{ y: 225 }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Card title="RFI List">
              <Table
                columns={RFIcolumns}
                dataSource={data2}
                scroll={{ x: 1500 }}
                sticky
              />
            </Card>
          </Col>
        </Row>
      </>
    </PageContainer>
  );
};
