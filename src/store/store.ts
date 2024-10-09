import { createStore, Store  } from '../../node_modules/vuex'

interface State {
  count: number;
  user: { name: string } | null;
}

export const store = createStore<State>({

  state: {
    count: 0,
    user: null,
  },

  mutations: {
    increment(state: State) {
      state.count++;
    },

    decrement(state: State) {
      state.count--;
    },

   
    setUser(state: State, user: { name: string }) {
      state.user = user;
    },
  },

  actions: {
    increment({ commit }) {
      commit('increment');
    },

    decrement({ commit }) {
      commit('decrement');
    },
    
    setUser({ commit }, user: { name: string }) {
      commit('setUser', user);
    },
  },

  getters: {
    count(state: State) {
      return state.count;
    },
    
    userName(state: State) {
      return state.user ? state.user.name : 'Utilisateur inconnu';
    },
  },

});

