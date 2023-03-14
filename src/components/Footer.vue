<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-gapless is-vcentered">
        <div class="column has-text-left has-text-centered-mobile">
          <h3 class="title is-4 has-text-warning">FIND OUR RESTAURANTS</h3>
          <p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
        <div class="column has-text-centered has-text-centered-mobile">
          <h3 class="title is-4 has-text-warning">WORKING HOURS</h3>
          <p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
        <div class="column has-text-right has-text-centered-mobile">
          <p class="subtitle is-6">THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</p>
        </div>
      </div>
      <div class="columns is-gapless is-vcentered has-text-centered">
        <div class="column">
          <img src="./assets/img/footer-img-1.png" alt="Footer image" />
        </div>
      </div>
      <div class="columns is-gapless is-vcentered">
        <div class="column has-text-centered">
          <p class="subtitle is-6">© 2020 Qode Interactive</p>
        </div>
        <div class="column has-text-centered">
          <img src="./assets/img/natural.png" alt="Natural image" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1c1c1c;
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.has-text-warning {
  color: #fdb813;
}

.title {
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>