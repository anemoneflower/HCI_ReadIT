<template>
    <div class = "search">
        <h3>Search</h3>
        <input placeholder="Search" type="text" v-model.trim='book'>
        <router-link to='/book-list'><button v-on:click="searchBook">search</button></router-link>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'search',
        data(){
            return{
                book:""
            }
        },
        methods:{
            searchBook(){
                // console.log(this.book);
                var book = this.book;
                firebase.database().ref('/Book').once('value',function(snapshot){

                    var myValue = snapshot.val();
                    var keyList = Object.keys(myValue);
                    for(var i=0;i<keyList.length;i++) {
                        var myKey = keyList[i];
                        var title = (myValue[myKey].title).toUpperCase();
                        // console.log(title);
                        var checkValue = title.indexOf(book.toUpperCase());
                        // console.log(book);
                        if (checkValue != -1) console.log(myValue[myKey]);

                    }
                });
            }
        }
    }
</script>
<style>
    .search{
        margin-top:30px;
    }
    input{
        margin:10px 0;
        width:250px;
        height: 10px;
        padding:15px;
    }
    button{
        margin-top:20px;
        margin-left:5px;
        width:100px;
        height: 40px;
        cursor:pointer;
    }
</style>
