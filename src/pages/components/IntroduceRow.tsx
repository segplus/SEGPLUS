import { EllipsisOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import Trend from './Trend';
import styles from '../style.less';
interface VisitDataType {
  x: string;
  y: number;
}
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = ({
  loading,
  visitData,
}: {
  loading: boolean;
  visitData: VisitDataType[];
}) => (
  <>
    <Row gutter={24} type="flex">
      <Col {...topColResponsiveProps}>
        <a href="./dashboard/admin/knpc">
          <ChartCard
            bordered={false}
            loading={loading}
            title="项目一"
            action={
              <Tooltip title="指标说明">
                <EllipsisOutlined />
              </Tooltip>
            }
            total={numeral(8846).format('0,0')}
            footer={
              <Field label="日产量" value={numeral(1234).format('0,0')} />
            }
            contentHeight={166}
          >
            <MiniProgress
              percent={78}
              strokeWidth={8}
              target={80}
              color="#1890ff"
            />
            <MiniArea data={visitData} />
          </ChartCard>
        </a>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="项目二"
          action={
            <Tooltip title="指标说明">
              <EllipsisOutlined />
            </Tooltip>
          }
          total={
            <span style={{ color: 'red' }}>{numeral(2888).format('0,0')}</span>
          }
          footer={<Field label="日产量" value={numeral(1234).format('0,0')} />}
          contentHeight={166}
        >
          <MiniProgress percent={28} strokeWidth={8} target={80} color="red" />
          <MiniArea data={visitData} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="项目三"
          action={
            <Tooltip title="指标说明">
              <EllipsisOutlined />
            </Tooltip>
          }
          total={
            <span style={{ color: '#52c41a' }}>
              {numeral(9875).format('0,0')}
            </span>
          }
          footer={<Field label="日产量" value={numeral(1234).format('0,0')} />}
          contentHeight={166}
        >
          <MiniProgress
            percent={88}
            strokeWidth={8}
            target={80}
            color="#52c41a"
          />
          <MiniArea data={visitData} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="项目四"
          action={
            <Tooltip title="指标说明">
              <EllipsisOutlined />
            </Tooltip>
          }
          total={
            <span style={{ color: '#ffc53d' }}>
              {numeral(5325).format('0,0')}
            </span>
          }
          footer={<Field label="日产量" value={numeral(1234).format('0,0')} />}
          contentHeight={166}
        >
          <MiniProgress
            percent={38}
            strokeWidth={8}
            target={80}
            color="#ffc53d"
          />
          <MiniArea data={visitData} />
        </ChartCard>
      </Col>
    </Row>
    <Row gutter={24} type="flex">
      <Col {...topColResponsiveProps}>
        <a href="../dashboard/admin/admin">
          <ChartCard
            bordered={false}
            title="行政部"
            action={
              <Tooltip title="指标说明">
                <EllipsisOutlined />
              </Tooltip>
            }
            loading={loading}
            total="58.68%"
            footer={
              <Field label="" value={`￥${numeral(12423).format('0,0')}`} />
            }
            contentHeight={166}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              日同比
              <span className={styles.trendText}>11%</span>
            </Trend>

            <MiniBar data={visitData} />
          </ChartCard>
        </a>
      </Col>
      <Col {...topColResponsiveProps}>
        <a href="../dashboard/sckf">
          <ChartCard
            bordered={false}
            title="市场部"
            action={
              <Tooltip title="指标说明">
                <EllipsisOutlined />
              </Tooltip>
            }
            loading={loading}
            total="65.67%"
            footer={
              <Field label="" value={`￥${numeral(12423).format('0,0')}`} />
            }
            contentHeight={166}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>19%</span>
            </Trend>
            <Trend flag="down">
              日同比
              <span className={styles.trendText}>20%</span>
            </Trend>

            <MiniBar data={visitData} />
          </ChartCard>
        </a>
      </Col>
      <Col {...topColResponsiveProps}>
        <a href="../dashboard/QAQC">
          <ChartCard
            bordered={false}
            title="质量部"
            action={
              <Tooltip title="指标说明">
                <EllipsisOutlined />
              </Tooltip>
            }
            loading={loading}
            total="45.55%"
            footer={
              <Field label="" value={`￥${numeral(12423).format('0,0')}`} />
            }
            contentHeight={166}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>2%</span>
            </Trend>
            <Trend flag="down">
              日同比
              <span className={styles.trendText}>6%</span>
            </Trend>

            <MiniBar data={visitData} />
          </ChartCard>
        </a>
      </Col>
      <Col {...topColResponsiveProps}>
        <a href="../dashboard/construction/construction">
          <ChartCard
            bordered={false}
            title="施工部"
            action={
              <Tooltip title="指标说明">
                <EllipsisOutlined />
              </Tooltip>
            }
            loading={loading}
            total="78.99%"
            footer={
              <Field label="" value={`￥${numeral(12423).format('0,0')}`} />
            }
            contentHeight={166}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>22%</span>
            </Trend>
            <Trend flag="down">
              日同比
              <span className={styles.trendText}>35%</span>
            </Trend>

            <MiniBar data={visitData} />
          </ChartCard>
        </a>
      </Col>
    </Row>
  </>
);

export default IntroduceRow;
