<template>
    <div>
        <ul v-if="books.length">
            <router-link to="/book-note-board">
                <Book
                v-for="book in books"
                :key = "book.key"
                :book="book"
            />
            </router-link>
        </ul>
        <p v-else>
            Nothing left in the list.
        </p>
    </div>
</template>

<script>
  import Book from './../components/Book.vue'
  import { searchedList} from "../main";
  // import firebase from "firebase";

  export default {
    components:{
      Book
    },
    data() {
      return{
        books:
        searchedList
      }
    }
  }
</script>

<style scoped>

</style>