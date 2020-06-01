<template>
  <div class="WriteNote">
    <h3 :book="defaultBook" class="bookTitle" style="margin: auto; text-align: center">{{ book }}</h3>
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
<!--          <p style="white-space: pre-line">{{ message }}</p>-->
        </div>
      </div>
      <div class="inputRows">
        <p style="vertical-align: top; margin-top: 0">Note</p>
        <textarea class="content" v-model="content" style="height: 300px"></textarea>
      </div>
    </div>
    <div style="width: 500px; margin: 10px auto; text-align: right; " >
      <button v-on:click="submit_note" style="border-radius: 20px; outline: none">CLICK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriteNote",
  props: {
    book: {
      type: String,
      default: "You need to find a book First!"
    }
  },
  computed:{
    defaultBook () {
      if(this.book === '') return this.book.default;
      return this.book;
    }
  },
  data() {
    return {
      title: "",
      isWholeBook: false,
      content: "",
      range1: "",
      range2: ""
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
