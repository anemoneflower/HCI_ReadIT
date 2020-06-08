<template>
  <div class="NoteBox" style="width: 800px; margin: auto;">
    <div style="margin-top: 100px">
      <!--style="display: grid; grid-template-columns: 15px auto">-->
      <div>
        <div class="title">
          <a class="title-text"> {{ bookNote.title }}</a>
        </div>
        <div
          style="alignment: left; font-size: 15px; margin-top: 5px; margin-bottom: 10px"
        >
          <a style="color: #3a3a3a; " :range_text="rangeText">{{
            range_text
          }}</a>
        </div>
        <div style="font-size: 15px">
          <a style="color: #959595">by.</a
          ><a class="author">{{ bookNote.userId }}</a>
          <a style="color: #959595"> at.</a
          ><a class="date">{{ bookNote.date }}</a>
        </div>
      </div>
      <div class="outer">
        <div class="inner"></div>
      </div>
    </div>
    <div class="contents">
      <p class="content" v-html="bookNote.content"></p>
    </div>
    <div style="margin-bottom: 50px; margin-top: 30px">
      <img class="icon" id="eye" src="../assets/view.png" />
      <a class="view">{{ bookNote.view }}</a>
      <a style="margin-left: 15px">
        <button
          style="outline: none; background: none; border: none; padding: 0"
          @click="likeUp"
        >
          <img class="icon" id="thumbs" src="../assets/thumbs.png" />
          <a class="up">{{ bookNote.up }}</a>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "NoteBox",
  props: {
    // date: String,
    // essayTitle: String,
    // author: String,
    // view: Number,
    // contents: String,
    // like: Number,
    // range: String
    bookNote: Object,
    noteKey: String
  },
  computed: {
    rangeText() {
      if (this.bookNote.isWholeBook === true) {
        console.log("Whole Book");
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.range_text = "Whole Book";
        return this.range_text;
      } else {
        console.log("p." + this.bookNote.range1 + " ~ " + this.bookNote.range2);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.range_text =
          "p." + this.bookNote.range1 + " ~ " + this.bookNote.range2;
        return this.range_text;
      }
    }
  },
  methods: {
    likeUp() {
      if (this.liked === false) {
        db.ref("bookNote")
          .child(this.noteKey)
          .update({
            up: this.bookNote.up + 1
          });
        this.bookNote.up = this.bookNote.up + 1;
        this.liked = true;
      } else {
        db.ref("bookNote")
          .child(this.noteKey)
          .update({
            up: this.bookNote.up - 1
          });
        this.bookNote.up = this.bookNote.up - 1;
        this.liked = false;
      }
    }
  },
  data() {
    return {
      range_text: "",
      liked: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: 50px auto auto auto;
  //text-align: left;
  font-size: 25px;
  color: #3a3a3a;
  text-decoration: none;
}
.title-text {
  font-size: 25px;
  font-weight: bold;
  color: #3a3a3a;
}

.author {
  /*margin-left: 5px;*/
  margin-right: 5px;
  font-size: 15px;
  text-decoration: none;
  color: #3a3a3a;
}

.date {
  /*margin-left: 5px;*/
  font-size: 15px;
  text-decoration: none;
  color: #3a3a3a;
}

.outer {
  width: 800px;
  height: 3px;
  margin: 20px auto;
  //alignment: left;
  overflow: hidden;
  position: relative;
  //background-color: #f37022;
  outline: none;
}

.post-info > a {
  font-size: 15px;
  color: #cbcbcb;
}
.inner {
  position: absolute;
  width: 40%;
  height: 100%;
  left: 30%;
  background: #f37022;
  box-shadow: 0px 0px 10px 20px #f37022;
}

.content {
  text-align: justify;
  font-size: 15px;
  color: #3a3a3a;
  line-height: 20px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.up {
  font-size: 15px;
  color: #3a3a3a;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  margin: auto;
  font-size: 15px;
  color: #3a3a3a;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#eye {
  position: relative;
  top:3.5px;
  right: 3px;
  height: 16.8px;
  margin: auto;
}

#thumbs {
  position: relative;
  top: 2.3px;
  height: 15px;
  right: 3px;
}

.contents {
  min-height: 400px;
  padding: 20px;
  border-radius: 20px;
  //border: #c4c4c4 solid 5px;
  //background: #c4c4c4;

  text-align: left;
}

#thumbs:hover {
  -webkit-transform: translate(3px, -4px);
  -ms-transform: translate(3px, -4px);
  transform: translate(3px, -4px);
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
