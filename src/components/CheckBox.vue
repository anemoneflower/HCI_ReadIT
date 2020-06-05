<template>
    <div class="checkbox">
        {{num}}
    </div>
</template>

<script>

    // console.log(this.isQuiz);
    export default {
        name: "CheckBox",
        props:{
            // isAnswered:Boolean,
            // isCorrect: Boolean,
            num : String,
            isQuiz: String
        }
    }
</script>

<style scoped>
    .checkbox{
        border-radius: 5px;
        border:1px solid;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        margin-left: 5px;
        text-align: center;
    }
</style>