<template>
  <div id="app">
    <div class="nav" v-if="isNotSignInPage()&&isNotBoardPage()">
      <nav-bar></nav-bar>
    </div>
    <div class="nav2" v-else-if="isNotSignInPage()&&isBoardPage()">
      <nav-bar></nav-bar>
    </div>
    <div class="bar" v-if="isNotHome() && isNotSignInPage()">
      <search-bar/>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue"
// import {selectedBook} from "./main";

export default {
  components: {
    NavBar,
    SearchBar
  },
  methods: {
    isNotHome() {
      return this.$router.history.current["path"] != "/";
    },
    isNotSignInPage() {
      return this.$router.history.current["path"] != "/sign-in"
    },
    isNotBoardPage(){
      return this.$router.history.current["path"] != "/book-note-board";
      // if(selectedBook.length!=0){
      //   return true
      // }
      // else{
      //   return false
      // }
    },
    isBoardPage(){
      return this.$router.history.current["path"] == "/book-note-board";
      // if(selectedBook.length!=0){
      //   return true
      // }
      // else{
      //   return false
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.nav2 {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.bar {
  position: fixed;
  top: 25.5px;
  left: 340px;
  z-index: 2;
}

.view {
  position: relative;
  margin-top: 80px;
}


</style>
