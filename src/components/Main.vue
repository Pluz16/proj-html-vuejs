<template>
    <main class="main">
      <section class="section slider-taste">
        <div class="container">
          <h2 class="title">Section 1</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section more-info">
        <div class="container">
          <h2 class="title">Section 2</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section cit-slider">
        <div class="container">
          <h2 class="title">Section 3</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section pizza-specials">
        <div class="container">
          <h2 class="title">Section 4</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section own-pizza">
        <div class="container">
          <h2 class="title">Section 5</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section our-team">
        <div class="container">
          <h2 class="title">Section 6</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section our-collab">
        <div class="container">
          <h2 class="title">Section 7</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section pizza-menu">
        <div class="container">
          <h2 class="title">Section 8</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section pizza-deals">
        <div class="container">
          <h2 class="title">Section 9</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
      </section>
      <section class="section book-table">
        <div class="container">
          <h2 class="title">Section 10</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismodio ut augue porttitor ultrices.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>


.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
}

.slider-taste {
  background-color: #3273dc;
}

.more-info {
  background-color: #209cee;
}

.cit-slider {
  background-color: #23d160;
}

.pizza-specials {
  background-color: #ffdd57;
}

.own-pizza {
  background-color: #ff3860;
}

.our-team {
  background-color: #fe5f55;
}

.our-collab {
  background-color: #bcbcbc;
}

.pizza-menu {
  background-color: #fb8b24;
}

.pizza-deals {
  background-color: #4caf50;
}

.book-table {
  background-color: #8c7ae6;
}

.title {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.subtitle {
  font-size: 1.5rem;
  max-width: 500px;
}
</style>

<script>
export default {
  data() {
    return{
      name: [
        {
          title: "section-1",
        }
      ]
    }}
};
</script>
  