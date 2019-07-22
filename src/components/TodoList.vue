<template>
  <div id="app">
  <div class="container">
    <Header></Header>
    <Body></Body>
<!--    :allItems="allItems" @addItem="addItem"-->
    <Footer></Footer>
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
        allItems: [],
        completeItems: [],
        activeItems: [],
        itemList: [],
        // inputText: '',
        status: 'All',
        checkStatus: false
      };
    }
    // methods: {
    //   addItem(inputTest) {
    //       let item = {text: inputTest, status: ''};
    //       this.allItems.push(item);
    //
    //   }
    //   check(index) {
    //     this.itemList[index].status === '' ?
    //       this.itemList[index].status = 'complete' : this.itemList[index].status = '';
    //     // this.itemList = this.allItems;
    //   }
    // },
    // generateItemList(status, itemList) {
    //   this.status = status;
    //   this.itemList = itemList;
    // },
    // test(num) {
    //   console.log(num);
    // }
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
