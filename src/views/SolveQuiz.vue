<template>
    <div class="SolveQuiz">
        <div class="QuizTitle">
            <h1>Quiz Chapter:2</h1>
        </div>
        <div class="submit">
            <button id="submitbtn"> Submit </button>
        </div>
        <div class="body">
            <div class="checkList">
                <table id="check">
                    <tbody>
                    <tr>
                        <td id=1 @click="move(1)"><CheckBox num="1" isQuiz="true" /></td>
                        <td id=2 @click="move(2)"><CheckBox num="2" isQuiz="true" /></td>
                        <td id=3 @click="move(3)"><CheckBox num="3" isQuiz="true" /></td>
                        <td id=4 @click="move(4)"><CheckBox num="4" isQuiz="false" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class = "problem">
                <SolveQuizComp
                        :Question = Question
                        :num = num
                        :select1 = select1
                        :select2 = select2
                        :select3 = select3
                        :select4 = select4
                        v-model="checkedAnswer"
                />
                <div class="button">
                    <button id="prevBtn" @click="prev">Prev</button>
                    <button id="nextBtn" @click="next">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SolveQuizComp from "../components/SolveQuizComp";
    import CheckBox from "../components/CheckBox";
    // import firebase from "firebase";
    //
    // var problemkey = "-M8yi9kkxeB-5JSa3Fg4";
    var idx=0;
    var problemSet = new Array();
    problemSet.push({answer: "1",
        question: "Why did Mr.Bennet marry his wife?",
        select1: "She was very pretty.",
        select2: "She had a large fortune.",
        select3: "She was intelligent and wity.",
        select4: "Their family wished them to marry."});
    problemSet.push({
        answer: "4",
        question: "Question2",
        select1: "select1.",
        select2: "select2",
        select3: "select3",
        select4: "select4"
    });
    problemSet.push({
        answer: "3",
        question: "Question3",
        select1: "select11.",
        select2: "select22",
        select3: "select33",
        select4: "select44"
    });
    // let idx=0;
    // firebase.database().ref('/ProblemSet/'+problemkey).once('value',function(snapshot){
    //     var myValue = snapshot.val();
    //     var keyList = Object.keys(myValue);
    //     for(var i=0;i<keyList.length;i++) {
    //         var myKey = keyList[i];
    //         problemSet.push(myValue[myKey]);
    //     }
    //     console.log(problemSet);
    // });
    export default {

        name: "SolveQuiz",
        components: {CheckBox,SolveQuizComp},
        props:{
            checkedAnswer: Array
        },
        data() {
            return{
                Question: "Q"+(idx+1)+"   : "+problemSet[idx].question,
                num: idx,
                select1: problemSet[idx].select1,
                select2: problemSet[idx].select2,
                select3: problemSet[idx].select3,
                select4: problemSet[idx].select4,
                checked:{}
            }
        },

        methods: {
            prev() {
                if(idx!=0) {
                    idx--;
                    this.Question = "Q"+(idx+1)+"   : "+problemSet[idx].question;
                    this.select1 = problemSet[idx].select1;
                    this.select2 = problemSet[idx].select2;
                    this.select3 = problemSet[idx].select3;
                    this.select4 = problemSet[idx].select4;
                }
                else{
                    alert("This is first question!");
                }

            },
            next(){
                if(idx!=problemSet.length-1) {
                    idx++;
                    this.Question = "Q"+(idx+1)+"   : "+problemSet[idx].question;
                    this.select1 = problemSet[idx].select1;
                    this.select2 = problemSet[idx].select2;
                    this.select3 = problemSet[idx].select3;
                    this.select4 = problemSet[idx].select4;
                }
                else{
                    alert("This is last question!");
                }
            },
            move(id){

                idx = id-1;
                console.log(id);
                this.Question = "Q"+(idx+1)+"   : "+problemSet[idx].question;
                this.select1 = problemSet[idx].select1;
                this.select2 = problemSet[idx].select2;
                this.select3 = problemSet[idx].select3;
                this.select4 = problemSet[idx].select4;
            }
        }
    }
</script>

<style scoped>
    .QuizTitle{
        /*text-align: left;*/
        margin-left: auto;
        margin-right : 750px;
        padding-top: 15px;
        /*padding-bottom: 20px;*/
    }
    .checkList{
        width:200px;
        height: 200px;
        margin-left: auto;
        margin-right: 20px;
    }
    .problem{
        width: 700px;
        margin-left: 50px;
        margin-right: auto;
    }
    .body{
        width: 100%;
        height: 700px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: auto auto;
    }
    .button{
        text-align: right;
        margin-top: 15px;
        margin-bottom: 20px;
        margin-right: 5px;
    }
    #prevBtn{
        width: 60px;
        height: 25px;
        border-radius: 20px;
        margin-right: 10px;
        background-color: lightgray;
        border: 0px;
    }
    #nextBtn{
        width: 60px;
        height: 25px;
        border-radius: 20px;
        background-color: lightgray;
        border: 0px;
    }
    .submit{
        /*text-align: right;*/
        /*margin-top: 15px;*/
        margin-left: 860px;
        margin-right : auto;
        padding-bottom: 20px;
    }
    #submitbtn{
        width: 100px;
        height: 40px;
        border-radius: 20px;
        border: 0px;
        background-color: #F37022;
        color: white;
        font-size: large;
    }
    .checkList{
        width:200px;
        border:1px solid #3a3a3a;
        border-radius: 25px;
        grid-template-columns: 100px auto;
    }
    #check{
        width: 95%;
        margin-top: 9px;
        margin-left: auto;
        margin-right: auto;
    }
</style>