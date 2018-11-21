import fetch from '@/modules/fetch';
import {CHANGE_HOME_LIST} from './constants';

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    fetch('/news.json').then(res => {
      if (res.success) {
        const list = res.data;
        dispatch(changeList(list));
      }
    });
  };
};
