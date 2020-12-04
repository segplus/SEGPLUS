import { Effect, Reducer, Subscription } from 'umi';
import { getRemoteList } from '../services/service';

export interface UserModelState {
  name: string;
  list: [];
}
export interface UserModelType {
  namespace: 'names';
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
  namespace: 'names',
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
        payload: { list: admins.data.records },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dashboard/admin/admin') {
          dispatch({
            type: 'getRemote',
            payload: 'admins',
          });
        }
      });
    },
  },
};

export default UserModel;
