<template>
  <div class="NoteBox">
    <h1>{{ book }}</h1>
    <h1>{{ date }}</h1>
    <h1>{{ essayTitle }}</h1>
    <h3>{{ author }}</h3>
    <div class="contents">
      <p>{{ contents }}</p>
    </div>
    <h3>Installed CLI Plugins</h3>
    <h3>Essential Links</h3>
  </div>
</template>

<script>
export default {
  name: "NoteBox",
  props: {
    book: String,
    date: String,
    essayTitle: String,
    author: String,
    contents: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
