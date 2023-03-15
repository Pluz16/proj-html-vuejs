<template>
    <main class="main">

      <section class="section slider-taste">
        <div class="slider-container">
      <div class="slider-content">
        <div class="slide">
          <img class="foreground-img" src="../assets/h3-rev-img-2.png" alt="Immagine 1-1">
          <img class="background-img" src="../assets/h3-rev-img-1.png" alt="Immagine 1-2">
        </div>
        <div class="slide">
          <img class="foreground-img" src="../assets/h3-rev-img-4.png" alt="Immagine 2-1">
          <img class="background-img" src="../assets/h3-rev-img-3.png" alt="Immagine 2-2">
        </div>
        <div class="slide">
          <img class="foreground-img" src="../assets/h3-rev-img-6.png" alt="Immagine 3-1">
          <img class="background-img" src="../assets/h3-rev-img-5.png" alt="Immagine 3-2">
        </div>
      </div>

      <button class="slider-btn prev-btn">Prev</button>
      <button class="slider-btn next-btn">Next</button>
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

/* PRIMA SEZIONE: PIZZA SLIDER */
.slider-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.slider-content {
  display: flex;
  width: 300%;
  height: 100%;
  transition: transform 0.3s;
}

.slide {
  width: 33.3333%;
  height: 100%;
  position: relative;
}

.foreground-img,
.background-img {
  position: absolute;
  max-width: 100%;
  height: auto;
}

.foreground-img {
  z-index: 2;
}

.background-img {
  z-index: 1;
  opacity: 0.5;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
}

.prev-btn {
  left: 10px;
  border-radius: 50% 0 0 50%;
}

.next-btn {
  right: 10px;
  border-radius: 0 50% 50% 0;
}




/* PRIMA SEZIONE: PIZZA SLIDER */
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
  mounted(){
    const sliderContent = document.querySelector('.slider-content');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let pageIndex = 0;

prevBtn.addEventListener('click', () => {
  pageIndex = pageIndex === 0 ? 2 : pageIndex - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  pageIndex = pageIndex === 2 ? 0 : pageIndex + 1;
  updateSlider();
});

function updateSlider() {
  const translateX = -pageIndex * 100 / 3;
  sliderContent.style.transform = `translateX(${translateX}%)`;
}
  }
};
</script>
  