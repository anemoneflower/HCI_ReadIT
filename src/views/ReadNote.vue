<template>
  <div class="read-my-note">
    <h1>This is a read my book note page</h1>
    <NoteBox
      essayTitle="Welcome to Your Vue.js App"
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
