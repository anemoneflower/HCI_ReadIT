<template>
  <div class="WriteNote" style="margin-top: 200px">
    <a class="bookTitle" style="margin: auto; text-align: center;">
      {{ bookTitle }}
    </a>
    <div class="outer">
      <div class="inner"></div>
    </div>
    <div class="inputLayout">
      <div class="inputRows">
        <p class="tags">Title</p>
        <input
          class="title inputBorder"
          style="padding: auto"
          v-model="title"
        />
      </div>
      <div class="inputRows">
        <p class="tags">Range</p>
        <div id="rangeGroup">
          <input
            class="rangeInput inputBorder"
            v-model="range1"
            type="number"
            :disabled="isWholeBook"
          />
          ~
          <input
            class="rangeInput inputBorder"
            v-model="range2"
            type="number"
            :disabled="isWholeBook"
            style="margin-right: 10px"
          />
          <label for="wholeRange">Whole Book</label>
          <input
            type="checkbox"
            id="wholeRange"
            class="checkBox"
            style="border: #f37022 solid 2px"
            v-model="isWholeBook"
          />
          <!--          @change="check($event)"/>-->
          <!--          <p style="white-space: pre-line">{{ message }}</p>-->
        </div>
      </div>
      <div class="inputRows">
        <p class="tags" style="vertical-align: top; margin-top: 0">Note</p>
        <div>
          <textarea
            class="content inputBorder"
            v-model="content"
            style="height: 300px; width: 800px; margin: 0; padding: 0"
          ></textarea>
          <div
            style="margin: 10px auto; display: grid; grid-template-columns: auto 80px"
          >
            <div>
              <label for="share">Do you want to share with others?</label>
              <input type="checkbox" id="share" v-model="isShare" />
            </div>
            <div style="text-align: right; ">
              <button v-on:click="submit_note" class="submitBtn">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
import { db } from "../main";
import { userKey, selectedBook } from "../main";

export default {
  name: "WriteNote",
  data() {
    return {
      userKey: userKey[0].key,
      userId: userKey[0].userId,
      bookKey: selectedBook[0].key,
      bookTitle: selectedBook[0].title,
      title: "",
      isWholeBook: false,
      content: "",
      range1: "",
      range2: "",
      isShare: false
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
      console.log(this.bookTitle);
      console.log(this.bookKey);
      console.log(this.userKey);
      console.log(this.isShare);
      var noteKey = db.ref("bookNote").push({
        title: this.title,
        date: Date.now(),
        isWholeBook: this.isWholeBook,
        range1: this.range1,
        range2: this.range2,
        content: this.content,
        share: this.isShare,

        bookKey: this.bookKey,
        bookTitle: this.bookTitle,
        userKey: this.userKey,
        userId: this.userId,

        view: 0,
        up: 0
      }).key;
      db.ref("bookNote")
        .child(noteKey)
        .update({
          _key: noteKey
        });
      // TODO: set routing
      this.$router.push({ path: `/book-note-board` });
    }
  }
};
</script>

<style scoped>
p {
  margin: auto;
}

input[type="text"],
textarea {
  border-style: inset;
  border-width: 2px;
}

.bookTitle {
  width: 800px;
  height: 30px;
  margin: auto;
  //text-align: left;
  //margin-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #3a3a3a;
}
.title {
  height: 20px;
}

.rangeInput {
  width: 30px;
  height: 20px;
  outline: none;
}

.tags {
  font-size: 15px;
  text-align: right;
  font-weight: bold;
}

.inputRows {
  width: 1000px;
  height: 20px;
  margin: 30px auto;
  display: grid;
  text-align: left;
  grid-template-columns: 100px 800px auto;
  /*grid-template-rows: repeat(4, 1fr);*/
}
.inner {
  position: absolute;
  width: 40%;
  height: 100%;
  left: 30%;
  background: #f37022;
  box-shadow: 0px 0px 10px 20px #f37022;
}
.outer {
  width: 800px;
  height: 3px;
  margin: 5px auto 60px;
  //alignment: left;
  overflow: hidden;
  position: relative;
  //background-color: #f37022;
  outline: none;
}
.inputBorder {
  border-radius: 3px;
  border-color: #cbcbcb;
  border-style: solid;
}
.submitBtn {
  outline: none;
  background-color: #f37022;
  color: #fff;
  border-radius: 10px;
  border-width: 0px;
  font-size: 15px;
  padding: 3px;
}
.submitBtn:hover {
  background-color: rgb(223, 100, 29);
}
</style>
