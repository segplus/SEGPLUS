import {
  loaddatelist,
  saveOne,
  updateOne,
  delOne,
  loaddatelist1,
  loaddatelist01,
  loaddatelist02,
  loaddatelist03,
} from '../services/service';
import { Subscription } from 'umi';
export interface IndexModelType {
  subscriptions: { setup: Subscription };
}

const indexdd = {
  namespace: 'index',

  state: {
    sum: '',
    list: [],
    list1: [],
    list2: [],
    list3: [],
    current: {},
    showEdit: false,
    isEdit: false,
  },

  effects: {
    *loadData({}, { call, put }: any) {
      const res = yield call(loaddatelist);
      yield put({
        type: 'save',
        payload: {
          code: res.sum,

          //fields : [res.data.records[0].fields],
          list: res.rows,
          showEdit: false,
          isEdit: false,
        },
      });
    },
    *loadData1({}, { call, put }: any) {
      const res = yield call(loaddatelist01);
      yield put({
        type: 'save',
        payload: {
          list1: res.rows,

          showEdit: false,
          isEdit: false,
        },
      });
    },
    *loadData2({}, { call, put }: any) {
      const res = yield call(loaddatelist02);
      yield put({
        type: 'save',
        payload: {
          list2: res.rows,

          showEdit: false,
          isEdit: false,
        },
      });
    },
    *loadData3({}, { call, put }: any) {
      const res = yield call(loaddatelist03);
      yield put({
        type: 'save',
        payload: {
          list3: res.rows,

          showEdit: false,
          isEdit: false,
        },
      });
    },
    *insert({ payload }: any, { call, put }: any) {
      yield call(saveOne, payload);
      yield put({
        type: 'loadData',
        payload: {},
      });
    },

    *update({ payload }: any, { call, put }: any) {
      yield call(updateOne, payload.id, payload.data);
      yield put({
        type: 'loadData',
        payload: {},
      });
    },
    *del({ payload }: any, { call, put }: any) {
      yield call(delOne, payload.id);
      yield put({
        type: 'loadData',
        payload: {},
      });
    },
  },

  reducers: {
    save(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname === '/dashboard/sckf') {
          dispatch({
            type: 'loadData',
          });
          dispatch({
            type: 'loadData1',
          });
          dispatch({
            type: 'loadData2',
          });
          dispatch({
            type: 'loadData3',
          });
        }
      });
    },
  },
};
export default indexdd;
