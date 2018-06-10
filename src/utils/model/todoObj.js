import moment from "moment";

export const todoObj = (id, todo) => {
  return {
    id,
    title: todo,
    date: moment().format("LLLL")
  };
};
