import React, { Component } from "react";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import styled from "styled-components";

export default class Login extends Component {
  componentWillMount() {
    const uiConfig = {
      signInSuccessUrl: "http://localhost:3000/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>"
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  render() {
    return <LoginPage id="firebaseui-auth-container" />;
  }
}

const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
