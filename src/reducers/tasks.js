import { combineReducers } from 'redux';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  text: "",
  sortBy: "amount"
};

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS': {
      return {
        ...state,
        loading: true
      };
    };
    case 'FETCH_TASKS_SUCCESS': {
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null
      };
    };
    case 'FETCH_TASKS_FAIL': {
      return {
        ...state,
        tasks: [],
        loading: false,
        error: action.payload
      };
    };
    case "SET_TEXT_FILTER":{
      return {
        ...state,
        text: action.text
      };
    };
    case "SORT_BY_AMOUNT":{
      return {
        ...state,
        sortBy: "amount"
      };
    };
    default: {
      return state;
    };
  };
};

export default combineReducers({ tasks });
