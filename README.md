# KAIST CS374: ReadIT!
Seoyun Son (sallylucky@kaist.ac.kr)   
Chaeeun Hwang (navy3690@kaist.ac.kr)   
Siwon Kim (coolofficials@gmail.com)   

## WebPage URL
https://hci-readit.web.app/

## Target User
This is service for Readers who want to recall contents of the book after paused their reading.

## Libraries and frameworks
### Vue.js
2.6.11

### Firebase
7.14.6

### Views & Components in ./src
__App.vue__: manage global components like NavBar and mini-SearchBar   
assets: png files for logo and icons   
components: Components that used for pages in View folder   
- __Book.vue__: Book compoent used in Booklist.vue   
- __Card.vue__: Book note list row components used in BookNoteBoard.vue and MyBookNote.vue  
- __NavBar.vue__: Component used in app.vue  
- __NoteBox.vue__: Conponent used in ReadNote.vue   
- __SearchBar.vue__: Component for search bar function. Used in Home.vue and App.vue   
_other files are unused in current deploy version_   

views: Components that used for pages   
- __BookNoteBoard.vue__: Book note list   
- __MyBookNote.vue__: My book note list   
- __Booklist.vue__: Book list page   
- __Home.vue__: Home page   
- __MyBooklist.vue__: Book list page for mypage   
- __ReadNote.vue__: Read note page for mypage   
- __SignIn.vue__: Sign in page   
- __WriteNote.vue__: Write note page   
_other files are unused in current deploy version_   

router/__index.js__: set routing

## Project setup
```
npm install

npm i -g @vue/cli
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
