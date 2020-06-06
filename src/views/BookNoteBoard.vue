<template>
  <div>
<!--    <div v-if = "bookNotes.length">-->
<!--      <card v-for="bookNote in bookNotes"-->
<!--            :key = "bookNote.id"-->
<!--            : bookNote = "bookNote"-->
<!--      ></card>-->
<!--      </div>-->
  </div>
</template>

<script>
// import Card from "../components/Card.vue";
import {bookNoteList} from "../main";

export default {
  components: {
    // Card
  },
  data(){
    return{
      bookNotes : bookNoteList
    }
  }
}
</script>
<style scoped>

</style>