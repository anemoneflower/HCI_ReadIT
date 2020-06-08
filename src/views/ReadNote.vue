<template>
  <div class="read-my-note">
    <!--    <NoteBox-->
    <!--      v-bind:range="noteKey"-->
    <!--      v-bind:essayTitle = bookNote.title-->
    <!--      author="Juho Kim"-->
    <!--      date="4 JUN 2020"-->
    <!--      contents="Harry Potter's parents were killed by 'You Know Who', but Harry survived. Sonyun Punch was so strong. Dododongha fainted away by Sonyun Punch. Hwang Chairin's Jungchiryuk is global No.1. Black Seo Sonyun sent E-mail to blaim Dododongha"-->
    <!--    />-->
    <NoteBox :bookNote="bookNote" :noteKey="noteKey" />
  </div>
</template>

<script>
// @ is an alias to /src
import NoteBox from "@/components/NoteBox.vue";
import { selectedBookNote } from "../main";
import { db } from "../main";

export default {
  name: "ReadMyNote",
  components: {
    NoteBox
  },
  props: {
    noteKey: String
  },
  data() {
    return {
      bookNote: selectedBookNote[0]
    };
  },
  created() {
    db.ref("bookNote")
      .child(this.noteKey)
      .update({
        view: this.bookNote.view + 1
      });
    this.bookNote.view = this.bookNote.view + 1;
  }
};
</script>
