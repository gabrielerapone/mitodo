import firebase from "firebase/app";
import moment from "moment";

// LOGOUT
const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(
      () => {
        console.log("Signed Out");
      },
      error => {
        console.error("Sign Out Error", error);
      }
    );
};

// CHECK DATA IN DB
const doesItExist = (uid, node) => {
  // Check if there are todos
  firebase
    .database()
    .ref(`users/${uid}`)
    .once("value")
    .then(snapshot => {
      // console.log(snapshot.child(uid).exists(), snapshot.child(node).exists());
      return snapshot.child(uid).exists();
    });
};

// ADD A TODO
const addTodo = (uid, todo, totalTodos) => {
  const db = firebase.database();

  // Creates new todo object
  const newTodo = {
    id: totalTodos,
    title: todo,
    date: moment().format("LLLL")
  };

  // Posts todo
  db.ref(`users/${uid}`)
    .child("todos")
    .push({ ...newTodo });
};

// REMOVE A TODO
const removeTodo = (uid, todoId) => {
  const db = firebase.database();
  db.ref(`users/${uid}/todos/${todoId}`).remove();
};

export { logout, doesItExist, addTodo, removeTodo };
