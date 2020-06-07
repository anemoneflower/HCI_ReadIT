<template>
  <div id="app">
    <div class="nav" v-if="isNotSignInPage()">
      <nav-bar></nav-bar>
    </div>
    <div class="mini-search" v-if="isNotHome()">
      <div class="bar">
        <search-bar/>
      </div>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue"

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

.mini-search {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  width: 100%;
  height: 110px;
  background: white;
}

.bar {
  position: fixed;
  right: 50px;
  bottom: 30px;
  z-index: 2;
}

.view {
  position: relative;
  margin-top: 80px;
}

</style>
