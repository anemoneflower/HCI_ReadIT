<template>
  <div>
    <div class="result">My Bookshelf</div>
    <div class="booklist" v-if="books.length">
      <div
        :key="book.key"
        v-for="(book, index) in books"
        @click="goMyNote(index)"
      >
        <!--                <router-link to="/my-note">-->
        <Book :book="book" />
        <!--                </router-link>-->
      </div>
    </div>
    <p v-else>
      Nothing left in the bookshelf.
    </p>
  </div>
</template>

<script>
import Book from "./../components/Book.vue";
import { myBookNotes, myBooks, selectedMyBook, userKey } from "../main";
import firebase from "firebase";

export default {
  components: {
    Book
  },
  created() {
    myBookNotes.splice(0, myBookNotes.length);
    myBooks.splice(0, myBooks.length);
    var bookKeys = new Array();
    var user = userKey[0].key;
    firebase
      .database()
      .ref("/bookNote")
      .once("value", function(snapshot) {
        var myValue = snapshot.val();
        var keyList = Object.keys(myValue);
        for (var i = 0; i < keyList.length; i++) {
          var myKey = keyList[i];
          // console.log();
          console.log("myKey" + myKey);

          var bookKey = myValue[myKey].bookKey;
          if (user == myValue[myKey].userKey) {
            myBookNotes.push(myValue[myKey]);
            if (!bookKeys.includes(bookKey)) {
              bookKeys.push(bookKey);
            }
          }
        }
      });

    firebase
      .database()
      .ref("/Book")
      .once("value", function(snapshot) {
        var myValue = snapshot.val();
        for (var j = 0; j < bookKeys.length; j++) {
          var myBook = myValue[bookKeys[j]];
          var bookKey = bookKeys[j];
          console.log("BOOKKEY" + bookKey);
          myBook.key = bookKey;
          myBooks.push(myBook);
        }
      });
  },
  data() {
    return {
      books: myBooks
    };
  },
  methods: {
    goMyNote(index) {
      console.log("MYBOOKS" + myBooks[0]);
      selectedMyBook.splice(0, selectedMyBook.length);
      var selected = this.books[index];
      selectedMyBook.push(selected);
      this.$router.push("/my-note");
      // console.log(selectedMyBook.length);
      // console.log(selected);
    }
  }
};
</script>

<style scoped>
.result {
  font-size: 25px;
  padding-top: 50px;
  margin-left: 120px;
  text-align: left;
  position: relative;
  width: 100%;
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
