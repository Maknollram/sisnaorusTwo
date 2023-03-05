import DataService from "../../services/DataService";

export default {
  state: () => ({
    names: {},
    pokemon: {},
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
    dialogPokemon: false
  }),
  getters: {
    getNames: (state) => state.names,
    getPokemon: (state) => state.pokemon,
    getImgUrl: (state) => state.imgUrl,
    getDialogPokemon: (state) => state.dialogPokemon,
  },
  mutations: {
    SET_NAMES(state, payload) {
      state.names = payload;
    },
    SET_POKEMON(state, payload) {
      state.pokemon = payload;
    },
    SET_DIALOG_POKEMON: (state, payload) => {
      state.dialogPokemon = payload
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
    getOneByName: async ({ commit }, { name }) => {
      try {
        const res = await DataService.getOneByName(name);
        commit("SET_POKEMON", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    getOneById: async ({ commit }, { id }) => {
      try {
        const res = await DataService.getOneById(id);
        commit("SET_POKEMON", res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
