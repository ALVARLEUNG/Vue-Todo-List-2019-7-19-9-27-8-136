<template>
  <div>
    <div>
      <InputBar></InputBar>
      <Check-box :filterItemsByStatus="filterItemsByStatus"></Check-box>
    </div>
  </div>
</template>

<script>
  import CheckBox from "./CheckBox";
  import InputBar from "./InputBar"
  import Footer from "./Footer";

  export default {
    name: "Body",
    props: {
      filterItemsByStatus: Function
    },
    components: {
      Footer,
      CheckBox,
      InputBar
    }
    // methods: {
    //   filterItems () {
    //     this.filterItems= this.filterItemsByStatus;
    //   }
    // }
  }
</script>

<style scoped>

</style>
