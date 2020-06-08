import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;
Vue.prototype.$isSignin = false;
// Vue.use(VueFire)

var config = {
  apiKey: "AIzaSyAHY5w2-Y3wUspDe3cE45PdCQLikBQq-Xw",
  authDomain: "hci-readit.firebaseapp.com",
  databaseURL: "https://hci-readit.firebaseio.com",
  projectId: "hci-readit",
  storageBucket: "hci-readit.appspot.com",
  messagingSenderId: "498218541798",
  appId: "1:498218541798:web:0d27160234707135519127",
  measurementId: "G-999QDH6XFK"
};
// Initialize Firebase

let app = firebase.initializeApp(config);
export const isSignIn = new Array();
isSignIn.push(false);

export const db = app.database();
export const current = new Array();
export const bookList = new Array();
export const bookTitle = new Array();
export let searchedList = new Array();
export const bookNoteList = new Array();
export const userKey = new Array();
export const selectedBook = new Array();
export const selectedBookNote = new Array();
export const myBooks = new Array();
export const myBookNotes = new Array();
export const selectedMyBook = new Array();

firebase
  .database()
  .ref("/Book")
  .once("value", function(snapshot) {
    var myValue = snapshot.val();
    var keyList = Object.keys(myValue);
    for (var i = 0; i < keyList.length; i++) {
      var myKey = keyList[i];
      if (i < 7) {
        var title = myValue[myKey].title;
        bookTitle.push(title);
      }
      var myBook = myValue[myKey];
      myBook.key = myKey;
      bookList.push(myBook);
    }
    console.log(bookList);
  });

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
