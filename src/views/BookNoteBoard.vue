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
import {bookNoteList, selectedBook} from "../main";
import firebase from "firebase";

export default {
  components: {
    Card
  },
  data(){
    return{
      bookNotes : bookNoteList
    }
  },
  created() {
    bookNoteList.splice(0, bookNoteList.length);
    firebase.database().ref('/bookNote').once('value',function(snapshot){

      var myValue = snapshot.val();
      var keyList = Object.keys(myValue);
      for(var i=keyList.length;i>0;i--) {
        var myKey = keyList[i-1];
        var book = myValue[myKey].bookKey;
        //if(myValue[myKey].title = "booktitle") 로 바꿔줘야함.
        if (book == selectedBook[0].key) {
          var myBookNote = myValue[myKey];
          myBookNote.index = keyList.length-i+1;
          bookNoteList.push(myBookNote);
        }
      }
      console.log(bookNoteList);
    });
  }
}
</script>
<style scoped>

</style>