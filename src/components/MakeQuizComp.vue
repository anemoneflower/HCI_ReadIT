<template>
  <div class="MakeQuizComp">
    <div>
      <!-- Button: submit -->
      <button id="submit-quiz-btn" v-on:click="submit_quiz">
        Submit
      </button>
    </div>
    <div class="quizInputRows">
      <!-- Chapter(Range) input -->
      <p>Chapter</p>
      <div style="display: grid; grid-template-columns: 50px auto">
        <input
          style="height: 20px; width: 30px; margin: auto 0 auto"
          v-model="rangeNum"
          :disabled="isWholeBook"
        />
        <div style="vertical-align: center; margin: auto 0 auto">
          <label for="wholeRange">Whole Book</label>
          <input type="checkbox" id="wholeRange" v-model="isWholeBook" />
        </div>
      </div>
    </div>
    <div class="quizInputRows">
      <!-- Quiz description input -->
      <p>Description</p>
      <textarea
        class="content"
        v-model="description"
        style="height: 35px; width: 500px"
      ></textarea>
    </div>
    <div class="quizInputRows">
      <!-- Time limit input -->
      <p>Time Limit</p>
      <div style="margin: 10px 0 auto">
        <input
          style="height: 20px; width: 30px; margin: auto 0 auto"
          v-model="timeLimit"
        />
        min
      </div>
    </div>
    <div class="gridBox">
      <!-- Question input Section-->
      <div class="questionBox">
        <!-- Quiz num, question, question type, ox/mc answer input -->
        <div style="display: inline-block">Q{{ num }}:</div>
        <div style="display: inline-block">
          <input id="questionInput" style="padding: auto" v-model="question" />
        </div>
        <div class="checkType">
          <!-- question type check input -->
          <div style="display: inline-block">Question Type:</div>
          <label for="ox">OX?</label>
          <input type="checkbox" id="ox" v-model="isOX" :disabled="isMC" />
          <label for="multiple-choice">Multiple Choice?</label>
          <input
            type="checkbox"
            id="multiple-choice"
            v-model="isMC"
            :disabled="isOX"
          />
        </div>
        <div class="answer-OX" v-if="isOX">
          <!-- OX type answer input -->
          <p>Check Answer:</p>
          <label for="o">O</label>
          <input type="checkbox" id="o" v-model="O" :disabled="X" />
          <label for="x">X</label>
          <input type="checkbox" id="x" v-model="X" :disabled="O" />
        </div>
        <div class="answer-MC" v-if="isMC">
          <!-- MC type answer input -->
          <p>Write answer choices and check the answer.</p>
          <input type="checkbox" id="a1-ans" v-model="a1Ans" /><label
            for="a1-ans"
            ><input v-model="a1" id="a1"
          /></label>
          <br />
          <input type="checkbox" id="a2-ans" v-model="a2Ans" /><label
            for="a2-ans"
            ><input v-model="a2" id="a2"
          /></label>
          <br />
          <input type="checkbox" id="a3-ans" v-model="a3Ans" /><label
            for="a3-ans"
            ><input v-model="a3" id="a3"
          /></label>
          <br />
          <input type="checkbox" id="a4-ans" v-model="a4Ans" /><label
            for="a4-ans"
            ><input v-model="a4" id="a4"
          /></label>
        </div>
      </div>
      <div class="descriptionBox">
        <!-- Question description input -->
        <p>Write description about answer here:</p>
        <textarea
          class="content"
          v-model="answer_description"
          style="height: 35px; width: 500px"
        ></textarea>
      </div>
    </div>
    <div>
      <button id="prev-question-btn" v-on:click="prev_question">
        Previous Question
      </button>
      <!-- Button: make next question -->
      <button id="next-question-btn" v-on:click="next_question">
        Next Question
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
// TODO: import Book;
export default {
  name: "MakeQuizComp",
  props: {},
  data() {
    return {
      questions: [],
      num: 1,
      currNum: 1,
      rangeNum: "",
      isWholeBook: false,
      description: "",
      timeLimit: "",
      question: "",
      isOX: false,
      isMC: false,
      O: false,
      X: false,
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a1Ans: false,
      a2Ans: false,
      a3Ans: false,
      a4Ans: false,
      answer_description: ""
    };
  },
  methods: {
    error_message: function(field, type) {
      if (type === 1)
        alert('You need to enter "' + field + '" to make next question');
      else if (type === 2)
        alert('You need to enter "' + field + '" to submit question');
    },
    next_question: function() {
      console.log(this.num);

      // check if all components are in
      if (this.question === "") {
        this.error_message("question", 1);
        return false;
      }
      if (this.isOX === true) {
        if (this.O === false && this.X === false) {
          this.error_message("O/X answer", 1);
          return false;
        }
      } else if (this.isMC === true) {
        if (
          (this.a1 === "" ||
            this.a2 === "" ||
            this.a3 === "" ||
            this.a4 === "") === true
        ) {
          this.error_message("Multiple choice", 1);
          return false;
        }
        if ((this.a1Ans || this.a2Ans || this.a3Ans || this.a4Ans) === false) {
          this.error_message("Multiple choice answer", 1);
          return false;
        }
      } else {
        this.error_message("question type", 1);
        return false;
      }
      if (this.answer_description === "") {
        this.error_message("question description", 1);
        return false;
      }

      // save data to local array
      let new_question;
      if (this.isOX === true) {
        let ox;
        if (this.O) ox = "O";
        else ox = "X";
        new_question = {
          problemNum: this.num,
          problemType: "OX",
          problemText: this.question,
          problemAnswers: ox,
          answerDescription: this.answer_description
        };
      } else {
        new_question = {
          problemNum: this.num,
          problemType: "MC",
          problemText: this.question,
          problemAnswers: [
            [this.a1, this.a1Ans],
            [this.a2, this.a2Ans],
            [this.a3, this.a3Ans],
            [this.a4, this.a4Ans]
          ],
          answerDescription: this.answer_description
        };
      }
      this.questions.push(new_question);

      //  reset input field and update question number
      this.question = "";
      this.isOX = false;
      this.isMC = false;
      this.O = false;
      this.X = false;
      this.a1 = "";
      this.a2 = "";
      this.a3 = "";
      this.a4 = "";
      this.a1Ans = false;
      this.a2Ans = false;
      this.a3Ans = false;
      this.a4Ans = false;
      this.answer_description = "";

      this.num += 1;
      this.currNum += 1;
    },
    // TODO: Need to fix this function
    prev_question: function() {
      this.currNum -= 1;
      if (this.questions.length === 0) return;
      let prev_question = this.questions[this.currNum - 1];
      this.question = prev_question.question;
      if (prev_question.problemType === "OX") {
        this.isOX = true;
        this.isMC = false;
        if (prev_question.problemAnswers === "O") {
          this.O = true;
          this.X = false;
        } else {
          this.O = false;
          this.X = true;
        }
        this.a1 = "";
        this.a2 = "";
        this.a3 = "";
        this.a4 = "";
        this.a1Ans = false;
        this.a2Ans = false;
        this.a3Ans = false;
        this.a4Ans = false;
      } else {
        this.isOX = false;
        this.isMC = true;
        this.O = false;
        this.X = false;
        this.a1 = prev_question.problemAnswers[0][0];
        this.a2 = prev_question.problemAnswers[1][0];
        this.a3 = prev_question.problemAnswers[2][0];
        this.a4 = prev_question.problemAnswers[3][0];
        this.a1Ans = prev_question.problemAnswers[0][1];
        this.a2Ans = prev_question.problemAnswers[1][1];
        this.a3Ans = prev_question.problemAnswers[2][1];
        this.a4Ans = prev_question.problemAnswers[3][1];
      }
      this.answer_description = prev_question.answerDescription;
    },
    submit_quiz: function() {
      //console.log(isNaN(this.rangeNum));
      // Check all data is inserted
      if (!this.isWholeBook && (this.rangeNum === "" || isNaN(this.rangeNum))) {
        this.error_message("chapter range in number or check at WholeBook", 2);
        return;
      }
      if (this.description === "") {
        this.error_message("quiz description", 2);
        return;
      }
      if (this.timeLimit === "" || isNaN(this.timeLimit)) {
        this.error_message("time lime in number", 2);
        return;
      }
      // check if current question is submitted
      console.log(this.questions);
      console.log(this.questions.length);
      if (this.questions.length === 0) {
        let check = this.next_question();
        if (!check) return;
      } else {
        let prev_question = this.questions[this.num - 2];
        console.log(prev_question);
        if (prev_question.question !== this.question) this.next_question();
      }

      //  upload problem set to db
      let problemKey = db.ref("problemSet").push(this.questions).key;
      db.ref("problemSet")
        .child(problemKey)
        .update({
          _key: problemKey
        });
      // upload quiz to db
      if (this.isWholeBook) this.rangeNum = "";
      let quizKey = db.ref("quiz").push({
        //TODO: insert BOOK Key, author Key
        date: Date.now(),
        problemSet: problemKey,
        chapter: this.rangeNum,
        isWholeBook: this.isWholeBook,
        solvers: [],
        up: 0
      }).key;
      db.ref("quiz")
        .child(quizKey)
        .update({
          _key: quizKey
        });

      // TODO: routing
    }
  }
};
</script>

<!--Quiz-->
<!-- -ID-->
<!-- -Book (제목말고 DB 키ri)-->
<!-- -Creator (key)-->
<!-- -Date-->
<!-- -ProblemSet(key)-->
<!-- -Chapter-->
<!-- -Solvers-->
<!-- -Up-->

<!--ProblemSet-->
<!-- -ID-->
<!-- -ProblemNum-->
<!-- -ProblemType-->
<!-- -ProblemText-->
<!-- -ProblemAnswers-->

<style scoped>
.quizInputRows {
  width: 700px;
  height: 40px;
  margin: 10px auto;
  display: grid;
  text-align: left;
  grid-template-columns: 100px auto;
  /*grid-template-rows: repeat(4, 1fr);*/
}
.gridBox {
  width: 700px;
  height: 300px;
  margin: auto;
  display: grid;
  grid-template-columns: 300px auto;
}
/*.rangeInput {*/
/*  width: 10px;*/
/*  height: 5px;*/
/*  margin: auto;*/
/*}*/
</style>
