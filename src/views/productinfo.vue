<template>
  <section id="productinfo">
    <div id="info-div">
      <div id="item-container" v-if="product">
        <div v-for="product in product" :key="product.product_id">
          <div class="card">

          <div class="row">
            <div class="col-md-6">
              <div class="container">
                <img
                  class="img-fluid candle-image"
                  v-bind:src="product.image"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-info">
                <h1 class="text-black product-name">
                  {{ product.name }}
                </h1>
                <hr />
                <p class="text-muted">description</p>
                <hr />
                <p id="image-description" class="text-muted">
                  {{ product.descriptions }}
                </p>
                <hr />
                <h4 class="my-1 text-black">Category:{{ product.category }}</h4>
                <h5 class="my-1 text-black">R {{ product.price }}</h5>
                <p class="my-1 text-muted">qty: {{ product.stock }}</p>
                <hr />
                <button class="btn" @click="addToCart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>

              <!-- </div> -->
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("https://the-aromary.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
  methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
};
</script>

<style scoped>
#productinfo {
  min-height: 100vh;
  background-color: wheat;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  overflow-x: hidden;
  z-index: 101;
  overflow-x: hidden;
}
h1 {
  font-family: "Aboreto", cursive;
}
.container {
  width: 600px;
  height: 500px;
  margin-top: 200px;
  margin-bottom: 160px;
  box-shadow: 2px 2px 4px solid black;
  width: fit-content;
  height: fit-content;
}
@media screen and (max-width: 600px) {
  .container {
    /* width: 600px;
    height: 500px; */
    /* margin-top: 100px; */
    /* margin-bottom: 160px; */
    box-shadow: 2px 2px 4px solid black;
    width: fit-content;
    height: fit-content;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
}
#image-description {
  font-family: "Aboreto", cursive;
  letter-spacing: 2;
  word-spacing: 2;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}
hr {
  color: black;
}
.card{
  border: 1px black;
}
.product-info {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 220px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}
.img-fluid {
  object-fit: contain;
  aspect-ratio: 1;
  height: 700px;
}
</style>