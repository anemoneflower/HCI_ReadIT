<template>
  <div class="checkList">
    <table id="check">
      <tbody>
        <tr>
          <td><CheckBox num="1" /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
        </tr>
        <tr>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
        </tr>
        <tr>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CheckBox from "./CheckBox";
export default {
  name: "SolveQuizCheck",
  components: { CheckBox }
};
</script>

<style scoped>
.checkList {
  border: 1px solid #3a3a3a;
  border-radius: 25px;
  grid-template-columns: 100px auto;
}
#check {
  margin-top: 9px;
  margin-left: auto;
  margin-right: auto;
}
/*grid-template-columns: 100px auto;*/
</style>
