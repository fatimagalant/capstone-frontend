<template>
  <section id="products">
    <i
      id="back-btn"
      onclick="history.back()"
      class="fa-solid fa-arrow-left-long"
    ></i>
    <h1 class="padding">Check out our Products</h1>
    <div v-if="products"></div>
    <div v-else class="loading">Loading&#8230;</div>
    <button id="sort" @click="sortByPrice()">
      Sort by price <i class="fa-solid fa-sort"></i>
    </button>
    <select class="categories" v-model="category">
      <option value="All" selected>All</option>
      <option value="one wick">one wick</option>
      <option value="twisty">twisty</option>
      <option value="bubble shape">bubble shape</option>
      <option value="bees wax">bees wax</option>
    </select>
    <div class="products">
      <div class="filters pt-4">
        <input
          type="text"
          class="search fw-bold"
          id=""
          placeholder="Search by Category"
          v-model="search"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div
        v-if="filteredcategories"
        class="products-container container-fluid pb-4 pt-3"
      >
        <products
          v-for="product in filteredcategories"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div class="row p-5">
      <div
        v-for="product in products"
        :key="product.product_id"
        class="product col-md-3 p-5"
      >
        <div class="box-wrap">
          <div class="row">
            <div class="card">
              <!-- <div class="col-md-4"> -->
              <img class="img-fluid" v-bind:src="product.image" alt="" />
              <hr />
              <div class="product-info">
                <h4>
                  <strong> {{ product.name }} </strong>
                  <p class="text-muted">{{ product.category }}</p>
                </h4>
                <p class="poppins">R {{ product.price }}</p>
                <router-link
                  id="product-link"
                  :to="{
                    name: 'productinfo',
                    params: { id: product.product_id },
                  }"
                >
                  <button id="button">View Product</button>
                </router-link>
              </div>
              <img
                class="cart-img"
                @click="addToCart(item)"
                src="https://i.postimg.cc/mgRNLpx1/shopping-cart-empty-side-view.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a id="arrowhref" href="#products"
      ><i id="arrowup" class="fa-solid fa-arrow-up-long"></i
    ></a>
  </section>
</template>
<script>
export default {
  props: ["product"],
  mounted() {
    this.$store.dispatch("getproducts");
  },
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
    filteredcategories() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && product.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
    sortByPrice() {
      //gives function a name (does not need to be the same as the name given in the store)
      this.$store.commit("sortByPrice"); //runs the function in the store
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
#products {
  font-family: "Aboreto", cursive;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: white;
  z-index: 101;
}
.card {
  /* width: 400px;
  height: 520px; */
  border-radius: 0 !important;
  box-shadow: 1px 1px 4px;
  background-color: rgba(233, 231, 217, 0);
  transition: 0.2s all;
}
.box-wrap:hover .card:hover {
  transform: scale(1);
  filter: blur(0px);
  opacity: 1;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
}
.box-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 10%; */
}
#arrowup {
  display: flex;
  justify-content: end;
  font-size: 2rem;
  color: black;
  margin-bottom: 2rem;
}
.box-wrap:hover .card {
  filter: blur(3px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: none;
}
@media screen and (max-width: 600px) {
  .card {
    width: 300px;
    border-radius: 0 !important;
    box-shadow: 2px 2px 8px;
  }
}
i{
  font-size: 20px;
  padding-left: 5px;
}
.img-fluid {
  padding-top: 10px;
  width: 400px;
  height: 300px;
  object-fit: contain;
  aspect-ratio: 1;
}
#button {
  background-color: black;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: smaller;
  border: none;
  padding: 10px;
}
#sort {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.padding {
  padding-top: 150px;
}
#button:hover {
  background-color: khaki;
  color: rgb(0, 0, 0);
  font-family: "Poppins", sans-serif;
  font-size: smaller;
}
hr {
  color: wheat;
}
.cart {
  padding-bottom: 3px;
}
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.text-muted {
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  padding-top: 7px;
}
.cart-img {
  width: 25px;
  height: 25px;
  aspect-ratio: 1;
  object-fit: contain;
  margin-bottom: 10px;
  display: flex;
  justify-items: center;
}
.cart-img:hover {
  color: khaki;
}
#product-link {
  text-decoration-line: none;
  color: black;
}
#product-link:hover {
  text-decoration-line: none;
  color: khaki;
}
/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: "";
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>