<template>
  <div class="main">
    <h1>Welcome</h1>
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
        let realName = this.$store.state.person.name;
        if (this.name !== ''&& realName===this.name) {
          this.$router.push({path: 'home'});
        }
      }
    }
  }
</script>

<style scoped>
  .main{
    text-align: center;
    margin-top: 30px;
  }
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
