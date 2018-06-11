import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import update from "immutability-helper";
import firebase from "firebase/app";
import styled from "styled-components";
// Utils
import { firebaseInit } from "./config/firebase";
import { doesItExist } from "./utils/firebase";
// import { todoObj } from "./utils/model/todoObj";
// Components
import Main from "./components/Main";
import Login from "./utils/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    firebaseInit();
  }

  componentWillMount() {
    const initApp = () => {
      firebase.auth().onAuthStateChanged(user => {
        // User is signed in
        if (user) {
          const { uid, displayName, email, emailVerified, providerData } = user;

          // Get number of todos
          firebase
            .database()
            .ref(`users/${uid}`)
            .child("todos")
            .on("value", snapshot =>
              this.setState({
                user: update(this.state.user, {
                  totalTodos: { $set: snapshot.numChildren() }
                })
              })
            );

          if (!doesItExist(uid)) {
            // Updates state with user's data
            this.setState({
              user: {
                uid,
                displayName,
                email,
                totalTodos: null,
                emailVerified,
                providerData
              }
            });

            // Sets new user's first task
            // const welcomeTodo = todoObj(0, "HEY THERE! WELCOME IN MITODO!");
            // this.setState({
            //   user: update(this.state.user, {
            //     todos: { $set: { 0: welcomeTodo } }
            //   })
            // });

            // Creates db reference with user's data
            firebase
              .database()
              .ref(`users/${uid}`)
              .update({ ...this.state.user });
          }
        } else if (
          !user &&
          window.location.href !== "http://localhost:3000/login"
        ) {
          window.location.href = "http://localhost:3000/login";
        }
      });
    };
    window.addEventListener("load", () => initApp());
  }

  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Main user={this.state.user} />}
            />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
