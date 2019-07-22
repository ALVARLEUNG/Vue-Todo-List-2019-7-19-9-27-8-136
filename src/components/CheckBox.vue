<template>
  <div>
    <ol>
      <li v-for="(item, index) in allItems" :key="index">
        <el-checkbox v-model="item.status"></el-checkbox>
        <span v-if="!item.status">{{item.text}}</span>
              <del v-else>{{item.text}}</del>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "CheckBox",
    data() {
      return {
        isCheck: false
      };
    },
    props: {
      allItems: {
        type: Array,
        default: () => {
        }
      }
    }
  }
</script>

<style scoped>
   ol {
    padding-left: 20px;
  }

   ol li {
    padding: 5px;color:#000;
  }

  ol li span{
    word-break:break-all;
    width: 70%;
  }

  ol li:nth-child(even){
    background: #f4ecec;
  }
</style>
