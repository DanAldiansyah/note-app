export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((t) => t._id !== action.payload._id),
      };
    default:
      return state;
  }
};
