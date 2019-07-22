<template>
  <div>
    <ol>
      <li v-for="(item, index) in itemList" :key="index">
        <el-checkbox v-model="item.status" style="float:left"></el-checkbox>
        <span ref="content" v-if="!item.status" :contenteditable="isContenteditable" @dblclick="changeStatus"
             @keydown.enter.prevent="handleChange($event,index)">{{item.text}}
        </span>
        <span v-else contenteditable="isContenteditable" style="color: #999999" @dblclick="changeStatus" @keydown.enter.prevent="handleChange($event,index)">
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
      handleChange(event, index) {
        this.isContenteditable = false;
        this.itemList[index].text = event.target.innerText;
        // this.$emit('updateText', index, event.target.innerText);
      },
      changeStatus() {
        this.isContenteditable = true;
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
