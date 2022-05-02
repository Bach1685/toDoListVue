import { createStore } from "vuex";
import { List } from "../src/businesslogic/list";

export default createStore({
  state() {
    return {
      list: new List(),
    };
  },
  getters: {
    toDoItems(state) {
      return state.list.toDoItems;
    },
    doneItems(state) {
      return state.list.doneItems;
    },
  },
  mutations: {
    add(state, inputValue) {
      state.list.add(inputValue);
    },
    remove(state, id) {
      state.list.remove(id);
    },
    mark(state, id) {
      state.list.mark(id);
    },
  },
  actions: {},
  modules: {},
});
