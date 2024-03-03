import axios from "axios";

export default {
    state: {
        products: [],
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
    actions: {
        async setProducts({ commit }) {
            try {
                const data = await axios.get("api/getAllData");
                commit("SET_PRODUCTS", data.data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
    },
};
