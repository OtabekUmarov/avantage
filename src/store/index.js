import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import i18n from "vue-i18n"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    content: {},
    favourites: [],
  },
  actions: {
    async GetProducts({commit}) {
      let content = await axios.get("https://admin.avantage.events/api/FullPage/",{
        headers:{
          "content-language": i18n.locale
        }
      });
      commit("setContent", content.data);
      return (content && content.data) || [];
    },
  },
  mutations: {
    setContent(state, content) {
      state.content = content;
    },
  },
  getters: {
    GET_PRODUCTS: (state) => {
      return state.products;
    },
    FAVOURITES_COUNT: (state) => {
      return state.favourites.length;
    },
  },
});
