<template>
  <div>
    <ul v-if = "bookNotes.length">
      <card v-for = "bookNote in bookNotes"
            :key = "bookNote.id"
            :bookNote = "bookNote">
      </card>
    </ul>
    <p v-else>
      Nothing left in the list.
    </p>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import {bookNoteList} from "../main";

export default {
  components: {
    Card
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