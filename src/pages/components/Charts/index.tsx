import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';
import MiniArea from './MiniArea';
import MiniBar from './MiniBar';
import MiniProgress from './MiniProgress';
import Map from './Map';

const yuan = (val: number | string) => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  Map,
};

export {
  Charts as default,
  yuan,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  Map,
};
