<template>
  <div class="wrap">
    <img v-on:click="toMainPage" id="banner" src="../assets/logo.png" />
    <div id="my-page">
      <btn
        class="navbtn"
        @mouseover="myPageIsOpen = true"
        @mouseleave="myPageIsOpen = false"
        v-if="sign"
        >{{ username }}</btn
      >
      <div class="dropdown-contents navbtn" v-if="mypageisOpen">
        <btn v-on:click="toMyPage">My Page</btn>
        <btn v-on:click="toMyBookNote">My BookNotes</btn>
        <btn v-on:click="toMyQuiz">My Quiz</btn>
      </div>
    </div>
    <div id="booknote">
      <btn
        class="navbtn"
        @mouseover="bookNoteIsOpen = true"
        @mouseleave="bookNoteIsOpen = false"
        v-on:click="toBookNote"
        v-if="sign & bookIsSelected"
        >BookNotes</btn
      >
      <div class="dropdown-contents navbtn" v-if="bookNoteIsOpen">
        <btn v-on:click="toReadBookNote">Solve Quiz</btn>
        <btn v-on:click="toWriteBookNote">Make Quiz</btn>
      </div>
    </div>
    <div id="quiz">
      <btn
        class="navbtn"
        @mouseover="quizisOpen = true"
        @mouseleave="quizIsOpen = false"
        v-on:click="toQuiz"
        v-if="sign & bookIsSelected"
        >Quiz</btn
      >
      <div class="dropdown-contents navbtn" v-if="quizIsOpen">
        <btn v-on:click="toSolveQuiz">Solve Quiz</btn>
        <btn v-on:click="toMakeQuiz">Make Quiz</btn>
      </div>
    </div>
    <btn id="signIn" class="navbtn" v-if="(sign = false)" v-on:click="toSignIn"
      >Sign In</btn
    >
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    bookTitle: String
  },
  data: function() {
    return {
      sign: false,
      myPageIsOpen: false,
      bookNoteIsOpen: false,
      quizIsOpen: false,
      bookIsSelected: false
    };
  },
  methods: {
    toMainPage: function() {
      return this.$router.push("Home");
    },
    toSignIn: function() {
      // temporarily route to Home. Need to change into SignIn page.
      // return this.$router.push("SignIn")
      return this.$router.push("Home");
    },
    toMyPage: function() {
      // temporarily route to Home. Need to change into MyPage page.
      // return this.$router.push("MyPage")
      return this.$router.push("Home");
    },
    toMyBookNote: function() {
      // temporarily route to Home. Need to change into MyBookNote page.
      // return this.$router.push("MyBookNotes")
      return this.$router.push("Home");
    },
    toMyQuiz: function() {
      // temporarily route to Home. Need to change into MyQuiz page.
      // return this.$router.push("MyQuiz")
      return this.$router.push("Home");
    },
    toBookNote: function() {
      // temporarily route to Home. Need to change into BookNote page.
      // return this.$router.push("BookName/BookNote")
      return this.$router.push("Home");
    },
    toReadBookNote: function() {
      // temporarily route to Home. Need to change into Read BookNote page.
      // return this.$router.push("BookName/ReadBookNote")
      return this.$router.push("Home");
    },
    toWriteBookNote: function() {
      // temporarily route to Home. Need to change into Write BookNote page.
      // return this.$router.push("BookName/WriteBookNote")
      return this.$router.push("Home");
    },
    toQuiz: function() {
      // temporarily route to Home. Need to change into Quiz page.
      // return this.$router.push("BookName/Quiz")
      return this.$router.push("Home");
    },
    toSolveQuiz: function() {
      // temporarily route to Home. Need to change into SolveQuiz page.
      // return this.$router.push("BookName/SolveQuiz")
      return this.$router.push("Home");
    },
    toMakeQuiz: function() {
      // temporarily route to Home. Need to change into MakeQuiz page.
      // return this.$router.push("BookName/MakeQuiz")
      return this.$router.push("Home");
    }
  }
};
</script>

<style>
.wrap {
  height: 60px;
  width: 1170px;
  background-color: #fbbc04;
  color: #3a3a3a;
  position: relative;
  font-size: 15px;
  padding: 25px 15px 0px 15px;
  text-align: center;
}

#banner {
  height: 40px;
  float: left;
}

#my-page {
  width: 120px;
  display: inline-block;
  float: right;
}

#booknote {
  width: 120px;
  position: absolute;
  display: inline-block;
  left: 600px;
}

#quiz {
  width: 90px;
  position: absolute;
  display: inline-block;
  left: 800px;
}

.dropdown-contents {
  display: block;
}

.navbtn {
  padding: 8px 15px 10px 15px;
  height: 35px;
  border: none;
  border-radius: 2px;
  transition: 0.3s;
}

.navbtn:hover {
  opacity: 0.6;
}

#signin {
  width: 75.88px;
  position: absolute;
  float: right;
}
</style>
