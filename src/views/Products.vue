<template>
  <section id="products">
    <NavBar />
    <div v-if="products"></div>
    <div class="row p-5">
      <div
        v-for="product in products"
        :key="product.product_id"
        class="product col-md-3 p-5"
      >
        <div class="row">
          <!-- <div class="col-md-4"> -->
          <!-- <router-link
          id="product-link"
          :to="{ name: 'description', params: { id: product.id } }"
        > -->
          <div class="card">
            <img class="img-fluid" v-bind:src="product.image" alt="" />
            <hr />
            <div class="product-info">
              <h4>
                <strong> {{ product.name }} </strong>
              </h4>
              <p class="poppins">R{{ product.price }}</p>
              <img
                class="cart-img"
                src="https://i.postimg.cc/mgRNLpx1/shopping-cart-empty-side-view.png"
                alt=""
              />
            </div>
          </div>
            <!-- </router-link> -->
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
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
#products {
  font-family: "Aboreto", cursive;
  min-height: 100vh;
}
.card {
  width: 400px;
  height: 520px;
  border-radius: 0 !important;
}
@media screen and (max-width: 600px) {
  .card {
    width: 500px;
    border-radius: 0 !important;
  }
}
.img-fluid {
  padding-top: 10px;
  width: 400px;
  height: 300px;
  object-fit: contain;
  aspect-ratio: 1;
}
.cart {
  padding-bottom: 3px;
}
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.cart-img {
  width: 25px;
  height: 25px;
  aspect-ratio: 1;
  object-fit: contain;
  margin-bottom: 10px;
}
</style>