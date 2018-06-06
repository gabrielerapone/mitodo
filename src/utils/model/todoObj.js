import moment from "moment";

export const todoObj = (todosNumber, todo) => {
  return {
    id: todosNumber,
    title: todo,
    date: moment().format("LLLL")
  };
};
