<template>
    <div>
        <div class="booklist" v-if="books.length">
            <div  :key = "book.key" v-for="book in books">
                <router-link to="/book-note-board">
                    <Book
                        :book="book"
                    />
                </router-link>
            </div>
        </div>
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
  .booklist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    grid-auto-rows:minmax(300px, auto);
    column-gap: 40px;
    row-gap: 20px;
  }

  .item {
    grid-row: span 1;
    grid-column: span 1;
  }
</style>