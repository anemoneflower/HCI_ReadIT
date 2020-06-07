<template>
  <div class="board">
    <h1>Booknotes</h1>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card
  }
}
</script>

<style scoped>

  .board {
    position: relative;
  }

  h1 {
    position: absolute;
    left: 200px;
    width: auto;
  }
</style>