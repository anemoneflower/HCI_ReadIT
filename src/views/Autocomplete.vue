<template>
    <div class="search">
<!--        <img alt="glass" class="search-icon" src="../assets/magnifying-glass.png" />-->
<!--        <router-link to='/book-list'><button class="searchButton" v-on:click="searchBook">search</button></router-link>-->

        <md-autocomplete class="searchbar" v-model="selectedBook" :md-options="bookTitle" md-layout="box" md-dense :md-open-on-focus="false">
            <label class="search-text">Search your book here.</label> </md-autocomplete>
        <router-link to='/book-list'><md-button class="btn" v-on:click="searchBook">SEARCH</md-button></router-link>
<!--        <md-toolbar class="toolbar">-->
<!--            <div class="md-toolbar-row">-->
<!--                <div class="md-toolbar-section-start">-->
<!--                    <img alt="glass" class="search-icon" src="../assets/magnifying-glass.png" />-->
<!--                </div>-->

<!--                <md-autocomplete-->
<!--                        class="search"-->
<!--                        v-model="selectedBook"-->
<!--                        :md-options="bookTitle"-->
<!--                        md-layout="box" md-dense-->
<!--                        :md-open-on-focus="false" md-input-placeholder="Search your book here.">-->
<!--&lt;!&ndash;                    <label>Search your book here.</label>&ndash;&gt;-->
<!--                </md-autocomplete>-->

<!--                <div class="md-toolbar-section-end">-->
<!--                    <router-link to='/book-list'><md-button>SEARCH</md-button></router-link>-->
<!--                </div>-->
<!--            </div>-->
<!--        </md-toolbar>-->
    </div>
</template>


<script>
  import firebase from 'firebase'
  import {bookList} from "../main";
  export default {
    name: "Autocomplete",
    data: () =>({
      selectedBook:'',
      bookTitle:[
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Secret Chamber",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-blooded Prince",
        "Harry Potter and the Deathly Hollows"
      ]
    }),
    methods:{
          searchBook(){
            // console.log(this.book);
            var book = this.selectedBook;
            firebase.database().ref('/Book').once('value',function(snapshot){

              var myValue = snapshot.val();
              var keyList = Object.keys(myValue);
              for(var i=0;i<keyList.length;i++) {
                var myKey = keyList[i];
                var title = (myValue[myKey].title).toUpperCase();
                // console.log(title);
                var checkValue = title.indexOf(book.toUpperCase());
                // console.log(book);
                if (checkValue != -1) {
                  // console.log(myValue[myKey]);
                  bookList.push(myValue[myKey]);
                }
              }
              console.log(bookList);
            });
          }
        }
  }
</script>

<style scoped>
    .search {
        margin-left: auto;
        margin-right: auto;
    }

    .searchbar {
        margin-left: auto;
        margin-right: auto;
        width: 500px;

        text-color : black;
    }

    .btn {
        background-color: lightgray;
    }
</style>