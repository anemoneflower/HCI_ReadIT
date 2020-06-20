<template>
  <div id="app">
    <div class="top">
      <div class="nav" v-if="isNotSignInPage() && isBookSelected()">
        <nav-bar :key="selected"></nav-bar>
      </div>
      <div class="bar" v-if="isNotHome() && isNotSignInPage()">
        <search-bar />
      </div>
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
// import {selectedBook} from "./main";

export default {
  components: {
    NavBar,
    SearchBar
  },
  data: function(){
    return {
      selected: false
    };
  },
  methods: {
    isBookSelected() {
      var curPath = this.$router.history.current["path"];
      var trim = curPath.split("/");
      console.log(`select check -app: ${trim[trim.length - 1]}`);
      this.selected = trim[trim.length - 1].length > 10;
      return true;
    },
    isNotHome() {
      return this.$router.history.current["path"] != "/";
    },
    isNotSignInPage() {
      return this.$router.history.current["path"] != "/sign-in";
    },
    isNotBoardPage() {
      return this.$router.history.current["path"] != "/book-note-board";
      // if(selectedBook.length!=0){
      //   return true
      // }
      // else{
      //   return false
      // }
    },
    isBoardPage() {
      return this.$router.history.current["path"] == "/book-note-board";
      // if(selectedBook.length!=0){
      //   return true
      // }
      // else{
      //   return false
      // }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.top {
  position: -webkit-sticky;
  position: sticky;
  margin-top: -100px;
  z-index: 3;
  top: 0;
}

.nav {
  position: absolute;
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
  position: absolute;
  top: 25.5px;
  left: 340px;
  z-index: 2;
}

.view {
  position: relative;
  padding-top: 180px;
}
</style>
