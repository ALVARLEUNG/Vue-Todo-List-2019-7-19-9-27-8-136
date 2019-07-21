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
      <el-button id="button" @click="addItem" @keyup.enter="addItem">Add</el-button>
    </div>
    <br>
    <div v-for="(item,index) in itemList">
      {{index+1}}
      <el-checkbox :checked="item.status === 'complete'" @change="check(index)"><span v-if="item.status !== 'complete'">{{item.text}}</span>
        <del v-else>{{item.text}}</del>
      </el-checkbox>
    </div>
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
        status: 'All'
      };
    },
    methods: {
      addItem() {
        if (this.inputText !== '') {
          let item = {text: this.inputText, status: 'active'};
          this.allItems.push(item);
          this.inputText = '';
          this.showItem(this.status);
        }
      },
      check(index) {
        this.allItems[index].status === 'active' ?
          this.allItems[index].status = 'complete' : this.allItems[index].status = 'active';
        this.itemList = this.allItems;
      },
      showItem (status) {
        switch (status) {
          case 'All' :
            this.status = 'All';
            this.itemList = this.allItems;
            break;
          case 'Active':
            this.status = 'Active';
            this.itemList = this.allItems.filter(item => item.status === 'active');
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
