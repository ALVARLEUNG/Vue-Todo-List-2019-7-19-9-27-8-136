<template>
  <div>
    <ul id="filters">
      <li>
        <a href="#" @click="showItem('All')" data-filter="all">ALL</a>
      </li>
      <li>
        <a href="#" @click="showItem('Active')" data-filter="active">Active</a>
      </li>
      <li>
        <a href="#" @click="showItem('Complete')" data-filter="complete">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    props:['allItems'],
    data() {
      return{
        itemList:[]
      };
    },
    methods: {
      showItem(status) {
        switch (status) {
          case 'All' :
            // this.status = 'All';
            this.itemList = this.allItems;
            this.$emit('generatedItemList', status, this.itemList);
            break;
          case 'Active':
            this.status = 'Active';
            this.itemList = this.allItems.filter(item => item.status === '');
            break;
          case 'Complete':
            this.status = 'Complete';
            this.itemList = this.allItems.filter(item => item.status === 'complete');
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
