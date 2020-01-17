<template>
  <section>
    <navigation />
    <h5 class="center-align">
      Login
    </h5>
    <section id="firebaseui-auth-container" />
  </section>
</template>

<script>
import navigation from "./NavBar";
import firebase from "firebase";
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css";

export default {
    name: "Login",
    components: {
        navigation
    },
    data() {
        return {};
    },
    mounted() {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      var uiConfig = {
          signInSuccessUrl: "/profile",
          signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
      };
      ui.start("#firebaseui-auth-container", uiConfig);
    }
};
</script>

<style>
</style>
