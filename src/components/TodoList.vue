<template>
  <div class="container">
    <Header></Header>
    <Body></Body>
    <Footer v-on:showItemList="showItemList"></Footer>
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
        inputText: '',
        status: 'All',
        checkStatus: false
      };
    },
    methods: {
      // addItem() {
      //   if (this.inputText !== '') {
      //     let item = {text: this.inputText, status: ''};
      //     this.allItems.push(item);
      //     this.inputText = '';
      //     this.$refs.footer.showItem(this.status);
      //   }
      // },
      check(index) {
        this.itemList[index].status === '' ?
          this.itemList[index].status = 'complete' : this.itemList[index].status = '';
        // this.itemList = this.allItems;
      }
    },
    showItemList(status, itemList) {
      this.status = status;
      this.itemList = itemList;
    }
  }
</script>

<style scoped>

</style>
