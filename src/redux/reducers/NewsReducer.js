import {_onFail, _onSuccess, _onUnmount} from '@redux/actions';
import {stateLoadMore} from '@redux/common/initialStates';
import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';
export const news = (...props) => {
  return reducerDefault(...props, Actions.GET_NEWS);
};

export const newsdetails = (...props) => {
  return reducerDefault(...props, Actions.GET_NEWSDETAILS);
};

export const newsGroup = (state = stateLoadMore, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_GROUP: {
      return {...state, isLoading: true};
    }
    case _onSuccess(Actions.GET_NEWS_GROUP): {
      const data = [{title: 'Đề xuất', group_id: 'all'}, ...action.data];
      return {
        data,
        totalPage: action.total_page,
        isLoading: false,
      };
    }
    case _onFail(Actions.GET_NEWS_GROUP): {
      return {...state, isLoading: false};
    }
    case _onUnmount(Actions.GET_NEWS_GROUP): {
      return {...stateLoadMore};
    }
    default:
      return state;
  }
};

export const newsHome = (state = stateLoadMore, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_HOME: {
      return {...state, isLoading: true};
    }
    case _onSuccess(Actions.GET_NEWS_HOME): {
      const newObj = {
        group_id: action.group_id,
        data: action.data,
      };

      const data = state.data ? [...state.data, newObj] : [newObj];

      return {
        data: data,
        totalPage: action.total_page,
        isLoading: false,
      };
    }
    case _onFail(Actions.GET_NEWS_HOME): {
      return {...state, isLoading: false};
    }
    case _onUnmount(Actions.GET_NEWS_HOME): {
      return {...stateLoadMore};
    }
    default:
      return state;
  }
};

export const NewsReducer = {news, newsdetails, newsGroup, newsHome};
