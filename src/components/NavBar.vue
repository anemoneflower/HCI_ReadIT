<template>
  <div
    class="wrap"
    :style="[
      readNoteIsOpen || writeNoteIsOpen
        ? { height: '180px', transition: 'all 0.1s ease' }
        : { height: '100px', transition: 'all 0.3s ease' }
    ]"
  >
    <img id="banner" src="../assets/logo.png" @click="goHome" />
    <ul
      class="main-menu"
      id="booknote-read"
      @mouseleave="readNoteIsOpen = false"
      @click="goReadNote"
      v-if="isBookSelected()"
    >
      <li>
        <a @mouseover="readNoteIsOpen = true">Read Notes</a>
        <img
          v-if="readNoteIsOpen"
          class="thumbnail"
          :src="getSelectedBook()"
          style="position: relative;"
        />
        <!-- <Book v-if="readNoteIsOpen" :book="getSelectedBook" /> -->
      </li>
    </ul>
    <ul
      class="main-menu"
      id="booknote-write"
      @mouseleave="writeNoteIsOpen = false"
      @click="goWriteNote"
      v-if="isSignIn && isBookSelected()"
    >
      <li>
        <a @mouseover="writeNoteIsOpen = true">Write Notes</a>
        <img
          v-if="writeNoteIsOpen"
          class="thumbnail"
          :src="getSelectedBook()"
          style="position: relative;"
        />
      </li>
    </ul>
    <div class="certification">
      <button
        id="my-page-button"
        v-if="isSignIn"
        title="go to mypage"
        @click="goMyPage"
      >
        My Notes
      </button>
      <router-link to="/sign-in"
        ><button id="sign-in-button" @click="goSignIn" v-if="isSignIn == false">
          Sign In
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
// import {userList} from "../main";
import { bookList, current, isSignIn, selectedBook, userKey } from "../main";

export default {
  data: function() {
    return {
      isSelected: true,
      isSignIn: isSignIn[0],
      readNoteIsOpen: false,
      writeNoteIsOpen: false,
      quizIsOpen: false,
      selected: selectedBook.length
    };
  },
  methods: {
    isBookSelected() {
      var curPath = this.$router.history.current["path"];
      var trim = curPath.split("/");
      console.log(`select check: ${trim[trim.length - 1]}`);
      return trim[trim.length - 1].length > 10;
    },
    goHome() {
      var curPath = this.$router.history.current["path"];
      console.log(`curpath: ${curPath}`);
      if (curPath === "/") return;
      var trim = curPath.split("/");
      console.log(`select check - banner: ${trim[trim.length - 1]}`);
      if (trim[trim.length - 1].length > 10)
        this.$router.push("/selected-book/" + trim[trim.length - 1]);
      else this.$router.push("/");
    },
    goMyPage() {
      var curPath = this.$router.history.current["path"];
      var trim = curPath.split("/");
      if (trim[trim.length - 1].length > 10)
        this.$router.push("/my-page/" + trim[trim.length - 1]);
      else this.$router.push("/my-page/none");
    },
    goSignIn() {
      var currentUrl = this.$router.history.current["path"];
      current.push(currentUrl);
    },
    goReadNote() {
      if (selectedBook.length == 0) {
        alert("Please search & select book!");
      } else {
        var curPath = this.$router.history.current["path"];
        var trim = curPath.split("/");
        var bookKey = trim[trim.length - 1];
        this.$router.push("/book-note-board/" + bookKey);
      }
    },
    goWriteNote() {
      if (selectedBook.length == 0) {
        alert("Please search & select book!");
      } else {
        var curPath = this.$router.history.current["path"];
        var trim = curPath.split("/");
        var bookKey = trim[trim.length - 1];
        this.$router.push("/write-note/" + bookKey);
      }
    },
    getSelectedBook() {
      var curPath = this.$router.history.current["path"];
      var trim = curPath.split("/");
      console.log(`select check - get: ${trim[trim.length - 1]}`);
      for (var i = 0; i < bookList.length; i++) {
        var key = bookList[i].key;
        if (key === trim[trim.length - 1]) {
          console.log("found!!!!!" + bookList[i].title);
          return bookList[i].img;
        }
      }
    }
  },
  computed: {
    // select(){
    //     if(selectedBook.length!=0){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // },
    userSignIn() {
      console.log(this.selected);
      if (userKey.length == 0) {
        return;
      } else {
        return userKey[0].userId;
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.thumbnail {
  background: black;
  height: 70%;
  width: 60%;
  margin: auto;
  overflow: hidden;
  display: block;
}
.wrap {
  position: relative;
  min-width: 1300px;
  height: 100px;
  text-align: center;
  white-space: nowrap;
  margin: 0px 200px 0px 100px;
  color: #3a3a3a;
}

#banner {
  position: absolute;
  top: 12px;
  left: 0%;
}

/* a:hover {
  text-decoration: underline;
} */

a:visited {
  text-decoration: none;
  color: #3a3a3a;
}

a:link {
  text-decoration: none;
  color: #3a3a3a;
}

.main-menu,
#booknote-submenu,
#quiz-submenu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  cursor: pointer;
}

#booknote-read {
  position: absolute;
  display: inline-block;
  top: 27px;
  right: 100px;
  width: 160px;
}

#booknote-write {
  position: absolute;
  display: inline-block;
  top: 27px;
  right: 260px;
  width: 160px;
}

.main-menu > li {
  position: relative;
  float: left;
  padding: 8px 15px 10px 15px;
}

.main-menu > li > a {
  font-size: 25px;
}

#booknote-submenu {
  position: absolute;
  display: block;
}

#booknote-submenu > li {
  padding: 15px 0px 5px 0px;
  font-size: 20px;
  text-align: left;
}

.certification {
  position: relative;
}

#my-page-button {
  background-color: #f37022;
  letter-spacing: 1px;
  color: #fff;
  position: absolute;
  font-size: 25px;
  padding: 8px 15px 10px 15px;
  top: 27px;
  left: 95%;
  border-radius: 20px;
  border-width: 0px;
  width: 180px;
  outline: none;
  cursor: pointer;
}

#sign-in-button {
  background-color: #f37022;
  color: #fff;
  border-radius: 10px;
  border-width: 0px;
  padding: 8px 15px 10px 15px;
  font-size: 25px;
  position: absolute;
  left: 100%;
  top: 27px;
  cursor: pointer;
  outline: none;
}
</style>
