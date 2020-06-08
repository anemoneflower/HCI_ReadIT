<template>
  <div>
    <div class="page-info">
      <div>BookNotes : {{ book.title }}</div>
      <!-- <div class="title">{{ book.title }}</div> -->
    </div>
    <ul class="bookNoteList" v-if="bookNotes.length">
      <card
        v-for="bookNote in bookNotes"
        :key="bookNote.id"
        :bookNote="bookNote"
      >
      </card>
    </ul>
    <p v-else>
      Nothing left in the list.
    </p>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { bookNoteList, selectedBook } from "../main";
import firebase from "firebase";

export default {
  components: {
    Card
  },
  data() {
    return {
      bookNotes: bookNoteList,
      book: selectedBook[0]
    };
  },
  created() {
    bookNoteList.splice(0, bookNoteList.length);
    console.log("bookNoteList");
    console.log(bookNoteList);
    firebase
      .database()
      .ref("/bookNote")
      .once("value", function(snapshot) {
        var myValue = snapshot.val();
        var keyList = Object.keys(myValue);
        // var index=1;
        for (var i = keyList.length; i > 0; i--) {
          var myKey = keyList[i - 1];
          var book = myValue[myKey].bookKey;
          var share = myValue[myKey].share;
          //if(myValue[myKey].title = "booktitle") 로 바꿔줘야함.
          if (book == selectedBook[0].key && share) {
            var myBookNote = myValue[myKey];
            // myBookNote.index = index;
            // index++;
            // console.log(myBookNote);
            bookNoteList.push(myBookNote);
          }
        }
        for (var j = 0; j < bookNoteList.length; j++) {
          var bookNote = bookNoteList[j];
          console.log(bookNoteList.length);
          bookNote.index = bookNoteList.length - j;
        }
      });
  }
};
</script>
<style scoped>
.page-info {
  position: relative;
  text-align: left;
  font-size: 25px;
  padding-top: 50px;
  padding-left: 120px;
}
.bookNoteList {
  position: relative;
  padding-top: 20px;
}
/* .title {
    position: relative;
    float: left;
  } */
</style>
