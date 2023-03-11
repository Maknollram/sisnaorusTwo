import DataService from "../services/DataService";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import consts from "../assets/json/consts.json";

const toast = useToast();

const toastMessages = consts.toastMessages;

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return {
      names: {},
      pokemon: {},
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      dialogPokemon: false,
    };
  },
  getters: {},
  actions: {
    setPokemon(pokemon) {
      this.pokemon = pokemon;
    },
    setDialogPokemon(bool) {
      this.dialogPokemon = bool;
    },
    async listNames() {
      try {
        const res = await DataService.getAll();
        this.names = res.data.results.slice(0, 1008);
        toast.info(toastMessages.catch);
        toast.success(toastMessages.trainer);
      } catch (e) {
        console.log(e);
        toast.error(toastMessages.list);
      }
    },
    async getOneByName({ name }) {
      try {
        const res = await DataService.getOneByName(name);
        this.pokemon = res.data;
      } catch (e) {
        console.log(e);
        toast.error(toastMessages.pokemon);
      }
    },
    async getOneById({ id }) {
      try {
        const res = await DataService.getOneById(id);
        this.pokemon = res.data;
      } catch (e) {
        console.log(e);
        toast.error(toastMessages.pokemon);
      }
    },
  },
});
