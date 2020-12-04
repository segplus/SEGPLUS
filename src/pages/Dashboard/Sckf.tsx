import React, { useState, FC } from 'react';
import {
  Row,
  Col,
  Card,
  Drawer,
  Table,
  Tabs,
  Statistic,
  Input,
  DatePicker,
  Select,
  Space,
  Button,
} from 'antd';
import { useModel, IndexModelState, ConnectProps, connect } from 'umi';
import {
  Chart,
  Tooltip,
  Interval,
  PieChart,
  Axis,
  Geom,
  Coordinate,
  BarChart,
} from 'bizcharts';
import { PageContainer } from '@ant-design/pro-layout';
import { Map } from '../components/Charts';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}
const { RangePicker } = DatePicker;

function onChange1(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk1(value) {
  console.log('onOk: ', value);
}

const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

//

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { list, list1, list2, list3 } = index;
  const [visible, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const data1 = useModel('sckf')[0];
  const data2 = useModel('sckf')[1];
  const data3 = useModel('sckf')[2];
  const data4 = useModel('sckf')[3];
  const columns = useModel('sckf')[5];
  const columnsHexin = useModel('table')[1];
  const columnsHexin1 = useModel('table')[2];
  const { TabPane } = Tabs;
  const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
  };
  const [type, setType] = useState('date');
  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Space size={20}>
              <Select value={type} onChange={setType}>
                <Option value="date">Date</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="quarter">Quarter</Option>
                <Option value="year">Year</Option>
              </Select>
              <PickerWithType
                type={type}
                onChange={value => console.log(value)}
              />
              <RangePicker
                picker="year"
                format="YYYY-MM-DD"
                onChange={onChange1}
                onOk={onOk1}
              />
              <Button type="primary" onClick={() => setVisible(true)}>
                搜索
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col {...topColResponsiveProps}>
          <Card
            title="投标数量"
            extra={
              <a onClick={() => setVisible1(true)} href="#">
                详情
              </a>
            }
          >
            <Statistic value={26} />
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <Card
            title="投标金额（USA）"
            extra={
              <a onClick={() => setVisible2(true)} href="#">
                详情
              </a>
            }
          >
            <Statistic value={6951460107} />
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <Card
            title="中标数量"
            extra={
              <a onClick={() => setVisible3(true)} href="#">
                详情
              </a>
            }
          >
            <Statistic value={3} />
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <Card
            title="中标金额（USA）"
            extra={
              <a onClick={() => setVisible4(true)} href="#">
                详情
              </a>
            }
          >
            <Statistic value={63539291} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Map />
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="中标项目" key="1">
              <Card title="中标项目">
                <PieChart
                  height={300}
                  legend={{
                    position: 'bottom-center',
                    offsetY: 10,
                  }}
                  forceFit
                  data={data3}
                  radius={0.8}
                  angleField="count"
                  colorField="item"
                  label={{
                    visible: true,
                    type: 'outer',
                    offset: 20,
                  }}
                />
              </Card>
            </TabPane>
            <TabPane tab="投标状态" key="2">
              <Card title="投标状态">
                <PieChart
                  height={300}
                  legend={{
                    position: 'bottom-center',
                    offsetY: 10,
                  }}
                  forceFit
                  data={data4}
                  radius={0.8}
                  angleField="count"
                  colorField="item"
                  label={{
                    visible: true,
                    type: 'outer',
                    offset: 20,
                  }}
                />
              </Card>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={16}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="市场开发目标完成" key="1">
              <Card title="市场开发目标完成">
                <Chart
                  height={300}
                  data={data1}
                  forceFit
                  padding={[40, 40, 0, 60]}
                >
                  <Axis name="type" />
                  <Axis name="count" />
                  <Tooltip
                  // crosshairs用于设置 tooltip 的辅助线或者辅助框
                  // crosshairs={{
                  //  type: "y"
                  // }}
                  />
                  <Geom
                    type="interval"
                    position="type*count"
                    label="count"
                    color="type"
                  />
                  <Coordinate transpose />
                  <Axis name="type" />
                  <Axis name="type" visible={true} />
                </Chart>
              </Card>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Drawer
        title="投标数量详情"
        width={800}
        onClose={() => setVisible1(false)}
        visible={visible}
        //footer={submitter}
        destroyOnClose
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="投标区域柱状图">
              <Chart height={300} data={list} autoFit padding={[60, 40, 0, 60]}>
                <Interval
                  adjust={[
                    {
                      type: 'stack',
                    },
                  ]}
                  color="name"
                  position="type*count"
                  label="count"
                />
                <Tooltip shared />
                <Coordinate transpose />
                <Axis name="type" />
                <Axis name="type" visible={true} />
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="投标区域表格">
              <Table columns={columnsHexin} dataSource={list} bordered />
            </Card>
          </Col>
        </Row>
      </Drawer>
      <Drawer
        title="投标金额详情"
        width={800}
        onClose={() => setVisible2(false)}
        visible={visible2}
        //footer={submitter}
        destroyOnClose
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="投标金额柱状图">
              <Chart
                height={300}
                data={list1}
                autoFit
                padding={[60, 40, 0, 60]}
              >
                <Interval
                  adjust={[
                    {
                      type: 'stack',
                    },
                  ]}
                  color="name"
                  position="type*count"
                  label="count"
                />
                <Tooltip shared />
                <Coordinate transpose />
                <Axis name="type" />
                <Axis name="type" visible={true} />
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="投标金额表格">
              <Table columns={columnsHexin} dataSource={list1} bordered />
            </Card>
          </Col>
        </Row>
      </Drawer>
      <Drawer
        title="中标数量详情"
        width={800}
        onClose={() => setVisible3(false)}
        visible={visible3}
        //footer={submitter}
        destroyOnClose
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="中标数量柱状图">
              <Chart
                height={300}
                data={list2}
                autoFit
                padding={[60, 40, 0, 60]}
              >
                <Interval
                  adjust={[
                    {
                      type: 'stack',
                    },
                  ]}
                  color="name"
                  position="type*count"
                  label="count"
                />
                <Tooltip shared />
                <Coordinate transpose />
                <Axis name="type" />
                <Axis name="type" visible={true} />
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="中标数量表格">
              <Table columns={columnsHexin} dataSource={list2} bordered />
            </Card>
          </Col>
        </Row>
      </Drawer>
      <Drawer
        title="中标金额详情"
        width={800}
        onClose={() => setVisible4(false)}
        visible={visible4}
        //footer={submitter}
        destroyOnClose
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="中标金额柱状图">
              <Chart
                height={300}
                data={list2}
                autoFit
                padding={[60, 40, 0, 60]}
              >
                <Interval
                  adjust={[
                    {
                      type: 'stack',
                    },
                  ]}
                  color="name"
                  position="type*count2"
                  label="count2"
                />
                <Tooltip shared />
                <Coordinate transpose />
                <Axis name="type" />
                <Axis name="type" visible={true} />
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="中标区域表格">
              <Table columns={columnsHexin1} dataSource={list2} bordered />
            </Card>
          </Col>
        </Row>
      </Drawer>
    </PageContainer>
  );
};
export default connect(({ index }: { index: IndexModelState }) => ({
  index,
}))(IndexPage);
