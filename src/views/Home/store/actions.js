import clientFetch from '@/modules/clientFetch';
import serverFetch from '@/modules/serverFetch';
import {CHANGE_HOME_LIST} from './constants';

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list,
});

export const getHomeList = (isServer) => {

  const request = isServer ? serverFetch : clientFetch;

  return (dispatch) => {
    return request('/api/news.json').then(res => {
      if (res.success) {
        const list = res.data;
        dispatch(changeList(list));
      }
    });
  };
};
