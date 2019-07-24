import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allItems: [],
    id: 0,
    name: ''
  },
  getters: {
    getAllItems: allItems => {
      return this.state.allItems
    },
    getName: name => {
      return this.state.name
    }
  },
  mutations: {
    addListItem(state, text) {
      state.id++;
      let date = new Date();
      // let formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();, time: formatDate
      state.allItems.push({id: state.id, text: text, status: false});
    },
    updateItem(state, item) {
      state.allItems.filter(i => i.id === item.id)[0].text = item.text;
      console.log(state.allItems)
    },
    setName(state, name) {
      state.name = name;
    }
  }
})

export default store
