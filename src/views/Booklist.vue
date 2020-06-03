<template>
    <div>
        <ul v-if="books.length">
            <Book
                v-for="book in books"
                :key = "book.id"
                :book="book"
            />
        </ul>
        <p v-else>
            Nothing left in the list.
        </p>
    </div>
</template>

<script>
  import Book from './Book.vue'
  import {searchedList} from "../main";

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