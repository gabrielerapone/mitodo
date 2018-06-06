import firebase from "firebase/app";
import moment from "moment";

// CHECK DATA IN DB
const doesItExist = (uid, node) => {
  const db = firebase.database();
  // Check if there are todos
  db.ref(`users/${uid}`)
    .once("value")
    .then(snapshot => {
      console.log(snapshot.child(uid).exists(), snapshot.child(node).exists());
      return snapshot.child(uid).exists();
    });
};

// ADD A TODO
const addTodo = (uid, todo) => {
  const db = firebase.database();
  let todosNumber = 0;

  // Updates todos number
  db.ref(`users/${uid}`)
    .child("todos")
    .once("value")
    .then(snapshot => {
      if (snapshot.val()) {
        snapshot.val().map(todo => (todosNumber += 1));
        todosNumber = snapshot.numChildren();
      }
    });

  // Creates new todo object
  const newTodo = {
    id: todosNumber,
    title: todo,
    date: moment().format("LLLL")
  };

  // Posts todo
  db.ref(`users/${uid}/todos`).update({ [todosNumber]: newTodo });
};

// REMOVE A TODO
const removeTodo = (uid, todoId) => {
  const db = firebase.database();
  db.ref(`users/${uid}/todos/${todoId}`).remove(todoId);
};

export { doesItExist, addTodo, removeTodo };
