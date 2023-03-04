import { createStore } from "vuex";
import pokemons from "../store/modules/pokemons";

const store = createStore({
  modules: {
    pokemons,
  },
});

export default store;
