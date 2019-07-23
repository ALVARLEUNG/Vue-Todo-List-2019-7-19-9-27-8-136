<template>
  <div>
    <input v-model="inputText" class="input-text" placeholder="请输入内容" @keydown.enter="handleClickAdd"></input>
    <button id ="button" @click="handleClickAdd">Add</button>
  </div>
</template>

<script>
  export default {
    name: "InputBar",
    data() {
      return {
        inputText: '',
      };
    },
    methods: {
      handleClickAdd () {
        this.$store.commit('addListItem', this.inputText);
        this.inputText = '';
      }
    }
  }
</script>

<style scoped>
  #button {
    display: inline-block;
    background-color: #fc999b;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    margin-top: 2px;
    padding: 5px 15px;
  }

  #button:hover {
    cursor: pointer;
    opacity: .8;
  }

</style>
