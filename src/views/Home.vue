<template>
  <div class="home">
    <img class="jo" alt="Hey you can read it!" src="../assets/jo.png" />
    <search-bar></search-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar
  }
};
</script>

<style scoped>
.home {
  position: relative;
}

.jo {
  position: relative;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 20px;
  width: 575px;
}
</style>
