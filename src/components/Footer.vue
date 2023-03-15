<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h3 class="title is-4 has-text-warning">FIND OUR RESTAURANTS</h3>
          <p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
        <div class="column">
          <h3 class="title is-4 has-text-warning">WORKING HOURS</h3>
          <p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod odio ut augue porttitor ultrices.</p>
        </div>
        <div class="column">
          <p class="subtitle is-6">THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</p>
        </div>
      </div>
      <div class="column-img">
          <img src="../assets/footer-img-1.jpg" alt="Footer image" />
      </div>
      <div class="columns">
        <div class="column">
          <p class="subtitle is-6">© 2020 Qode Interactive</p>
        </div>
        <div class="column">
          <img src="./assets/img/natural.png" alt="Natural image" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

footer{
  height: 430px;
}

.footer {
  background-color: #1c1c1c;
  color: #fff;
  height: 430px;
  display: flex;
  position: relative;
}

.column-img{
  right: 0;
  bottom: 0;
  height: 100%;
  width: 50%;
  position: absolute;
}

.column-img img{
  height: 430px;
  width: 100%;
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