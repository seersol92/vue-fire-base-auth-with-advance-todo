import firebase from "firebase";

const state = {
    user: null,
    isLoading: false
};

const getters = {
    getUser: state => state.user,
};

const actions = {
    setUser: ({commit}, user) => {
        const { displayName, email, photoURL, uid } = user;
        commit('setUser', { displayName, email, photoURL, uid })
    },

    removeUser: ({commit}) => {
        commit('setUser', null)
    }
};

const mutations = {
    setUser: (state, user) => state.user = user,
    setLoading: (state, loading) => state.isLoading = loading
};


export default {
    state,
    getters,
    actions,
    mutations
}