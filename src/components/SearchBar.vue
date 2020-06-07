<template>
    <div class="autocomplete">
        <ul class="popover">            
            <li><input autocomplete="off" id="input" type="text"
                   v-model="title"
                   placeholder="Search your book here."
                   v-focus
                   @focus="visibleOptions=true"
                   @focusout="visibleOptions=false"
                   />
            <a href="#"><img class="glass" src="../assets/magnifying-glass.png" title="this is search bar"></a>
            </li>
            <li v-if="visibleOptions">
            <div class="options">
                <ul>
                    <li :key=match v-for="(match,index) in matches"
                        @click="bookSelected(index)"
                    v-text=match></li>
                </ul>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
  import {bookList, bookTitle, searchedList} from "../main";

  export default {
    name: "Autocomplete",
    data()
    {
      return{
        selectedBook:null,
        title:"",
        books: bookTitle,
        visibleOptions: true
      };
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods:{
      bookSelected(index){
        document.getElementById("input").value=this.matches[index]
        this.selectedBook=this.matches[index]
        this.searchBook();
      },
      searchBook(){
        searchedList.splice(0, searchedList.length);
        var book = document.getElementById("input").value;
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
            searchedList.push(bookList[i]);
            checkList.splice(i+idx,1);
            idx--;
          }
        }
        console.log(checkList);
        if(checkList.length!=0) {
          for (var j = 0; j < checkList.length; j++) {
            if (searchedList[0].series == checkList[j].series) {
              searchedList.push(checkList[j]);
            }
          }
        }
        this.$router.push('/book-list');
      },
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
        z-index: 2;
        margin: 0 auto;
        padding: 0;
        width: 575px;
        border:1px solid #dcdcdc;
        position:relative;
        left:0;
        right :0;
        border-radius:23px;
        list-style-type: none;
    }
    .popover:hover {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
    }

    .popover:focus-within {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
      outline: none;
    }

    .glass {
      height: 20px;
      position: relative;
      top: 5px;
      left: 10px;
    }

    #input
    {
        width: 500px;
        outline: none;
        border: none;
        height: 45px;
        font-size:16px;
    }

    .options{
        width: 520px;
        padding: none;
        position: relative;
        left: 27.3px;
        margin: none;
        max-height: 150px;
        overflow-y:auto;
        overflow-x:hidden;
    }

    .options::-webkit-scrollbar{
        width: 10px;
        height: 150px;
    }

    .options::-webkit-scrollbar-track{
      background-color: #dcdcdc;
    }

    .options::-webkit-scrollbar-thumb{
      background-color: #c4c4c4;
    }

    .options ul{
        list-style-type:none;
        text-align:left;
        padding-left:0;
    }
    .options ul li{
        border-bottom: none;
        padding:10px 0px 10px 0px;
        cursor:pointer;
        background-color: white;
    }
    .options ul li:hover {
        background-color: #dcdcdc;
    }

</style>