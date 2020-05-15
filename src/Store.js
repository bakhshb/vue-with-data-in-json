import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import data from "./assets/cv.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    loading: true,
    showmsg: "none"
  },
  mutations: {
    GET_DATA(state, data) {
      state.data = data;
    },
    CHANGE_STATUS(state, loading) {
      state.loading = loading;
    },
    SHOW_MESSAGE(state, data) {
      state.showmsg = data;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  },
  actions: {
    fetch_data({ commit }) {
      console.log(data);
      // commit("GET_DATA", data);
      console.log(data);
    }
    /* callApi({ commit }) {
      axios
        .get("https://api.baraa.online/abouts/5dcdb75087e6ba300b676652")
        .then(function(response) {
          // handle success
          console.log(response);
          commit("GET_DATA", response);
          commit("CHANGE_STATUS", false);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    savecontact({ commit }, data) {
      axios.post('https://api.baraa.online/contacts', {
        name: data.name,
        email: data.email,
        message: data.message

      }).then((r) => {
        //console.log(r);
        commit('SHOW_MESSAGE', 'block')
      }).catch((e) => {
        //console.log(e);
      });
    },
    sendemail({ commit }, data) {
      axios.post('https://api.baraa.online/email', {
        to: 'bakhshb@gmail.com',
        subject: 'Resume Baraa Bakhsh' + data.email,
        text: data.message
      }).then((r) => {
        //console.log(r);
      }).catch((e) => {
        //console.log(e);
      });
    } */
  }
});
