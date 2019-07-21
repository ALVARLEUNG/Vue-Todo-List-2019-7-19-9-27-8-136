<template>
  <div class="container">
    <div>
      <h2>Jquery To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
    </div>
    <div>
      <el-input v-model="inputText" class="input-text" placeholder="请输入内容" ></el-input>
      <el-button id="button" @click="addItem" @keyup.enter="addItem">Add</el-button>
    </div>
    <br>
    <div  v-for="(item,index) in itemList">
      {{index+1}}<el-checkbox :checked="item.status === 'complete'" @change="check(index)"><span v-if="item.status !== 'complete'">{{item.text}}</span><del v-else>{{item.text}}</del></el-checkbox>
    </div>
    <div>
      <ul id="filters">
        <li>
          <a href="#" data-filter="all">ALL</a>
        </li>
        <li>
          <a href="#" data-filter="active">Active</a>
        </li>
        <li>
          <a href="#" data-filter="complete">Complete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
    return {
      itemList: [],
      inputText: '',
    };
  },
    methods: {
      addItem () {
        if (this.inputText !== '') {
          let item ={text:this.inputText, status: 'active'};
          this.itemList.push(item);
          this.inputText = '';
        }
      },
      check (index) {
        this.itemList[index].status === 'active'?
          this.itemList[index].status = 'complete':  this.itemList[index].status = 'active'


      }
    }
  }
</script>

<style src="../css/todoListStyle.css">

</style>
