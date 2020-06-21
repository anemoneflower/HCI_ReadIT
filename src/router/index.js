import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";
import WriteNote from "../views/WriteNote.vue";

// import Search from "@/components/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //:bookKey",
    name: "Home",
    component: Home
    /* props: (route) => ({ bookKey: route.params.bookKey || 'default' }) */
  },
  {
    path: "/book-note-board/:bookKey",
    name: "BookNoteBoard",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/BookNoteBoard.vue"
      );
    }
  },
  {
    path: "/read-note/:noteKey/:bookKey",
    name: "ReadNote",
    props: true,
    component: function() {
      return import("../views/ReadNote.vue");
    }
  },
  {
    path: "/write-note/:_bookKey",
    name: "WriteNote",
    component: WriteNote,
    props: true
  },
  {
    path: "/book-list/:bookKey",
    name: "Booklist",
    props: true,
    component: function() {
      return import("../views/Booklist.vue");
    }
  },
  /*   {
    path: "/make-quiz",
    name: "MakeQuiz",
    component: function() {
      return import("../views/MakeQuiz.vue");
    }
  },
  {
    path: "/solve-quiz",
    name: "SolveQuiz",
    component: function() {
      return import("../views/SolveQuiz.vue");
    }
  }, */
  {
    path: "/sign-in",
    name: "SignIn",
    component: function() {
      return import("../views/SignIn.vue");
    }
  },
  {
    path: "/my-page/:bookKey",
    name: "MyBooklist",
    props: true,
    component: function() {
      return import("../views/MyBooklist.vue");
    }
  },
  {
    path: "/my-note/:bookKey",
    name: "MyBookNote",
    props: true,
    component: function() {
      return import("../views/MyBookNote.vue");
    }
  },
  {
    path: "/selected-book/:bookKey",
    name: "Home2",
    component: Home2,
    props: route => ({ bookKey: route.params.bookKey || "default" })
  }
];

const router = new VueRouter({
  routes
});

export default router;
