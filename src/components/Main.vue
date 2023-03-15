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

      <section class="pizza-specials">
  <div class="specials-image-container">
    <img class="background-image" src="../src/assets/h1-img-4.jpg" alt="Background Image" />
    <img class="foreground-image" src="../src/assets/h1-img-7n.png" alt="Foreground Image" />
  </div>
  <div class="specials-content">
    <h2 class="specials-title">SPECIALS*</h2>
    <p class="specials-description">Descrizione della sezione Specials...</p>
    <ul class="specials-list">
      <li class="specials-item">
        <span class="specials-price">€10</span>
        <div class="specials-info">
          <h3>COMBO PICCOLO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
        </div>
      </li>
      <li class="specials-item">
        <span class="specials-price">€15</span>
        <div class="specials-info">
          <h3>COMBO MEZZO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
        </div>
      </li>
      <li class="specials-item">
        <span class="specials-price">€20</span>
        <div class="specials-info">
          <h3>COMBO GRANDE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
        </div>
      </li>
    </ul>
  </div>
      </section>

      <section class="own-pizza">
        <div class="container-own">
          <h2 class="title-own">GO AHEAD AND BUILD YOUR OWN PIZZA WE WON’T JUDGE!</h2>
        </div>
      </section>

      <section class="team">
  <div class="team-container">
    <div class="team-card" v-for="(member, index) in teamMembers" :key="index">
      <img :src="member.image" :alt="member.name" />
      <div class="team-card-info">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
        <div class="social-icons">
          <a :href="member.facebook" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="member.twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
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
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
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

/* QUARTA SEZIONE: SPECIALS */
.pizza-specials {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 500px;
}

.specials-image-container {
  position: relative;
  width: 50%;
  height: 100%;
}

.background-image,
.foreground-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.foreground-image {
  position: absolute;
  top: 0;
  left: 0;
}

.specials-content {
  width: 50%;
  padding: 2rem;
}

.specials-title {
  font-size: 30px;
}

.specials-description {
  color: #bcbcbc;
}

.specials-list {
  list-style: none;
  padding: 0;
}

.specials-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.specials-price {
  color: #B65A44;
  margin-right: 1rem;
  text-decoration-style: solid;
  font-size: 20px;
}

.specials-info h3 {
  font-size: large;
}

.specials-info p {
  font-size: medium;
  color: #bcbcbc;
}

/* FINE QUARTA SEZIONE: SPECIALS */

/* OWN PIZZA */
.own-pizza {
  background-image: url("../src/assets/h3-background-img.jpg") ;
  height: 380px;
  display: flex;
}

.container-own{
  display: flex;
  width: 245px;
  height: 215px;
}
.title-own{
  color: #fff;
}

/* FINE OWN PIZZA */

/* TEAM */

.team {
  height: 320px;
  width: 100%;
}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}

.team-card {
  width: 319px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 100%;
}

.team-card img {
  width: 319px;
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
}

.team-card-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 140, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover img {
  transform: scale(1.1);
}

.team-card:hover .team-card-info {
  opacity: 1;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons i {
  font-size: 1.2rem;
  color: #fff;
  transition: color 0.3s ease;
}

.social-icons a:hover i {
  color: #333;
}


/* FINE TEAM */
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

      teamMembers: [
      {
        name: 'Nome Membro 1',
        role: 'Ruolo Membro 1',
        image: '../src/assets/h1-team-1a-700x700.jpg',
        facebook: 'https://www.facebook.com/membro1',
        instagram: 'https://www.instagram.com/membro1',
        twitter: 'https://twitter.com/membro1'
      },
      {
        name: 'Nome Membro 2',
        role: 'Ruolo Membro 2',
        image: '../src/assets/h1-team-2a.jpg',
        facebook: 'https://www.facebook.com/membro1',
        instagram: 'https://www.instagram.com/membro1',
        twitter: 'https://twitter.com/membro1'
      },
      {
        name: 'Nome Membro 1',
        role: 'Ruolo Membro 1',
        image: '../src/assets/h1-team-3a.jpg',
        facebook: 'https://www.facebook.com/membro1',
        instagram: 'https://www.instagram.com/membro1',
        twitter: 'https://twitter.com/membro1'
      },
      {
        name: 'Nome Membro 1',
        role: 'Ruolo Membro 1',
        image: '../src/assets/h1-team-4a.jpg',
        facebook: 'https://www.facebook.com/membro1',
        instagram: 'https://www.instagram.com/membro1',
        twitter: 'https://twitter.com/membro1'
      },
        
    ],
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
  