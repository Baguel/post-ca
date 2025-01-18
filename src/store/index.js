import { createStore } from "vuex";

export default createStore({
  state: {
    note: [],
  },
  mutations: {
    SET_NOTES(state, notes) {
      state.note = notes;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        let response = await fetch("https://post-it.epi-bluelock.bj/notes");
        let data = await response.json();
        commit("SET_NOTES", data.notes);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
  },
  getters: {
    allnotes: (state) => state.note,
  },
  modules: {},
});
