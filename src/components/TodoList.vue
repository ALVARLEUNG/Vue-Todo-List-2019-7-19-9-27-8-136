<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <Body :filterItemsByStatus="filterItemsByStatus"></Body>
      <Footer @filterItems="filterItems"></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import Body from './Body.vue'
  import InputBar from './InputBar.vue'

  export default {
    name: "TodoList",
    components: {
      Header,
      Footer,
      Body,
      InputBar
    },
    data() {
      return {
        filterItemsByStatus: Function
      };
    },
    methods: {
      filterItems (filterFunction) {
        this.filterItemsByStatus = filterFunction;
      }
    }
  }
</script>

<style scoped>

  .container {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
    border-radius: 5px;
  }

</style>
