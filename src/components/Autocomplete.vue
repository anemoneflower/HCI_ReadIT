<template>
    <div class="autocomplete">
        <div class="popover">
            <input id="input" type="text"
                   v-model="title"
                   placeholder="Search"
                   >
            <div class="options">
                <ul>
                    <li :key=match v-for="(match,index) in matches"
                        @click="bookSelected(index)"
                    v-text=match></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import {bookList, bookTitle, selectedList} from "../main";

  export default {
    name: "Autocomplete",
    data()
    {
      return{
        selectedBook:null,
        title:"",
        selected:0,
        books: bookTitle,
      };
    },
    methods:{
      bookSelected(index){
        document.getElementById("input").value=this.matches[index]
        this.selectedBook=this.matches[index]
        // this.selected=index;
        console.log(this.matches[index]);
        this.searchBook();
      },
      searchBook(){
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
        this.$router.push('/book-list');

      }
      // keyup(){
      //   if(this.selected==0){
      //     return;
      //   }
      //   this.selected-=1;
      // },
      // keydown(){
      //   if(this.selected<this.matches.length-1){
      //     this.selected+=1;
      //   }
      // }
    },
    computed:{
      matches(){
        if(this.title==''){
          return [];
        }
        console.log(bookTitle);
        return this.books.filter(book=>book.toLowerCase().includes(this.title.toLowerCase()))
      }
    }
  }
</script>

<style scoped>
    .autocomplete{
        width:100%;
        position:relative;
        margin-left: auto;
        margin-right: auto;
    }
    .popover{
        height: 60px;
        border:2px solid lightgray;
        /*position:absolute;*/
        top:40px;
        left:0;
        right :0;
        background-color: white;
        border-radius:3px;
        text-align: center;
    }
    .popover input
    {
        width: 95%;
        margin-top:7px;
        height: 40px;
        font-size:15px;
    }
    .options{
        max-height: 150px;
        overflow-y:scroll;
        margin-top:5px;
    }
    .options ul{
        list-style-type:none;
        text-align:left;
        padding-left:0;
    }
    .options ul li{
        border-botton:1px solid lightgray;
        padding:10px;
        cursor:pointer;
        background-color: lightgray;
    }
    .options ul li:hover {
        background-color: gray;
        color:white;
        font-weight:600;
    }

</style>