<template>
  <div class="book-wrap">
    <img class="thumbnail" :src="book.img" style="position: relative;" />
    <div class="book-info">
      <h1 class="title">{{ book.title }}</h1>
      <h2 class="author">{{ book.author }}</h2>
      <h4 class="publisher">{{ book.publisher }}</h4>
      <p class="description">Click to read Booknotes</p>
    </div>
  </div>
</template>

<script>
// import {selectedBook} from "../main";
// // import firebase from "firebase";

export default {
  name: "Book",
  props: {
    book: {
      type: Object
    }
  }
  // methods:{
  //     goBoard(){
  // bookNoteList.splice(0, bookNoteList.length);
  // selectedBook.splice(0, selectedBook.length);
  // var selected = this.book;
  // selectedBook.push(selected);
  // console.log(selectedBook.length);
  // console.log(selected);
  // firebase.database().ref('/bookNote').once('value',function(snapshot){
  //
  //     var myValue = snapshot.val();
  //     var keyList = Object.keys(myValue);
  //     for(var i=keyList.length;i>0;i--) {
  //         var myKey = keyList[i-1];
  //         var book = myValue[myKey].bookKey;
  //         //if(myValue[myKey].title = "booktitle") 로 바꿔줘야함.
  //         if (book == selected.key) {
  //             var myBookNote = myValue[myKey];
  //             myBookNote.index = keyList.length-i+1;
  //             bookNoteList.push(myBookNote);
  //         }
  //     }
  //     console.log(bookNoteList);
  // });
  //     }
  // }
};
</script>

<style scoped>
.book-wrap {
  position: relative;
  height: 300px;
  width: 200px;
  display: block;
  background-color: #fff;
  margin: 20px;
  box-shadow: 0px 20px 50px #d9dbdf;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  outline: none;
}

.book-wrap:hover {
  -webkit-transform: translate(20px, -10px);
  -ms-transform: translate(10px, -10px);
  transform: translate(10px, -10px);
  -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.book-wrap:hover .thumbnail {
  opacity: 0.6;
}

.book-wrap:hover .book-info {
  opacity: 1;
}

.thumbnail {
  background: black;
  height: 300px;
  width: 100%;
  overflow: hidden;
  display: block;
}

.book-info {
  position: absolute;
  bottom: 0;
  background: #fff;
  width: 190px;
  padding: 20px 5px 20px 5px;
  opacity: 0.8;
}

.title {
  margin: 0;
  padding: 0 0 10px;
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 700;
}

.author {
  margin: 0;
  padding: 0 0 20px;
  color: #f37022;
  font-size: 15px;
  font-weight: 400;
}

.publisher {
  margin: 0;
  padding: 0 0 10px;
  color: #3a3a3a;
  font-size: 15px;
  font-weight: 400;
}

.description {
  display: none;
  /*color: #3a3a3a;*/
  color: #f37022;
  /*color: #959595;*/
  font-size: 15px;
  font-weight: bold;
  text-decoration: underline;
}

.book-wrap:hover .description {
  display: block !important;
  height: auto !important;
  opacity: 1 !important;
}
</style>
