<template>
    <div id="searchPage">
        <search-bar/>
    </div>
</template>

<script>
  import SearchBar from "../components/SearchBar.vue";
  export default {
    name: "SearchPage",
    components: { SearchBar}
  };

</script>

<style>
   #searchPage{
        margin:0px auto;
        margin-top: 60px;
        width: 400px;
    }
</style>
