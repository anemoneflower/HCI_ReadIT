<template>
  <div class="make-quiz-question-comp">
    <div class="gridBox">
      <div class="questionBox">
        <div style="display: inline-block">Q{{ num }}:</div>
        <div style="display: inline-block">
          <input id="questionInput" style="padding: auto" v-model="question" />
        </div>
        <div calss="checkType">
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
          <p>Check Answer:</p>
          <label for="o">O</label>
          <input type="checkbox" id="o" v-model="O" />
          <label for="x">X</label>
          <input type="checkbox" id="x" v-model="X" />
        </div>
        <div class="answer-MC" v-if="isMC">
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
        <p>Write description about answer here:</p>
        <textarea
          class="content"
          v-model="description"
          style="height: 35px; width: 500px"
        ></textarea>
      </div>
    </div>
    <div>
      <button id="next-question-btn" v-on:click="next_question">
        Next Question
      </button>
    </div>
    <div>
      <button id="submit-quiz-btn" v-on:click="submit_quiz">
        Submit
      </button>
    </div>
    <!-- submit-quiz-btn 부분은 잘못누르는거 방지 위해서 위해서 오른쪽 위(?)  이런데 존재하는게 더 좋을것 같아요-->
  </div>
</template>

<script>
// import { db } from "../main";
export default {
  name: "MakeQuizQuestionComp.vue",
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
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
      description: ""
    };
  },
  methods: {
    next_question: function() {
      console.log(this.num);
      //  make question object
    },
    submit_quiz: function() {
      //  upload to db
    }
  }
};
</script>

<style scoped>
.gridBox {
  margin: auto;
  display: grid;
  grid-template-columns: 300px auto;
}
</style>
