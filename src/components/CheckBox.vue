<template>
  <div>
    <ol>
      <li v-for="item in itemList" :key="item.id">
        <el-checkbox v-model="item.status" style="float:left"></el-checkbox>
        <span v-if="!item.status" :contenteditable="isContenteditable" @dblclick="changeStatus"
              @keydown.enter.prevent="handleChange($event,item)">{{item.text}}
        </span>
        <span v-else contenteditable="isContenteditable" style="color: #999999" @dblclick="changeStatus"
              @keydown.enter.prevent="handleChange($event,item)">
          <del>{{item.text}}</del>
        </span>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: "CheckBox",
    data() {
      return {
        itemList: [],
        isContenteditable: false,
        text: ''
      };
    },
    props: {
      filterItemsByStatus: Function
    },
    methods: {
      handleChange(event, item) {
        this.isContenteditable = false;
        item.text = event.target.innerText;
        this.$store.commit('updateItem', item)
      },
      changeStatus() {
        this.isContenteditable = true;
      }
    },
    mounted() {
      this.itemList = JSON.parse(JSON.stringify(this.$store.state.allItems));
    },
    computed: {
      getItemList() {
        return this.$store.state.allItems;
      }
    },
    watch: {
      filterItemsByStatus(newVal) {
        this.itemList = newVal(this.$store.state.allItems);
        console.log(this.itemList)
      },
      '$store.state.allItems'(newVal) {
        this.itemList = newVal;
        console.log(newVal)
      }
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
