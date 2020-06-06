<template>
  <div class="NoteBox" style="width: 800px; margin: auto;">
    <div>
      <!--style="display: grid; grid-template-columns: 15px auto">-->
      <div>
          <div class="title">
            <a class="title-text"> {{ essayTitle }}</a>
          </div>
        <div style="alignment: left; font-size: 15px; margin-top: 5px; margin-bottom: 10px">
          <a style="color: #3a3a3a; "
            >- page 1~255 {{range}}-</a
          >
        </div>
        <div style="font-size: 15px">
          <a class="date">{{ date }}</a> |
          <a class="author">{{ author }}</a>
        </div>
      </div>
      <div class="outer">
        <div class="inner"></div>
      </div>
    </div>
    <div class="contents">
      <p class="content">{{ contents }}</p>
    </div>
    <img class="icon" id="eye" src="../assets/view.png" />
    <a class="view">1312</a>
    <a style="margin-left: 15px">
      <button style="outline: none; background: none; border: none">
        <img class="icon" id="thumbs" src="../assets/thumbs.png" />
      </button>
      <a class="up">87</a>
    </a>
  </div>
</template>

<script>
export default {
  name: "NoteBox",
  props: {
    date: String,
    essayTitle: String,
    author: String,
    view: Number,
    contents: String,
    like: Number,
    range: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: auto;
  //text-align: left;
  font-size: 25px;
  color: #3a3a3a;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.title-text {
  font-size: 25px;
  font-weight: bold;
  color: #3a3a3a;
}

.author {
  margin-left: 5px;
  font-size: 15px;
  text-decoration: none;
  color: #3a3a3a;
}

.date {
  margin-left: 5px;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

#thumbs {
  position: relative;
  top: 2.3px;
  height: 15px;
  right: 3px;
}

.view {
  margin: auto;
}

#eye {
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
  min-height: 200px;
  padding: 20px;
  border-radius: 20px;
  //border: #c4c4c4 solid 5px;
  //background: #c4c4c4;

  text-align: left;
}

#thumbs:hover{
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
