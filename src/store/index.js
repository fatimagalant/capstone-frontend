import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    user: null,
    product: null,
    products: null,
    user: null,
    asc: true,
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setSingleproduct: (state, product) => {
      state.product = product;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  actions: {
    login: async (context, payload) => {
      const { email, userpassword } = payload;

      fetch("https://the-aromary-capstone.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json.token));
    },
    register: async (context, payload) => {
      const { fullname, email, password, create_date, phone} = payload;

      fetch("https://the-aromary-capstone.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          create_date: create_date,
          phone: phone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
  },
  modules: {},
});
