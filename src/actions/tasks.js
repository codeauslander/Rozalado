import uuid from "uuid";
import axios from 'axios';

const tasksUrl = "https://us-central1-routecandidates.cloudfunctions.net/tasks";

export const fetchTasks = () => async dispatch => {
  dispatch({
    type: 'FETCH_TASKS'
  });

  let response = await axios.get(tasksUrl);
  if (response.status === 200) {
    return dispatch(fetchTasksSuccess(response.data));
  } else {
    return dispatch(fetchTasksFail(response.error));
  }
};

export const fetchTasksSuccess = tasks => ({
  type: 'FETCH_TASKS_SUCCESS',
  payload: tasks
});

export const fetchTasksFail = error => ({
  type: 'FETCH_TASKS_FAIL',
  payload: error
});

export const filterSortTasks =  (tasks, text, sortBy) => (dispatch) => {
  dispatch({
    type: 'FILTER_SORT_TASKS'
  });

  let list = tasks.filter(task => {
      let object = task.task
      let textMatch = false;
      if (typeof object === 'string') {
        textMatch = object.toLowerCase().includes(text.toLowerCase());
      } else if (typeof object === 'number'){
        textMatch = `${object}`.toLowerCase().includes(text.toLowerCase());
      } else if (object instanceof Object || object instanceof Array){
        textMatch = JSON.stringify(object).toLowerCase().includes(text.toLowerCase());
      }
      return textMatch;
    }).sort((a, b) => {
      if (sortBy === 'on') {
         console.log(sortBy);
        return a._id > b._id ? -1 : 1;
      } else {
         console.log(sortBy);
        return a._id < b._id ? -1 : 1;
      }
    });

  return dispatch(setTextFilter(list));
};


export const setTextFilter = (tasks) => ({
  type: "SET_TEXT_FILTER",
  payload: tasks
});

// export const sortById = () => ({
//   type: "SORT_BY_ID"
// });
