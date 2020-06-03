<template>
    <div id="searchPage">
        <Autocomplete/>
    </div>
</template>

<script>
  import Autocomplete from "../components/Autocomplete.vue";
  export default {
    name: "SearchPage",
    components: { Autocomplete}
  };
</script>

<style>
    #searchPage{
        margin:0px auto;
        margin-top: 60px;
        width: 400px;
    }
</style>
