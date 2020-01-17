import Firebase from 'firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

Vue.config.productionTip = false
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
