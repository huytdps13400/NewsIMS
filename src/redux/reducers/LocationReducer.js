import Actions, {_onFail, _onSuccess, _onUnmount} from '../actions';

const initialState = {
  data: [],
  dataTmp: [],
  isLoading: false,
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_LOCATION:
      const newData = state.dataTmp?.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = action.keyword.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return {...state, data: newData};
    case Actions.GET_LOCATION:
      return {...state, isLoading: true};
    case _onSuccess(Actions.GET_LOCATION):
      return {
        ...state,
        data: action.data,
        dataTmp: action.data,
        isLoading: false,
      };
    case _onFail(Actions.GET_LOCATION):
      return {...state, isLoading: false};
    case _onUnmount(Actions.GET_LOCATION):
      return {...initialState};
    default:
      return state;
  }
};

export const LocationReducer = {location};
