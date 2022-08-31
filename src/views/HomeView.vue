<template>
  <section id="home" class="bg-light text-dark">
    <NavBar />
    <div
      id="carouselExampleControls"
      class="carousel slide p-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.postimg.cc/NMHGDpGN/luma-candles-K1-Xi-R-mfpk-unsplash.jpg"
            class="img-fluid"
            alt="candles"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/26Nv4Hnw/pexels-cup-of-couple-7302758.jpg"
            class="img-fluid"
            alt="candles"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/rs6hRCpX/pexels-ekaterina-bolovtsova-6311975.jpg"
            class="img-fluid"
            alt="candles"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon text-dark"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1 class="heading">Welcome to The Aromary</h1>
    <p class="text-muted">
      click <a href="/products">here</a> to browse some of our products
    </p>
    <div class="container">
      <div class="row">
        <div id="overlay" class="col-md-4">
          <a href="/products">
            <img
              class="p-5"
              src="https://i.postimg.cc/D0rDyb5f/tyler-nix-tko-ZIdf-FHOE-unsplash-1.jpg"
              alt="candle"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">SYEV</h3>
              <p class="content-text">Heaven Scent</p>
            </div>
          </a>
        </div>
        <div id="overlay" class="col-md-4">
          <a href="/products">
            <img
              class="p-5"
              src="https://i.postimg.cc/YqcG5LJG/luma-candles-B0-G8xzw-TVWc-unsplash.jpg"
              alt="candle"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Luma</h3>
              <p class="content-text">Capella</p>
            </div>
          </a>
        </div>
        <div id="overlay" class="col-md-4">
          <a href="/products">
            <img
              class="p-5"
              src="https://i.postimg.cc/nhGDYVSs/svitlana-l-UZiv2-LXs-Gw-unsplash.jpg"
              alt="candle"
            />
          </a>
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">BERGAMOT</h3>
            <p class="content-text">Scented Candle</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h4 class="featured">Featured</h4>
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
::-webkit-scrollbar {
  display: none;
}
#home {
  font-family: "Aboreto", cursive;
  overflow-x: hidden;
  background-color: khaki;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img-fluid {
  aspect-ratio: 1;
  object-fit: cover;
  width: 80%;
  height: 500px;
  padding-top: 75px;
}
@media screen and (max-width: 800px) {
  .img-fluid {
    aspect-ratio: 1;
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
}

#overlay:hover {
  opacity: 0.5;
  color: rgba(63, 63, 63, 0.61);
  transition: all 0.4s ease;
  top: 80%;
}
.featured {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
img {
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;
  height: 400px;
}
.heading {
  font-size: 4rem;
  font-weight: 300;
}
.carousel-control-next-icon {
  filter: invert(1);
  padding-top: 75px;
}
.carousel-control-prev-icon {
  filter: invert(1);
  padding-top: 75px;
}
.carousel-control-next {
  right: 0;
  padding-top: 65px;
}
.carousel-control-prev {
  left: 0;
  padding-top: 65px;
}
a {
  color: black;
  text-decoration-line: none;
  font-weight: 500;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: large;
}
</style>