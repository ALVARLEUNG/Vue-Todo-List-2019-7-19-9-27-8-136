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
        allItems: [],
        status: 'All'
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
        this.status = status;
        this.$refs.checkBox.initItemList(status);
      }
    },
    watch: {
      allItems: function () {
        this.$refs.checkBox.initItemList(this.status);
      }
    }
  }
</script>

<style scoped>

</style>
