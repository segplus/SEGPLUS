import { Effect, Reducer, Subscription } from 'umi';
import { getRemoteList } from '../services/service';

export interface IndexModelState {
  name: string;
  list: [];
}

export interface IndexModelType {
  namespace: 'SEGplustest';
  state: IndexModelState;
  effects: {
    //someEffect: Effect;
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'SEGplustest',
  state: {
    name: '',
    list: [],
  },

  effects: {
    //someEffect: function*() {},
    *query({ payload }, { call, put }) {
      const res = yield call(getRemoteList);
      yield put({
        type: 'save',
        payload: {
          name: 'segplus',
          list: res.data.records,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/test') {
          dispatch({ type: 'query' });
        }
      });
    },
  },
};

export default IndexModel;
