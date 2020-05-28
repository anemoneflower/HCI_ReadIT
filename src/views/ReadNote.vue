<template>
  <div class="read-my-note">
    <NoteBox
      essayTitle="Harry Potter Chapter 1"
      author="Juho Kim"
      book="Harry Potter and ..."
      date="2020/ 01/ 20"
      contents="Harry Potter went to the zoo."
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
