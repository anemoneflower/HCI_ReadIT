<template>
  <div class="read-my-note">
    <h1>This is a note page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <NoteBox
      title="Welcome to Your Vue.js App"
      author="a"
      book="book"
      date="july"
      content="bla bla~~"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NoteBox from "@/components/NoteBox.vue";

export default {
  name: "ReadMyNote",
  components: {
    NoteBox
  }
};
</script>
