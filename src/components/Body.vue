<template>
  <div>
    <div>
      <InputBar @addItem="addItem"></InputBar>
      <check-box :allItems="allItems"></check-box>
    </div>
  </div>
</template>

<script>
  import CheckBox from "./CheckBox";
  import InputBar from "./InputBar"

  export default {
    name: "Body",
    data() {
      return {
        allItems: []
      };
    },
    components: {
      CheckBox,
      InputBar
    },
    methods: {
      addItem(inputText) {
        let item = {text: inputText, status: ''};
        this.allItems.push(item);
      }
    }
  }
</script>

<style scoped>

</style>
