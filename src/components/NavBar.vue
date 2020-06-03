<template>
    <div class = "wrap">
        <router-link to="Home"><img id="banner" src="../assets/logo.png"/></router-link>
        <!-- <ul v-if="isSignIn" class="main-menu"> -->
        <ul class="main-menu" id="booknote" @mouseleave="bookNoteIsOpen = false" v-if="isSignIn">
            <li><a @mouseover="bookNoteIsOpen = true">BookNotes</a>
                <ul id="booknote-submenu" v-if="bookNoteIsOpen">
                    <li><router-link to="BookNoteBoard"><a>Read Notes</a></router-link></li>
                    <li><router-link to="WriteNote"><a>Write Note</a></router-link></li>
                </ul>
            </li>
        </ul>
        <ul class="main-menu" id="quiz" @mouseleave="quizIsOpen = false" v-if="isSignIn">
            <li><a @mouseover="quizIsOpen = true">Quiz</a>
                <ul id="quiz-submenu" v-if="quizIsOpen">
                    <li><router-link to="SolveQuiz"><a>Solve Quiz</a></router-link></li>
                    <li><router-link to="MakeQuiz"><a>Make Quiz</a></router-link></li>
                </ul>
            </li>
        </ul>
        <!-- <ul v-if="isSignIn" class="my-page"> -->
        <div class = "certification">
            <ul class="my-page" @mouseleave="myPageIsOpen = false" v-if="isSignIn">
                <!-- <li><a>{{user.name}}</a> -->
                <li><a @click="myPageIsOpen = !myPageIsOpen">coolofficials</a>
                    <ul class="my-page-contents" id="mypage-submenu" v-if="myPageIsOpen">
                        <li><router-link to="MyPage"><a>My Page</a></router-link></li>
                        <li><router-link to="MyBookNote"><a>My Notes</a></router-link></li>
                        <li><router-link to="MyQuiz"><a>My Quiz</a></router-link></li>
                    </ul>
                </li>
            </ul>
            <router-link to="SignIn"><button id="sign-in-button" v-if="isSignIn==false">Sign In</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            isSignIn:true,
            bookNoteIsOpen:false,
            quizIsOpen:false,
            myPageIsOpen:false
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
        width: auto;
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

    .main-menu, #booknote-submenu, #quiz-submenu, .my-page, .my-page-contents {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: pointer;
    }

    #booknote {
        position: absolute;
        display: inline-block;
        top: 27px;
        right: 230px;
        width: 160px;
    }

    #quiz {
        position: absolute;
        display: inline-block;
        top: 27px;
        right: 70px;
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

    #booknote-submenu, #quiz-submenu {
        position: absolute;
        display: block;
    }

    #booknote-submenu > li, #quiz-submenu > li, #mypage-submenu > li {
        padding: 15px 0px 5px 0px;
        font-size: 20px;
        text-align: left;
    }

    .certification {
        position: relative;
    }

    .my-page > li {
        background-color: #4285f4;
        letter-spacing: 1px;
        color: #fff;
        position: absolute;
        font-size: 25px;
        padding: 8px 15px 10px 15px;
        top: 27px;
        left: 95%;
        border-radius: 20px;
        width: 160px;
    }

    #mypage-submenu > li > a {
        color: #fff;
    }

    #mypage-submenu {
        position: absoulte;
    }

    #sign-in-button {
        background-color: #4285f4;
        color: #fff;
        border-radius: 10px;
        border-width: 0px;
        padding: 8px 15px 10px 15px;
        font-size: 24px;
        position: absolute;
        left: 100%;
        top: 27px;
    }
</style>
