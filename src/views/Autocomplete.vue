<template>
    <div class="search">
<!--        <img alt="glass" class="search-icon" src="../assets/magnifying-glass.png" />-->
<!--        <router-link to='/book-list'><button class="searchButton" v-on:click="searchBook">search</button></router-link>-->

        <md-autocomplete class="searchbar" v-model="selectedBook" :md-options="bookT" md-layout="box" md-dense :md-open-on-focus="false">
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
  // import firebase from 'firebase'
  import {bookList, bookTitle, selectedList} from "../main";
  export default {
    name: "Autocomplete",
    data: () =>({
      selectedBook:'',
      bookT:bookTitle
    }),
    methods:{
          searchBook(){
            // selectedList = [];
            selectedList.splice(0, selectedList.length);
            var book = this.selectedBook;
            if(book=='')
            {
              book.focus();
            }
            var checkList = JSON.parse(JSON.stringify(bookList));
            var idx=0;
            for(var i=0;i<bookList.length;i++) {
              var title = (bookList[i].title).toUpperCase();
              var checkValue = title.indexOf(book.toUpperCase());
              if(checkValue!=-1) {
                selectedList.push(bookList[i]);
                checkList.splice(i+idx,1);
                idx--;
              }
            }
            console.log(checkList);
            if(checkList.length!=0) {
              for (var j = 0; j < checkList.length; j++) {
                if (selectedList[0].series == checkList[j].series) {
                  selectedList.push(checkList[j]);
                }
              }
            }
            console.log(selectedList);
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