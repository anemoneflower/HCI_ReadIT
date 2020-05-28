<template>
  <div class="NoteBox">
    <div id="titleLayout">
      <p style="display:inline">{{ book }}</p>
      <p style="display:inline">{{ date }}</p>
      <div>
        <p>{{ essayTitle }}</p>
        <p>{{ author }}</p>
      </div>
    </div>
    <div class="contents">
      <p>{{ contents }}</p>
    </div>
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
#titleLayout {
  width: 300px;
  margin: auto;
  display: grid;
  grid-template-columns: 120px 60px 120px;
}

.contents {
  width: 40%;
  height: 200px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  border: #c4c4c4 solid 5px;
  background: #c4c4c4;
}
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
