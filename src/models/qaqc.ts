import { Effect, Reducer, Subscription } from 'umi';
import { getRemoteList } from '../services/service';

export interface UserModelState {
  name: string;
  list: [];
}
export interface UserModelType {
  namespace: 'RFI';
  state: UserModelState;
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'RFI',
  state: {
    name: '',
    list: [],
  },
  reducers: {
    getList(state, { payload }) {
      return payload;
    },
  },

  effects: {
    *getRemote(action, { put, call }) {
      const admins = yield call(getRemoteList);
      yield put({
        type: 'getList',
        payload: { list: admins.rows },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/WM') {
          dispatch({
            type: 'getRemote',
            payload: 'QAQC',
          });
        }
      });
    },
  },
};

export default UserModel;
