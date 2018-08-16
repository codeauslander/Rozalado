import uuid from "uuid";

// const tasksUrl = "https://us-central1-routecandidates.cloudfunctions.net/tasks";

export const fetchTasks = () => ({
  type: "FETCH_TASKS",
  // tasks: fetch(tasksUrl).then(response => response.json())
  tasksUrl: "https://us-central1-routecandidates.cloudfunctions.net/tasks"
});

export const addTask = ({ task = "" } = {}) => ({
  type: "ADD_TASK",
  task: {
    _id: uuid(),
    task
  }
});

export const removeTask = ({ _id } = {}) => ({
  type: "REMOVE_TASK",
  _id
});

export const editTask = (_id, updates) => ({
  type: "EDIT_TASK",
  _id,
  updates
});
