// import uuid from "uuid";
import axios from 'axios';

const tasksUrl = "https://us-central1-routecandidates.cloudfunctions.net/tasks";

export const fetchTasks = () => (dispatch) => {
  dispatch({
    type: 'FETCH_TASKS'
  });
  
  return fetch(tasksUrl)
  .then((response) => response.json())
  .then((data) => {
    return dispatch(fetchTasksSuccess(data));
  })
  .catch((error) => {
    return dispatch(fetchTasksFail(error));
  })
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
        return a._id > b._id ? -1 : 1;
      } else {
        return a._id < b._id ? -1 : 1;
      }
    });

  return dispatch(filterSortSuccess(list));
};


export const filterSortSuccess = (tasks) => ({
  type: "FILTER_SORT_SUCCESS",
  payload: tasks
});

// export const sortById = () => ({
//   type: "SORT_BY_ID"
// });
