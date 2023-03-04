import DataService from "../../services/DataService";

export default {
  state: () => ({
    names: {},
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
  }),
  getters: {
    getNames: (state) => state.names,
    getImgUrl: (state) => state.imgUrl,
  },
  mutations: {
    SET_NAMES(state, payload) {
      state.names = payload;
    },
  },
  actions: {
    listNames: async ({ commit }) => {
      try {
        const res = await DataService.getAll();
        commit("SET_NAMES", res.data.results.slice(0, 1008));
      } catch (e) {
        console.log(e);
      }
    },
  },
};
