<template>
  <div class="WriteNote">
    <h3 class="bookTitle">{{ book }}</h3>
    <div class="inputLayout">
      <div class="inputRows">
        <p>Title</p>
        <input id="titleInput" style="padding: auto" v-model="title" />
      </div>
      <div class="inputRows">
        <p>Range</p>
        <div id="rangeGroup">
          <input class="rangeInput" v-model="range1" type="number" :disabled="isWholeBook"/>
          ~
          <input class="rangeInput" v-model="range2" type="number" :disabled="isWholeBook" style="margin-right: 10px"/>
          <label for="wholeRange">Whole Book</label>
          <input type="checkbox" id="wholeRange" v-model="isWholeBook"/>
<!--          @change="check($event)"/>-->
        </div>
      </div>
      <div class="inputRows">
        <p>Note</p>
        <input class="content" v-model="content" />
      </div>
    </div>
    <button v-on:click="submit_note">CLICK</button>
  </div>
</template>

<script>
export default {
  name: "WriteNote",
  props: {
    book: String
  },
  data() {
    return {
      title: "",
      isWholeBook: false,
      content: ""
    };
  },
  methods: {
    // check: function(e) {
    //   console.log(this.isWholeBook, e);
    //   // if (this.isWholeBook===true){
    //   //   $(".rangeInput").disable();
    //   // }
    // },
    submit_note: function() {
      //TODO: need to link with firebase here
      console.log(this.title);
      console.log(this.isWholeBook);
      console.log(this.content);
    }
  }
};
</script>

<style scoped>
p {
  margin: auto;
}
.bookTitle {
  width: 500px;
  margin: auto;
  text-align: left;
}

.rangeInput{
  width: 30px;
}

.inputRows {
  width: 500px;
  margin: 10px auto;
  display: grid;
  text-align: left;
  grid-template-columns: 150px auto;
  /*grid-template-rows: repeat(4, 1fr);*/
}
</style>
