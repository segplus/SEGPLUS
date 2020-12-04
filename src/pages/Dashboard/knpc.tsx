import React from 'react';
import { Statistic, Row, Col, Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Link } from 'umi';
import {
  Chart,
  Interval,
  Tooltip,
  Legend,
  View,
  Axis,
  Coordinate,
  PieChart,
} from 'bizcharts';
import { DataView, DataSet } from '@antv/data-set';

const { Divider } = ProCard; //ProCard分组指标

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};

export default () => {
  //下线与休假
  const OandV = [
    { value: 251, type: '中方', name: '中方休假' },
    { value: 1048, type: '中方', name: '中方下线' },
    { value: 610, type: '外方', name: '外方休假' },
    { value: 434, type: '外方', name: '外方下线' },
  ];
  // 通过 DataSet 计算百分比
  const dv = new DataView();
  dv.source(OandV).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });

  const dv1 = new DataView();
  dv1.source(OandV).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent',
  });
  //下线与休假
  //暂住证
  const TRP = [
    {
      type: '新办理人数',
      value: 27,
    },
    {
      type: '待办理人数',
      value: 25,
    },
    {
      type: '待更新人数',
      value: 18,
    },
    {
      type: '注销人数',
      value: 15,
    },
  ];
  //暂住证
  //直接岗位
  const direct = [
    {
      country: '木工',
      population: 1317,
    },
    {
      country: '瓦工',
      population: 1234,
    },
    {
      country: '铆工',
      population: 290,
    },
    {
      country: '钳工',
      population: 230,
    },
    {
      country: '管工',
      population: 182,
    },
    {
      country: '其他',
      population: 789,
    },
  ];
  const ds = new DataSet();
  const dview = ds.createView().source(direct);
  dview.source(direct).transform({
    type: 'sort',

    callback(a, b) {
      // 排序依据，和原生js的排序callback一致
      return a.population - b.population > 0;
    },
  });
  //直接岗位
  //间接岗位
  const indirect = [
    {
      country: '主管',
      population: 114,
    },
    {
      country: '检查员',
      population: 104,
    },
    {
      country: '安全员',
      population: 290,
    },
    {
      country: '工程师',
      population: 23,
    },
    {
      country: '辅助人员',
      population: 69,
    },
  ];
  const ids = new DataSet();
  const idview = ids.createView().source(indirect);
  idview.source(indirect).transform({
    type: 'sort',

    callback(a, b) {
      // 排序依据，和原生js的排序callback一致
      return a.population - b.population > 0;
    },
  });
  //间接岗位

  return (
    <div>
      <Row gutter={8}>
        <Col {...topColResponsiveProps}>
          <Card title="直接人员" extra={<Link to="/details">details</Link>}>
            <Statistic prefix={5879} value="/" suffix={8000} />
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <Card extra={<Link to="/details">details</Link>} title="间接人员">
            <Statistic prefix={790} value="/" suffix={8000} />
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <Card extra={<Link to="/details">details</Link>} title="休假人员">
            <Statistic prefix={578} value="/" suffix={8000} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={12} md={24} lg={12} xl={12}>
          <ProCard
            title="直接人员具体岗位"
            headerBordered
            extra={<Link to="/details">details</Link>}
          >
            <div style={{ height: 360 }}>
              <Chart height={360} data={dview.rows} autoFit>
                <Coordinate transpose />
                <Interval position="country*population" />
              </Chart>
            </div>
          </ProCard>
        </Col>
        <Col xs={24} sm={12} md={24} lg={12} xl={12}>
          <ProCard
            title="间接人员具体岗位"
            headerBordered
            extra={<Link to="/details">details</Link>}
          >
            <div style={{ height: 360 }}>
              <Chart height={360} data={idview.rows} autoFit>
                <Coordinate transpose />
                <Interval position="country*population" />
              </Chart>
            </div>
          </ProCard>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={12} md={24} lg={12} xl={12}>
          <Card
            title="下线与休假人数"
            extra={<Link to="/details">details</Link>}
          >
            <div style={{ height: 360 }}>
              <Chart
                height={360}
                data={dv.rows}
                autoFit
                scale={{
                  percent: {
                    formatter: val => {
                      val = (val * 100).toFixed(2) + '%';
                      return val;
                    },
                  },
                }}
              >
                <Coordinate type="theta" radius={0.5} />
                <Axis visible={false} />
                <Legend visible={false} />
                <Tooltip showTitle={false} />
                <Interval
                  position="percent"
                  adjust="stack"
                  color="type"
                  element-highlight
                  style={{
                    lineWidth: 1,
                    stroke: '#fff',
                  }}
                  label={[
                    'type',
                    {
                      offset: -15,
                    },
                  ]}
                />
                <View data={dv1.rows}>
                  <Coordinate
                    type="theta"
                    radius={0.75}
                    innerRadius={0.5 / 0.75}
                  />
                  <Interval
                    position="percent"
                    adjust="stack"
                    color={[
                      'name',
                      [
                        '#BAE7FF',
                        '#7FC9FE',
                        '#71E3E3',
                        '#ABF5F5',
                        '#8EE0A1',
                        '#BAF5C4',
                      ],
                    ]}
                    element-highlight
                    style={{
                      lineWidth: 1,
                      stroke: '#fff',
                    }}
                    label="name"
                  />
                </View>
              </Chart>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={24} lg={12} xl={12}>
          <Card title="暂住证状态" extra={<Link to="/details">details</Link>}>
            <PieChart
              data={TRP}
              height={360}
              forceFit
              radius={0.8}
              angleField="value"
              colorField="type"
              label={{
                visible: true,
                type: 'outer',
                offset: 20,
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
