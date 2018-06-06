import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import update from "immutability-helper";
import firebase from "firebase/app";
import moment from "moment";
// Utils
import { firebaseInit } from "./config/firebase";
import { doesItExist } from "./utils/firebase";
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
          const {
            uid,
            displayName,
            email,
            emailVerified,
            photoUrl,
            providerData
          } = user;

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

          // Updates state with user's data
          this.setState({
            user: {
              uid,
              displayName,
              email,
              todos: [],
              totalTodos: null,
              emailVerified,
              providerData
            }
          });

          if (!doesItExist(uid)) {
            // Creates db reference with user's data
            firebase
              .database()
              .ref(`users/${uid}`)
              .update({ ...this.state.user });

            // Sets new user's first task
            this.setState({
              user: update(this.state.user, {
                todos: {
                  $set: {
                    id: 0,
                    title: "HEY THERE! WELCOME IN MITODO!",
                    date: moment().format("LLLL")
                  }
                }
              })
            });
          }
        }
      });
    };
    window.addEventListener("load", () => initApp());
  }

  render() {
    return (
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
    );
  }
}

export default App;
