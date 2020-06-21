<template>
  <div>
      <div class="head">
        <div class="page-info" >BookNotes : {{ book.title }}</div>
          <div class="searchPage">
<!--              <div class="pageText" >Search for page</div>-->
              <div class="autocomplete">
                    <input
                            autocomplete="off"
                            id="input"
                            type="text"
                            v-model="page"
                            :placeholder= "changeText"
                            :disabled="isWhole==true"
                    /><a
                  ><img
                          class="glass"
                          src="../assets/magnifying-glass.png"
                          @click="searchBookNote()"
                          title="this is search bar"
                  /></a>
              </div>
              <div class="whole">
                  <input class ="checkBox" type="checkbox" value="1" id="isWhole" v-model="isWhole"/>
                  <label class="label" for="isWhole">Whole page</label>
              </div>
<!--              <div class="searchBtm">-->
<!--                  <button id="btn" @click="searchBookNote">Search</button>-->
<!--              </div>-->
          </div>
    </div>
    <ul class="bookNoteList" v-if="bookNotes.length">
      <card
        v-for="bookNote in bookNotes"
        :key="bookNote.id"
        :bookNote="bookNote"
        :bookKey="bookKey"
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
import {bookNoteList, pageNum, selectedBook} from "../main";
import firebase from "firebase";

export default {
  components: {
    Card
  },
  props: {
    bookKey: String
  },
  data() {
    return {
      bookNotes: [],
      book: selectedBook[0],
        page: "",
        isWhole : false
    };
  },
  mounted() {
    bookNoteList.splice(0, bookNoteList.length);
    console.log("bookNoteList");
    console.log(bookNoteList);
    console.log(`key: ${this.bookKey}`);
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
      this.bookNotes = bookNoteList;
      console.log("PAGE"+pageNum);
  },
    methods:{
      searchBookNote(){
          var page = this.page;
          var noteList = bookNoteList;
          var newNote = new Array();
          pageNum.splice(0,pageNum.length);
          if(page==""){
              return [];
          }
          if(isNaN(page)){
              alert("Please input valid page number!");
              return this.page = "";
          }
          if(this.isWhole==false){
              for(var i=0;i<noteList.length;i++){
                  // console.log("NEWNOTE"+newNote);
                  if(parseInt(noteList[i].range2)<=page&&noteList[i].isWholeBook != true){
                      var arr2 = JSON.parse(JSON.stringify(noteList[i]));
                      newNote.push(arr2);
                  }
              }
              for(var j=0;j<newNote.length;j++){
                  // newNote[j].index = newNote.length - j;
                  console.log(newNote[j].index);
                  newNote[j].index = newNote.length - j;
                  console.log(newNote[j].index);
              }
              this.bookNotes = newNote;
              pageNum.push(page);
          }
          else{
              this.bookNotes = bookNoteList;
              this.page = "";
          }

      }
    },
    computed:{
      changeText(){
          if(this.isWhole==true){
              return "Whole Page";
          }
          else{
              return "Up to page no.";
          }
      }
    }
};
</script>
<style scoped>
    .head{
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: auto auto;
    }
.searchPage{
    width:300px;
    position: -webkit-sticky;
    position: sticky;
    /*left : 1000px;*/
    left: 1350px;
    right: 500px;
    margin-bottom: -210px;
    margin-top:55px;
    height: 200px;
    z-index:2;
    /*border: solid 2px;*/
    /*display: grid;*/
    /*grid-template-columns: 50px 50px;*/
    /*padding-top: 30px;*/
}
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

#input {
    /*margin-right: 0px;*/
    margin-left:10px;
    margin-top: 3px;
    width: 100px;
    outline: none;
    border: none;
    height: 38px;
    font-size: 15px;
}

.autocomplete {
    /*margin: 0 auto;*/
    /*align-items: end;*/
    /*margin-left: 600px;*/
    /*text-align: right;*/
    /*font-size: 25px;*/
    /*margin-top: 50px;*/
    margin-left: 75px;
    width: 180px;
    height: 45px;
    border: 1px solid #dcdcdc;
    position: relative;
    border-radius: 23px;
    list-style-type: none;
}

.autocomplete:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
}

/*.autocomplete:focus-within {*/
/*    box-shadow: 1px 1px 8px 1px #dcdcdc;*/
/*    outline: none;*/
/*}*/

.glass {
    height: 20px;
    position: relative;
    top: 4px;
    margin-right:9px;
    margin-left: 20px;
    cursor: pointer;
}
.whole{
    position: relative;
    margin-right: 10px;
    margin-top:15px;
    margin-bottom: 15px;
    font-size: 18px;

}

.checkBox{
    cursor: pointer;
}
.pageText{
    position: relative;
    font-size:20px;
    font-style: oblique;
    padding-bottom: 25px;
}
    #btn {
        position: relative;
        height: 40px;
        width: 100px;
        border-radius: 10px;
        background-color: #f37022;
        color: white;
        border: 0px;
        font-size: 18px;
        margin-top: 10px;
        /*margin-right: ;*/
        /*font-weight: bold;*/
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }
</style>
