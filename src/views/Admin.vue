<template>
  <section id="admin">
    <div class="heading">
      <h1>PRODUCTS ADMIN PAGE</h1>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
    </button>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create A New Candle
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createproduct" id="modal-form" class="p-2">
              <input
                type="text"
                id="title-add"
                placeholder="Candle Name"
                v-model="name"
              />
              <input
                type="text"
                id="address-add"
                placeholder="Candle Name"
                v-model="category"
              />
              <input
                type="url"
                placeholder="https://picsum.photos/300/400"
                id="imageURL-add"
                v-model="image"
              />
              <div>
                <input
                  type="number"
                  id="price-add"
                  placeholder="Price"
                  v-model="price"
                />
              </div>

              <input
                v-model="stock"
                class="form form-sm"
                aria-label=".form-sm example"
                id="quantity-add"
              />
              <textarea
                name="description"
                id="description"
                cols="57"
                rows="10"
                placeholder="Description of your Candle"
                v-model="description"
              ></textarea>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="btn"
                class="btn btn-outline-dark"
                @click="createproduct"
              >
                Create Candle
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">IMG</th>
          <th scope="col">PRICE</th>
          <th scope="col">QTY</th>
          <th scope="col">EDIT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.product_id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.description }}</td>
          <td>
            <img
              v-bind:src="product.image"
              class="product.img"
            />
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <!-- <td>{{ product.category }}</td> -->
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deleteproduct">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="heading">
      <h1>USERS ADMIN PAGE</h1>
    </div>
    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FULL NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">BILLING ADDRESS</th>
          <th scope="col">COUNTRY</th>
          <th scope="col">CART</th>
          <th scope="col">PHONE</th>
          <th scope="col">USER ROLE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user_id">
          <td>{{ user.id }}</td>
          <td>{{ user.full_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.billing_address }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.cart }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deleteuser">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  data() {
    return {
      name: "",
      category: "",
      description: "",
      image: "",
      price: "",
      stock: "",
    }
  },
  methods: {
    createproduct() {
      return this.$store.dispatch("createproduct", {
        name: this.name,
        category: this.category,
        description: this.description,
        image: this.image,
        price: this.price,
        stock: this.stock,
      });
      console.log("products")
    },
    product() {
      return this.$store.state.product;
    },
    user() {
      return this.$store.state.user;
    },
    editproduct(id) {
      return this.$store.dispatch("editproduct", id);
    },
    deleteproduct(id) {
      return this.$store.dispatch("deleteproduct", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getproducts");
    return this.$store.dispatch("getUser");
  },

}
</script>
<style scoped>
#admin {
  background-color: #0a0908;
  color: white;
  margin-top: 50px;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
img{
  aspect-ratio: 1;
  object-fit: cover;
  width: 13rem;
  height: 10rem;
}
</style>