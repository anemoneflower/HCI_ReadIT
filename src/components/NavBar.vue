<template>
    <div class = "wrap" :style="[(quizIsOpen || bookNoteIsOpen) ? {'height': '180px', 'transition': 'all 0.1s ease'} : {'height': '100px', 'transition': 'all 0.3s ease'}]">
        <router-link to="/"><img id="banner" src="../assets/logo.png"/></router-link>
        <!-- <ul v-if="isSignIn" class="main-menu"> -->
        <ul class="main-menu" id="booknote" @mouseleave="bookNoteIsOpen = false" v-if="isSignIn && selected">
            <li><a @mouseover="bookNoteIsOpen = true">BookNotes</a>
                <ul id="booknote-submenu" v-if="bookNoteIsOpen">
                    <li><router-link to="/book-note-board"><a @click="bookNoteIsOpen = false">Read Notes</a></router-link></li>
                    <li><router-link to="/write-note"><a @click="bookNoteIsOpen = false">Write Note</a></router-link></li>
                </ul>
            </li>
        </ul>
        <!-- <ul class="main-menu" id="quiz" @mouseleave="quizIsOpen = false" v-if="isSignIn && isSelected">
            <li><a @mouseover="quizIsOpen = true">Quiz</a>
                <ul id="quiz-submenu" v-if="quizIsOpen">
                    <li><router-link to="/solve-quiz"><a @click="quizIsOpen = false">Solve Quiz</a></router-link></li>
                    <li><router-link to="/make-quiz"><a @click="quizIsOpen = false">Make Quiz</a></router-link></li>
                </ul>
            </li>
        </ul> -->
        <div class = "certification">
            <router-link to="/my-page"><button id="my-page-button" v-if="isSignIn" title="go to mypage">{{userSignIn}}</button></router-link>
            <router-link to="/sign-in"><button id="sign-in-button" @click="goSignIn" v-if="isSignIn==false">Sign In</button></router-link>
        </div>
    </div>
</template>

<script>
// import firebase from "firebase";
// import {userList} from "../main";

import {current, isSignIn, selectedBook, userKey} from "../main";

export default {
    data: function() {
        return {
            isSelected: true,
            isSignIn:isSignIn[0],
            bookNoteIsOpen:false,
            quizIsOpen:false
        }
    },
    methods: {
        goSignIn() {
            var currentUrl = this.$router.history.current["path"];
            current.push(currentUrl);
            // console.log(currentUrl);
            //     firebase.database().ref('/user/').once('value',function(snapshot){
            //         var myValue = snapshot.val();
            //         var keyList = Object.keys(myValue);
            //
            //         for(var i=0;i<keyList.length;i++) {
            //             var myKey = keyList[i];
            //             userList.push(myValue[myKey]);
            //         }
            //     });
            //     console.log(userList);
            // }
        }
    },
    computed:{
        selected(){
            if(selectedBook.length!=0){
                return true
            }
            else{
                return false
            }
        },
        userSignIn(){
            if(userKey.length==0){
                return;
            }
            else{
                return userKey[0].userId;
            }
        }
    }
}
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .wrap {
        position: relative;
        min-width: 1300px;
        height: 100px;
        text-align: center;
        white-space: nowrap;
        margin: 0px 200px 0px 100px;
        color: #3a3a3a;
    }

    #banner {
        position: absolute;
        top: 12px;
        left: 0%;
    }

    a:hover{
        text-decoration: underline;
    }

    a:visited{
        text-decoration: none;
        color: #3a3a3a;
    }

    a:link{
        text-decoration: none;
        color: #3a3a3a;
    }

    .main-menu, #booknote-submenu, #quiz-submenu {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: pointer;
    }

    #booknote {
        position: absolute;
        display: inline-block;
        top: 27px;
        right: 130px;
        width: 160px;
    }

    .main-menu > li {
        position: relative;
        float: left;
        padding: 8px 15px 10px 15px;
    }

    .main-menu > li > a {
        font-size: 25px;
    }

    #booknote-submenu{
        position: absolute;
        display: block;
    }

    #booknote-submenu > li {
        padding: 15px 0px 5px 0px;
        font-size: 20px;
        text-align: left;
    }

    .certification {
        position: relative;
    }

    #my-page-button {
        background-color: #F37022;
        letter-spacing: 1px;
        color: #fff;
        position: absolute;
        font-size: 25px;
        padding: 8px 15px 10px 15px;
        top: 27px;
        left: 95%;
        border-radius: 20px;
        border-width: 0px;
        width: 180px;
        outline: none;
        cursor: pointer;
    }

    #sign-in-button {
        background-color: #F37022;
        color: #fff;
        border-radius: 10px;
        border-width: 0px;
        padding: 8px 15px 10px 15px;
        font-size: 25px;
        position: absolute;
        left: 100%;
        top: 27px;
        cursor: pointer;
        outline: none;
    }
</style>
