<template>
  <a-layout>
    <a-layout-header class="header">
      <a-button @click="showModal">back</a-button>
      <span style="margin-left: 1400px;color: white">{{name}}</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu style="background-color: #999999; color: black" theme="dark" mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1" @click="enterTodoList">
            <a-icon type="user"/>
            <span>TodoList</span>
          </a-menu-item>
          <a-menu-item key="2" @click="enterInformation">
            <a-icon type="video-camera"/>
            <span>Personal information</span>
          </a-menu-item>
        </a-menu>
        <div><a-modal
          title="Back"
          :visible="visible"
          @ok="handleOk",
          @cancel="visible=false"
        >
          <span>Are you sure you want to return?</span>
        </a-modal></div>
      </a-layout-sider>
      <router-view style="margin-left: 500px"></router-view>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        name: '',
        visible: false
      };
    },
    methods: {
      handleOk () {
        this.$router.go(-1)
      },
      showModal() {
        this.visible = true;
      },
      enterTodoList(){
        this.$router.push(`/home`);
      },
      enterInformation(){
        this.$router.push(`/home/information`);
      },

    },
    mounted() {
      this.name = this.$store.state.name
    }
  }
</script>

<style scoped>
  >>> .ant-layout-header {
    background-color: #999999;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
  }
  >>> .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #fc999b;
  }
  >>> .ant-layout {
    background-color: #999999;
  }
  >>> .ant-btn-primary {
    color: #fff;
    background-color: #fc999b;
    background-color: #fc999b;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  routerStyle {
  margin-left: 200px;
    margin-top: 30px;
  }
</style>
