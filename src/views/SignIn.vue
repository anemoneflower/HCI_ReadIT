<template>
    <div class="container">
        <router-link to="/"><img id="banner" src="../assets/logo.png"/></router-link>
        <div class="id">
            <input id="inputId" v-model="userId" type="text" placeholder="ID">
        </div>
        <div class="password">
            <input id="inputPw" v-model="userPw" type="password" placeholder="password">
        </div>
        <div class="submit">
            <button id="btn" @click="signIn">Sign In</button>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";
    import {isSignIn} from "../main";
    // import {userKey} from "../main";
    // import {isSignIn,userList} from "../main";
    // import { userList} from "../main";


    export default {
        name: "SignIn",
        data(){
            return{
                users: [],
                userId:"",
                userPw:"",
                // checkSignIn:isSignIn
            };
        },
        created() {
            console.log("A");
            console.log(this.users);
            var users = new Array();
            firebase.database().ref('/user/').once('value',function(snapshot){
                var myValue = snapshot.val();
                var keyList = Object.keys(myValue);
                console.log(users);
                for(var i=0;i<keyList.length;i++) {
                    var myKey = keyList[i];
                    var userObj = myValue[myKey];
                    userObj.key = myKey;
                    console.log(myKey);
                    users.push(userObj);
                    console.log(users);
                }
            });
            this.users = users;
            console.log(this.users);
        },
        methods: {
            signIn(){
                var uid = this.userId;
                var upw = this.userPw;

                // console.log(pw);
                // console.log(isSignIn);
                // console.log(userList);
                for(var i=0;(this.users).length;i++){
                    var userObj = this.users[i];
                    if(userObj.idUser==uid&&userObj.pwUser==upw){
                        isSignIn.pop();
                        isSignIn.push(true);
                        console.log(isSignIn);
                    }
                }
                console.log(isSignIn);
                // firebase.database().ref('/user').once('value',function(snapshot){
                //     var myValue = snapshot.val();
                //     var keyList = Object.keys(myValue);
                //     // console.log(id);
                //     for(var i=0;i<keyList.length;i++) {
                //         var myKey = keyList[i];
                //         if(myValue[myKey].id==id
                //             && myValue[myKey].pw==pw){
                //             isSignIn.pop();
                //             isSignIn.push(true);
                //             console.log(isSignIn);
                //         }
                //     }
                // });

            }
        }
    }
</script>

<style scoped>
    .container{
        border: 0px solid;
        border-radius: 30px 30px 30px 30px;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top:100px;
        height: 430px;
        box-shadow: 0px 20px 50px #D9DBDF;

    }
    #banner {
        margin-top: 40px;
    }
    .id{
       margin-top: 20px;
    }
    .password{
        margin-top: 10px;
    }
    
    #inputId{
        outline: none;
        margin-top: 10px;
        width: 400px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid #cbcbcb;
        font-size: 20px;
        padding-left: 15px;
    }

    #inputId:focus{
        box-shadow: 0px 0px 3px 2px #f37022;
    }

    #inputPw{
        width: 400px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid #cbcbcb;
        font-size: 20px;
        padding-left: 15px;
        margin-top: 20px;
        outline: none;
    }

    #inputPw:focus {
        box-shadow: 0px 0px 3px 2px #f37022;
    }

    .submit{
        margin-top: 20px;
    }
    #btn{
        height: 60px;
        width: 420px;
        border-radius: 10px;
        background-color: #F37022;
        color: white;
        border: 0px;
        font-size: 23px;
        margin-top: 10px;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }
</style>