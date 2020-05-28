<template>
  <div class="NoteBox">
    <h3 class="titles">{{ book }}</h3>
    <h2 class="titles">{{ essayTitle }}</h2>
    <div id="titleLayout">
      <p>by: {{ author }}</p>
      <p>date: {{ date }}</p>
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
.titles {
  width: 500px;
  margin: auto;
  text-align: left;
}

#titleLayout {
  width: 500px;
  margin: auto;
  display: grid;
  text-align: left;
  grid-template-columns: 350px auto;
}

.contents {
  width: 500px;
  height: 200px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  border: #c4c4c4 solid 5px;
  background: #c4c4c4;

  text-align: left;
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
