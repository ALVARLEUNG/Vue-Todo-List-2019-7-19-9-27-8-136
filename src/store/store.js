import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allItems:[]
  },
  getters: {
    getAllItems: allItems =>{
      return this.state.allItems
    }
  },
  mutations: {
    addListItem(state, text){
      state.allItems.push({text: text, status: false});
    }
  }
})

export default store
