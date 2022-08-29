<template>
  <NavBar />
  <section id="about">
    <div class="row">
      <div class="col-md-6">
        <div class="container">
          <img
            class="img-fluid p-5"
            src="https://i.postimg.cc/tgTvK4cf/pexels-cup-of-couple-7303983.jpg"
            alt="candles"
          />
        </div>
      </div>
      <div class="col-md-6 p-5">
        <h1 class="about-us">The Aromary</h1>
        <hr />
        <p class="paragraph text-muted p-3">
          Welcome to The Aromary, your number one source for all things
          candles-related. We're dedicated to giving you the very best of
          scented candles, with a focus on scent-matching, candle making,
          customer-service and transparency from our team.
        </p>
        <p class="paragraph text-muted p-3">
          Founded in 2022 by Fatima Galant, The Aromary has come a long way from
          its beginnings in a cramped room. When we first started out, our
          passion for scented candle products drove us to quit our day jobs, do
          tons of research, and 100% dedicate ourselves to this business so that
          The Aromary can offer you the world's best scented candles. We now
          serve customers all over the world, and are thrilled that we're able
          to turn our passion into our own website.
        </p>
        <p class="paragraph text-muted">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p class="paragraph text-muted">Sincerely, The Aromary</p>
        <div class="container">
          <div class="row">
            <i class="fa-brands fa-instagram"></i>

            <i class="fa-brands fa-twitter"></i>

            <i class="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
#about {
  padding-top: 100px;
  font-family: "Aboreto", cursive;
  overflow-x: hidden;
}
.img-fluid {
  aspect-ratio: 1;
  object-fit: contain;
}
.about-us {
  font-size: 3rem;
  padding-top: 10px;
  font-weight: 500;
  padding-left: 10px;
}
.text-muted {
  font-size: 1.5rem;
  font-weight: 550;
  padding-left: 10px;
}
i {
  font-size: 2rem;
}
</style>
