<template>
  <div>
  <div>
  <el-input v-model="inputText" class="input-text" placeholder="请输入内容" v-on:keydown="addItem"></el-input>
  <el-button id="button" @click="addItem">Add</el-button>
  </div>
  <br>
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
        name: "Body"
    }
</script>

<style scoped>

</style>
