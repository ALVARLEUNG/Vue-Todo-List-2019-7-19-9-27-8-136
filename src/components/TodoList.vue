<template>
  <div class="container">
    <div>
      <h2>Jquery To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
    </div>
    <div>
      <el-input v-model="inputText" class="input-text" placeholder="请输入内容"></el-input>
      <el-button id="button" @click="addItem" @keyup.down.enter="addItem">Add</el-button>
    </div>
    <br>
    <li v-for="(item,index) in itemList" :key="index">
      <span>{{index+1}}</span><el-checkbox :value="item.status" @change="check(index)"><span v-if="item.status === ''">{{item.text}}</span>
        <del v-else>{{item.text}}</del>
      </el-checkbox>
    </li>
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
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        allItems: [],
        completeItems: [],
        activeItems: [],
        itemList: [],
        inputText: '',
        status: 'All',
        checkStatus:false
      };
    },
    methods: {
      addItem() {
        if (this.inputText !== '') {
          let item = {text: this.inputText, status: ''};
          this.allItems.push(item);
          this.inputText = '';
          this.showItem(this.status);
        }
      },
      check(index) {
        this.itemList[index].status === '' ?
          this.itemList[index].status = 'complete' : this.itemList[index].status = '';
        // this.itemList = this.allItems;
      },
      showItem (status) {
        switch (status) {
          case 'All' :
            this.status = 'All';
            this.itemList = this.allItems;
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

<style src="../css/todoListStyle.css">

</style>
