<template>
  <!--    <router-link :to="/read-note/${bookNote.key}">:to="{ name: 'user', params: { userId: 123 }}"-->
  <div class="card-post">
    <router-link
      :to="{
        name: 'ReadNote',
        params: { noteKey: bookNote._key, bookKey: bookKey }
      }"
    >
      <!-- need to get note-key(id) and route. -->
      <div class="square" @click="goBookNote">
        <div class="board-info">
          <a class="entry">#{{ bookNote.index }}</a>
          <a class="range" :range_text="rangeText">{{ range_text }}</a>
        </div>
        <div class="representative">
          <div class="title">{{ bookNote.title }}</div>
          <div class="post-info">
            <!-- local date format -->
            <!--                    <a class="date">4 JUN 2020</a><br>-->
            <a class="date">{{ bookNote.date }}</a
            ><br />
            <div class="status">
              <!-- view icon -->
              <img class="icon" id="eye" src="../assets/view.png" />
              <a class="view">{{ bookNote.view }}</a>
              <!-- up icon -->
              <img class="icon" id="thumbs" src="../assets/thumbs.png" />
              <a class="up">{{ bookNote.up }}</a>
            </div>
          </div>
        </div>
        <div class="content-box">
          <p class="content" v-html="bookNote.content"></p>
          <!-- change author name -->
          <a class="author">{{ bookNote.userId }}</a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { selectedBookNote } from "../main";

export default {
  props: {
    bookNote: {
      type: Object
    },
    bookKey: String
  },
  data() {
    return {
      range_text: ""
    };
  },
  methods: {
    goBookNote() {
      selectedBookNote.splice(0, selectedBookNote.length);
      console.log(selectedBookNote);
      selectedBookNote.push(this.bookNote);
      console.log(selectedBookNote);
    }
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
          this.bookNote.range1 + " ~ " + this.bookNote.range2 + "p";
        return this.range_text;
      }
    }
  }
};
</script>

<style scoped>
.card-post {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: auto;
}
.square {
  width: 800px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 20px 50px #d9dbdf;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.square:hover {
  -webkit-transform: translate(20px, -10px);
  -ms-transform: translate(10px, -10px);
  transform: translate(10px, -10px);
  -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}
a:visited {
  text-decoration: none;
  color: #3a3a3a;
}

a:link {
  text-decoration: none;
  color: #3a3a3a;
}
.board-info {
  margin: auto;
  padding-top: 20px;
  border-radius: 30px 30px 0px 0px;
  width: 740px;
  position: absolute;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  background-color: #f37022;
}

.board-info > a {
  font-size: 25px;
  color: #fff;
}

.entry {
  float: left;
}

.range {
  float: right;
}

.representative {
  margin: auto;
  width: 740px;
  margin-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  position: absolute;
}

.post-info {
  float: right;
  position: relative;
}

.status {
  float: right;
  position: relative;
}

.post-info > a {
  font-size: 15px;
  color: #cbcbcb;
}

#eye {
  position: relative;
  top: 3.5px;
  height: 16.8px;
  right: 10px;
}

#thumbs {
  position: relative;
  top: 2.3px;
  height: 15px;
  right: 3px;
}

.title {
  float: left;
  text-align: left;
  font-size: 25px;
  width: 500px;
  color: #3a3a3a;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.view {
  position: relative;
  right: 8px;
}
.content-box {
  width: 740px;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
  margin-top: 110px;
  position: absolute;
}

.content {
  text-align: justify;
  font-size: 15px;
  color: #cbcbcb;
  line-height: 20px;
  margin-bottom: 8px;
  max-height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.author {
  float: left;
  text-align: justify;
  font-size: 15px;
  text-decoration: none;
  color: #3a3a3a;
}

/* .read-more {
        float: right;
        background-color: #f37022;
        color: #fff;
        width: 130px;
        text-decoration: none;
        text-align: center;
        border-radius: 10px;
        border-width: 0px;
        font-size: 15px;
        padding: 10px 18px;
        cursor: pointer;
        outline: none;
        position: absolute;
    } */
</style>
