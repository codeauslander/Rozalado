import uuid from "uuid";
import axios from 'axios';

const tasksUrl = "https://us-central1-routecandidates.cloudfunctions.net/tasks";

export const fetchTasks = () => async dispatch => {
  dispatch({
    type: 'FETCH_TASKS'
  });

  let response = await axios.get(tasksUrl);
  if (response.status < 400) {
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

export const filterSortTasks =  (tasks, text, sortBy = 'id') => (dispatch) => {
  dispatch({
    type: 'FILTER_SORT_TASKS'
  });
  // console.log(tasks,text,sortBy);

  let list = tasks.filter(task => {
    let textMatch = false;
    if (typeof task.task === 'string') {
      textMatch = task.task.toLowerCase().includes(text.toLowerCase());
      // console.log(textMatch);
    }else if (task.task instanceof Array || task.task instanceof Object){
      textMatch = true;
    }
    return textMatch;
  })
  .sort((a, b) => {
    if (sortBy === "id") {
      let result = a.task._id < b.task._id ? -1 : 1;
      return result;
    }
  });
  console.log(list)
  return dispatch(setTextFilter(list));
};


export const setTextFilter = (tasks) => ({
  type: "SET_TEXT_FILTER",
  payload: tasks
});

export const sortById = () => ({
  type: "SORT_BY_ID"
});
