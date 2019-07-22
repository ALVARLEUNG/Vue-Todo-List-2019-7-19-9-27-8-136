<template>
  <div>
    <ol>
      <li v-for="(item, index) in itemList" :key="index">
        <el-checkbox v-model="item.status"></el-checkbox>
        <span v-if="!item.status" contenteditable="true" @keydown.enter="handleChange">{{item.text}}</span>
        <span v-else contenteditable="true"><del>{{item.text}}</del></span>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: "CheckBox",
    data() {
      return {
        itemList: []
      };
    },
    props: {
      allItems: {
        type: Array,
        default: () => {
        }
      }
    },
    methods: {
      initItemList(status) {
        switch (status) {
          case 'All' :
            // this.status = 'All';
            this.itemList = this.allItems;
            break;
          case 'Active':
            this.itemList = this.allItems.filter(item => item.status === false);
            break;
          case 'Complete':
            this.itemList = this.allItems.filter(item => item.status === true);
            break;
        }
      },
      handleChange() {
        console.log(1111);
      }
    },
    mounted() {
      this.itemList = this.allItems;
    }
  }
</script>

<style scoped>
  ol {
    padding-left: 20px;
  }

  ol li {
    padding: 5px;
    color: #000;
  }

  ol li span {
    word-break: break-all;
    width: 70%;
  }

  ol li:nth-child(even) {
    background: #f4ecec;
  }
</style>
