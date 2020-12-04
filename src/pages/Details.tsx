import { Table } from 'antd';
import React, { useEffect, useRef } from 'react';
import { autoChart } from '@antv/chart-advisor';
import { IndexModelState, ConnectProps, connect, Loading } from 'umi';
//import { Map } from './components/Charts';
//import styles from './style.less'
interface PageProps extends ConnectProps {
  SEGplustest: IndexModelState;
  loading: boolean;
}

const Test: React.FC<PageProps> = ({ SEGplustest, dispatch }) => {
  //extends Component<Props>
  const { list } = SEGplustest;
  let fields: any[] = [];
  for (let entry of list) {
    fields.push(entry.fields);
  }

  const Columns = [
    {
      title: '人数',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '人员来源',
      dataIndex: 'key',
      key: 'key',
    },
  ];

  const originalRef: any = useRef(null);
  useEffect(() => {
    if (originalRef.current) {
      autoChart(originalRef.current, fields, {
        toolbar: true,
        description: '人员状态',
        development: true,
      });
    }
  });
  return (
    <>
      <div id="original" ref={originalRef} style={{ height: 260 }}></div>
      <Table columns={Columns} dataSource={fields} />
    </>
  );
};
export default connect(
  ({
    SEGplustest,
    loading,
  }: {
    SEGplustest: IndexModelState;
    loading: Loading;
  }) => ({
    SEGplustest,
    loading: loading.models.SEGplustest,
  }),
)(Test);
