<template>
    <div class="container">
        <div class="signin">
            <p>Sign in your account</p>
        </div>
        <div class="id">
            <p class="textId">ID</p>
            <input id="inputId" type="text" placeholder="ID">
        </div>
        <div class="password">
            <p class="textPw">Password</p>
            <input id="inputPw" type="password" placeholder="password">
        </div>
        <div class="submit">
            <button id="btn">SIGN IN</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn"
    }
</script>

<style scoped>
    .container{
        border: 1px solid;
        border-radius: 25px;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top:100px;
        height: 550px;

    }
    .signin{
        padding-top: 10px;
        font-size: 40px;
        font-weight: bold;
    }
    .id{
       margin-top: 20px;
    }
    .password{
        margin-top: 40px;
    }
    .textId{
        position: absolute;
        font-size: 20px;
        text-align: left;
        margin-left: 45px;
        font-weight: bold;
        top: 335px;
        color:gray;
    }
    .textPw{
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 45px;
        top: 475px;
        color:gray;
    }
    #inputId{
        margin-top: 35px;
        width: 400px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid;
        font-size: 20px;
        padding-left: 15px;
    }
    #inputPw{
        width: 400px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid;
        font-size: 20px;
        padding-left: 15px;
        margin-top: 35px;
    }
    .submit{
        margin-top: 40px;
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
    }
</style>