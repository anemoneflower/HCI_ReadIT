<template>
  <div>
    <div class="result">Search result</div>
    <div class="booklist" v-if="books.length">
      <div
        :key="book.key"
        v-for="(book, index) in books"
        @click="goBoard(index)"
      >
        <!--                <router-link to="/book-note-board">-->
        <Book :book="book" />
        <!--                </router-link>-->
      </div>
    </div>
    <p v-else>
      Nothing left in the list.
    </p>
  </div>
</template>

<script>
import Book from "./../components/Book.vue";
import { searchedList, selectedBook } from "../main";
// import firebase from "firebase";

export default {
  components: {
    Book
  },
  props: {
    bookKey: String
  },
  data() {
    return {
      books: searchedList
    };
  },
  methods: {
    goBoard(index) {
      /* var _selectedBook = selectedBook; */
      selectedBook.splice(0, selectedBook.length);
      var selected = this.books[index];
      selectedBook.push(selected);
      console.log(selectedBook.length);
      console.log(selected);
      this.$router.push("/book-note-board/" + selected.key);
    }
  }
};
</script>

<style scoped>
.result {
  font-size: 25px;
  padding-top: 50px;
  padding-left: 120px;
  text-align: left;
  position: relative;
  width: 80%;
}

.booklist {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-auto-rows: minmax(300px, auto);
  column-gap: 40px;
  row-gap: 20px;
  padding-top: 20px;
  margin-left: 90px;
  margin-right: 90px;
}
</style>
