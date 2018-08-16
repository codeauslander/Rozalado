export default (tasks, { text, sortBy }) => {
  return tasks
    .filter(task => {
      const textMatch = task.task.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      // if (sortBy === "amount") {
      return a.task.length < b.task.length ? 1 : -1;
      // }
    });
};
