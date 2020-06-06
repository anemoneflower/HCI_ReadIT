import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import WriteNote from "../views/WriteNote.vue";

// import Search from "@/components/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/book-note-board",
    name: "BookNoteBoard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/BookNoteBoard.vue");
    }
  },
  {
    path: "/read-note",
    name: "ReadNote",

    component: function() {
      return import("../views/ReadNote.vue");
    }
  },
  {
    path: "/write-note",
    name: "WriteNote",
    component: WriteNote,
    props: true
  },
  {
    path: "/search",
    name: "SearchPage",
    component: function() {
      return import("../views/Searchpage.vue");
    }
  },
  {
    path: "/book-list",
    name: "Booklist",
    component: function () {
      return import("../views/Booklist.vue");
    }
  },
  {
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
  },
  {
    path: "/signin",
    name: "SignIn",
    component: function() {
      return import("../views/SignIn.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
