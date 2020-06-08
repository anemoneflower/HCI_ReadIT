<template>
    <div>
        <div class="result">My Book Notes : {{bookTitle}}</div>
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
    import {bookNoteList, myBookNotes, selectedBook} from "../main";


    export default {
        components: {
            Card
        },
        data(){
            return{
                bookNotes : bookNoteList,
                bookTitle : selectedBook[0].title
            }
        },
        created() {

            bookNoteList.splice(0, bookNoteList.length);
            // var index = 1;
            for(var i=myBookNotes.length;i>0;i--){
                if(myBookNotes[i-1].bookKey==selectedBook[0].key){
                    // var bookNote = myBookNotes[i-1];
                    // bookNote.index =  index;
                    // index++;
                    bookNoteList.push(myBookNotes[i-1]);
                }
            }

            for(var j=0;j<bookNoteList.length;j++){
                var myBookNote = bookNoteList[j];
                console.log(bookNoteList.length);
                myBookNote.index = bookNoteList.length-j;
            }
        }
    }
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
</style>