<template>
  <div>
    <ol>
      <li v-for="(item, index) in allItems" :key="index">{{item.text}}</li>
    </ol>
    <!--  <li v-for="(item,index) in itemList" :key="index">-->
    <!--    <span>{{index+1}}</span>-->
    <!--    <el-checkbox :value="item.status" @change="check(index)"><span v-if="item.status === ''">{{item.text}}</span>-->
    <!--      <del v-else>{{item.text}}</del>-->
    <!--    </el-checkbox>-->
    <!--  </li>-->
  </div>
</template>

<script>
  export default {
    name: "CheckBox",
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
