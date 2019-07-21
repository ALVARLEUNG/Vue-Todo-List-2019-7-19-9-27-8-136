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
      <el-button id="button" @click="addItem">Add</el-button>
    </div>
    <br>
    <ol>
      <li v-for="item in itemList"><input type="checkbox" :checked="item.status === 'complete'">{{item.text}}</li>
    </ol>
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
        let item ={text:this.inputText, status: 'active'};
        this.itemList.push(item);
      }
    }
  }
</script>

<style src="../css/todoListStyle.css">

</style>
