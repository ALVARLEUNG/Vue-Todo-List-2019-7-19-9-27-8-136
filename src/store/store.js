import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allItems:[],
    id: 0
  },
  getters: {
    getAllItems: allItems =>{
      return this.state.allItems
    }
  },
  mutations: {
    addListItem(state, text){
      state.id++
      state.allItems.push({id:state.id, text: text, status: false});
    },
    updateItem(state, item){
      state.allItems.filter(i => i.id === item.id)[0].text = item.text;
      console.log( state.allItems)
    }
  }
})

export default store
