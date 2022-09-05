<template>
  <section id="products">
    <h1 class="padding">Check out our Products</h1>
    <div v-if="products"></div>
    <div v-else class="p-5">
      <h1>Loading...</h1>
    </div>
    <button id="sort" @click="sortByPrice()">
      Sort by price <i class="fa-solid fa-sort"></i>
    </button>
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
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
  filteredProducts() {
    return this.$store.state.products?.filter((product) => {
      let isMatch = true;
      if (!product.category?.toLowerCase().includes(this.search.toLowerCase()))
        isMatch = false;
      return isMatch;
    });
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
.box-wrap:hover .card {
  filter: blur(3px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: none;
}
@media screen and (max-width: 600px) {
  .card {
    width: 500px;
    border-radius: 0 !important;
    box-shadow: 2px 2px 8px;
  }
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
</style>