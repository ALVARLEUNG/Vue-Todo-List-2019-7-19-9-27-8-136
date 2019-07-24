<template>
  <div style="text-align: center">
    <h1 style="color: white">Welcome</h1>
    <a-input v-model="name" placeholder="please sign you name"></a-input>
    <br/>
    <a-button @click="gotoTodoList">Begin to use</a-button>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      gotoTodoList() {
        if (this.name !== '' ) {
          this.$store.commit('setName', this.name)
          this.$router.push({ path: 'todoList'});
        }
      }
    }
  }
</script>

<style scoped>
  >>> .ant-input {
    width: 300px;
  }

  >>> .ant-btn {
    background-color: #fc999b;
    color: white;
    margin-top: 20px;
  }

  >>> .ant-btn：hover {
    border-color: white;
  }
</style>
