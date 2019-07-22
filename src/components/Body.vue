<template>
  <div>
    <div>
      <InputBar @addItem="addItem"></InputBar>
      <Check-box :allItems="allItems" ref="checkBox"></Check-box>
    </div>
  </div>
</template>

<script>
  import CheckBox from "./CheckBox";
  import InputBar from "./InputBar"
  import Footer from "./Footer";

  export default {
    name: "Body",
    data() {
      return {
        allItems: []
      };
    },
    components: {
      Footer,
      CheckBox,
      InputBar
    },
    methods: {
      addItem(inputText) {
        let item = {text: inputText, status: false};
        this.allItems.push(item);
      },
      filterByStatus (status) {
        this.$refs.checkBox.initItemList(status);
      }
    }
  }
</script>

<style scoped>

</style>
