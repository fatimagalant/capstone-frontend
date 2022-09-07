import router from "@/router";

import { createStore } from "vuex";
export default createStore({
  // State is where the data is
  state: {
    //Best to for the data name to be a single version of the array (properties = property)
    // products: null,
    user: null,
    cart: [],
    product: null,
    products: null,
    user: null,
    asc: true,
  },
  // Mutations are used to update state
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setSingleproduct: (state, product) => {
      state.product = product;
    },
    setCart: (state, cart) => {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    setUser: (state, user) => {
      state.user = user;
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
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
    logout: (state) => {
      (state.user = ""),
        (state.token = ""),
        (state.users = ""),
        (state.product = ""),
        (state.products = "");
    },
  },

  // Actions are for ASYNC / Fetch calls
  actions: {
    login: async (context, payload) => {
      let res = await fetch("https://the-aromary.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json();

      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://the-aromary.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setUser", data.user);
            router.push("/products");
          });
      }
    },
    register: async (context, user) => {
      // console.log(product);
      fetch("https://the-aromary.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          context.commit("setUsers", json);
        });
    },
    //   register: async (context, payload) => {
    //   const { full_name, email, password, phone } = payload;
    //   fetch("https://the-aromary.herokuapp.com/users/register", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       full_name: payload.full_name,
    //       email: payload.email,
    //       password: payload.password,
    //       phone: payload.phone,
    //     }),
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // },
    getproducts: async (context) => {
      //async (context) must ALWAYS be in
      fetch("https://the-aromary.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products)); //sends the changes to the array
      // console.log(products);
    },
    getUser: async (context) => {
      fetch("https://the-aromary.herokuapp.com/users")
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
    },
    // getSingleproduct: async (context, id) => {
    //   fetch("https://the-aromary.herokuapp.com/products/" + id)
    //     .then((res) => res.json())
    //     .then((product) => context.commit("setSingleproduct", product));
    // },
    createproduct: async (context, product) => {
      // console.log(product);
      fetch("https://the-aromary.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((products) => {
          console.log(products);
          // context.dispatch("getproducts", product);
        });
    },
    editproduct: async (context, product) => {
      fetch("https://the-aromary.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getproducts", product);
        });
    },
    deleteproduct: async (context, id) => {
      fetch("https://the-aromary.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getproducts");
      });
    },
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      context.commit("removeFromCart", newCart);
    },
  },
});
