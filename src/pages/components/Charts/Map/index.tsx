import * as React from 'react';
import { HeatmapLayer, MapboxScene, PointLayer } from '@antv/l7-react';
import { PageLoading } from '@ant-design/pro-layout';

const colors = [
  '#002766',
  '#003a8c',
  '#0050b3',
  '#096dd9',
  '#1890ff',
  '#40a9ff',
  '#69c0ff',
];
export default class Map extends React.Component {
  state = {
    data: null,
    grid: null,
    loading: false,
  };

  public async componentDidMount() {
    const [geoData, gridData] = await Promise.all([
      fetch(
        //'https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json',
        'https://lg-6afqgacs-1251417203.cos.ap-shanghai.myqcloud.com/geoData.json',
      ).then(d => d.json()),
      /*       fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json',
       ).then((d) => d.json()), */
    ]);
    this.setState({
      data: geoData,
      grid: gridData,
      loading: true,
    });
  }

  public render() {
    const { data, grid, loading } = this.state;
    return loading === false ? (
      <PageLoading />
    ) : (
      <MapboxScene
        option={{
          logoVisible: false,
        }}
        map={{
          center: [110.19382669582967, 50.258134],
          pitch: 0,
          style: 'normal',
          zoom: 1,
          autoFit: true,
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '452px',
          //background:'#fff',
        }}
      >
        {grid && (
          <HeatmapLayer
            key="1"
            source={{
              data: grid,
              transforms: [
                {
                  type: 'hexagon',
                  size: 800000,
                  field: 'capacity',
                  method: 'sum',
                },
              ],
            }}
            color={{
              values: '#ddd',
            }}
            shape={{
              values: 'hexagon',
            }}
            style={{
              coverage: 0.7,
              opacity: 0.8,
            }}
          />
        )}
        {data && [
          <PointLayer
            key="2"
            options={{
              autoFit: true,
            }}
            source={{
              data,
            }}
            scale={{
              values: {
                color: {
                  field: 'cum_conf',
                  type: 'quantile',
                },
                size: {
                  field: 'cum_conf',
                  type: 'log',
                },
              },
            }}
            color={{
              field: 'cum_conf',
              values: colors,
            }}
            shape={{
              values: 'circle',
            }}
            active={{
              option: {
                color: '#1890ff',
              },
            }}
            size={{
              field: 'cum_conf',
              values: [30, 50],
            }}
            style={{
              opacity: 1,
            }}
          />,
          <PointLayer
            key="5"
            source={{
              data,
            }}
            color={{
              values: '#fff',
            }}
            shape={{
              field: 'Short_Name_ZH',
              values: 'text',
            }}
            size={{
              values: 12,
            }}
            style={{
              opacity: 1,
              strokeOpacity: 1,
              strokeWidth: 0,
            }}
          />,
        ]}
      </MapboxScene>
    );
  }
}
