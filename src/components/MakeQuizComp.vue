<template>
  <div class="MakeQuizComp">
    <div class="quizInputRows">
      <p>Chapter</p>
      <div style="display: grid; grid-template-columns: 50px auto">
        <input
          style="height: 20px; width: 30px; margin: auto 0 auto"
          v-model="rangeNum"
        />
        <div style="vertical-align: center; margin: auto 0 auto">
          <label for="wholeRange">Whole Book</label>
          <input type="checkbox" id="wholeRange" v-model="isWholeBook" />
        </div>
      </div>
    </div>
    <div class="quizInputRows">
      <p>Description</p>
      <textarea
        class="content"
        v-model="description"
        style="height: 35px; width: 500px"
      ></textarea>
    </div>
    <div class="quizInputRows">
      <p>Time Limit</p>
      <div style="margin: 10px 0 auto">
        <input
          style="height: 20px; width: 30px; margin: auto 0 auto"
          v-model="timeLimit"
        />
        min
      </div>
    </div>
    <!--    Make Quiz content comp.-->
  </div>
</template>

<script>
export default {
  name: "MakeQuizComp"
};
</script>

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
/*.rangeInput {*/
/*  width: 10px;*/
/*  height: 5px;*/
/*  margin: auto;*/
/*}*/
</style>
