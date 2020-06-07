<template>
  <div class="read-my-note">
    <NoteBox
      essayTitle="Harry Potter Chapter 1"
      v-bind:range="noteKey"
      author="Juho Kim"
      date="4 JUN 2020"
      contents="Harry Potter's parents were killed by 'You Know Who', but Harry survived. Sonyun Punch was so strong. Dododongha fainted away by Sonyun Punch. Hwang Chairin's Jungchiryuk is global No.1. Black Seo Sonyun sent E-mail to blaim Dododongha"
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
  },
  props: {
    noteKey: String
  }
};
</script>
