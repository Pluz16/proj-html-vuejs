<template>
    <main class="main">

      <section class="slider-taste">
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

      <button class="prev-btn slider-btn" @click="prevSlide"><span>Prev</span></button>
      <button class="next-btn slider-btn" @click="nextSlide"><span>Next</span></button>
      </div>
      </section>

      <section class="more-info">
        <div class="image-card" v-for="image in images" :key="image.src">
        <img :src="image.src" :alt="image.alt">
        <div class="overlay">
          <i class="fas fa-eye"></i>
        </div>
      </div>
      </section>

      <section class="cit-slider">
      <div class="slides" ref="slides">
    <div
      v-for="(quote, index) in quotes"
      :key="index"
      class="quote-slide"
    >
      <div class="quote-symbol">&#8220;</div>
      <div class="quote-text">{{ quote.text }}</div>
      <div class="quote-source">{{ quote.source }}</div>
    </div>
  </div>
  <div class="slide-indicator">
    <span
      v-for="(quote, index) in quotes"
      :key="index"
      @click="goToSlide(index)"
      :class="{ 'active': currentSlide === index }"
    ></span>
  </div>
  <button class="prev-btn slider-btn" @click="prevSlide"><span>Prev</span></button>
  <button class="next-btn slider-btn" @click="nextSlide"><span>Next</span></button>
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
.slider-taste{
  height: 316px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.slider-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.slider-content {
  display: flex;
  width: 538px;
  height: 276px;
  transition: transform 0.3s;
}

.slide {
  position: relative;
  width: 100%;
  height: 100%;
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
  background-color: #fff;
  border: none;
  font-size: 16px;
  color: #D24322;
  cursor: pointer;
  writing-mode: vertical-rl;
  text-orientation: upright;
  transform-origin: center;
}

.prev-btn {
  left: 0px;
  width: 23px;
      height: 57px;
      border-radius: 0 12rem 12rem 0;
}

.next-btn {
  right: 0px;
  width: 23px;
      height: 57px;
      border-radius: 12rem 0 0 12rem;
}

.slider-btn span{
  display: inline-block;
  transform: rotate(90deg);
  transform-origin: left bottom;
}

/* FINE PRIMA SEZIONE: PIZZA SLIDER */

/* SECONDA SEZIONE: MORE INFO */
.more-info {
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
  height: 216px;
  background-color: rgb(255, 255, 255);
}

.image-card {
  position: relative;
  width: calc(25% - 3px);
}

.image-card img {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.overlay i {
  font-size: 1.5em;
  background-color: orange;
  color: white;
  padding: 5px;
  border-radius: 50%;
}

.image-card:hover .overlay {
  opacity: 1;
}

/* FINE SECONDA SEZIONE: MORE INFO */

/* TERZA SEZIONE CIT-SLIDER */
.cit-slider {
  position: relative;
  background-image: url('../src/assets/h3-testimonials-bckgrnd.jpg');
  background-size: cover;
  padding-top: 4px;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 286px;
}



.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.quote-slide {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.quote-symbol {
  font-size: 48px;
  color: #B7903C;
}
.slides {
  display: flex;
  transition: transform 0.3s;
}

.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}


.quote-text {
  font-size: 1.2em;
  margin: 10px 0;
}

.quote-source {
  color: red;
  font-style: italic;
}


/* FINE TERZA SEZIONE CIT-SLIDER */

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
  mounted() {
    // Codice slider
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

    // Nuovo codice per lo slider di citazioni
    this.autoCycleQuotes();
  },

  data() {
    return {
      // Dati delle immagini esistenti
      images: [
        { src: '../src/assets/h3-img-1.jpg', alt: 'Immagine 1' },
        { src: '../src/assets/h3-img-2.jpg', alt: 'Immagine 2' },
        { src: '../src/assets/h3-img-3.jpg', alt: 'Immagine 3' },
        { src: '../src/assets/h3-img-4.jpg', alt: 'Immagine 4' },
      ],

      // Dati delle citazioni
      quotes: [
        { text: '"MORE THAN A PIZZA"', source: 'George Washington' },
        { text: '"LITTLE ITALY IN A BITE"', source: 'Abraham Lincoln' },
        { text: '"MAMMA MIA"', source: 'Thomas Jefferson' },
      ],
      currentSlide: 0,
    };
  },

  methods: {
    // Metodi per lo slider di citazioni
    goToSlide(index) {
      this.currentSlide = index;
      this.updateQuoteSlider();
    },
    autoCycleQuotes() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.quotes.length;
        this.updateQuoteSlider();
      }, 5000);
    },
    updateQuoteSlider() {
      const slides = this.$refs.slides;
      slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    },
  },
};
</script>
  