const tasksReducerDefaultState = [];

export default (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return fetch(action.tasksUrl).then(response => response.json());
    case "ADD_TASK":
      return [...state, action.task];
    case "REMOVE_TASK":
      return state.filter(({ _id }) => _id !== action._id);
    case "EDIT_TASK":
      return state.map(task => {
        if (task._id === action._id) {
          return {
            ...task,
            ...action.updates
          };
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};
