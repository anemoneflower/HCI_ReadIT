<template>
    <div class="problemBox">
        <div class="question">
            <h2>{{Question}}</h2>
        </div>
        <div class="problem">
            <input type="radio" id="problem1"/>
            <label class="label" for="problem1">{{select1}}</label>
        </div>
        <div class="problem">
            <input type="radio" id="problem2"/>
            <label class="label" for="problem2">{{select2}}</label>
        </div>
        <div class="problem">
            <input type="radio" id="problem3"/>
            <label class="label" for="problem3">{{select3}}</label>
        </div>
        <div class="problem">
            <input type="radio" id="problem4"/>
            <label class="label" for="problem4">{{select4}}</label>
        </div>
<!--        <div class="button">-->
<!--            <button id="prevBtn">Prev</button>-->
<!--            <button id="nextBtn">Next</button>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "SolveQuizComp",
        props: {
            Question: String,
            select1: String,
            select2: String,
            select3: String,
            select4: String,
        }
    }
</script>

<style scoped>
    .question{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .problemBox{
        border:1px solid #3a3a3a;
        width: 100%;
        border-radius: 25px;
        padding-bottom: 40px;
    }
    .problem{
        font-size:18px;
        text-align: left;
        margin-left: 50px;
        margin-top: 10px;
        /*margin-bottom: 50px;*/
        padding-bottom: 25px;
    }
    .button{
        text-align: right;
        margin-top: 50px;
        margin-bottom: 20px;
        margin-right: 25px;
    }
    #prevBtn{
        width: 60px;
        height: 25px;
        border-radius: 20px;
        margin-right: 10px;
        background-color: lightgray;
        border: solid 1px;
    }
    #nextBtn{
        width: 60px;
        height: 25px;
        border-radius: 20px;
        background-color: lightgray;
        border: solid 1px;
    }
    .label{
        margin-left: 10px;
    }
</style>