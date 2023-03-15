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
    <img class="background-special-image" src="../src/assets/h1-img-4.jpg" alt="Background Image" />
    <img class="foreground-special-image" src="../src/assets/h1-img-7n.png" alt="Foreground Image" />
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

      <section class="logo-collab-section">
        <div class="logo-collab-container" v-for="(logo, index) in logos" :key="index">
          <img :src="logo.src" :alt="logo.alt" class="logo-collab" />
        </div>
      </section>

      <section class="menu-section">
  <div class="menu-title">
    <h2 class="subtitle">Our Menu</h2>
    <h1>THE BEST PIZZA IN TOWN</h1>
    <p>Choose our menu.</p>
  </div>
  <div class="pizza-slider">
    <div class="slider-content">
      <div class="pizza-card" v-for="(pizza, index) in pizzas" :key="index">
        <img :src="pizza.src" :alt="pizza.alt" />
        <h3>{{ pizza.name }}</h3>
        <p>{{ pizza.price }}</p>
      </div>
    </div>
  </div>
</section>


  </main>
</template>

<style scoped>



/* PRIMA SEZIONE: PIZZA SLIDER */
.slider-taste{
  position: relative;
}
.slider-container {
  overflow: hidden;
  width: 100%;
  height: 316px;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 276px;
}

.slide {
  min-width: 100%;
}

.foreground-img,
.background-img {
  position: absolute;
  max-width: 100%;
}

.foreground-img {
  z-index: 0;
}

.background-img {
  z-index: 0;
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
  background-image: url("../src/assets/h1-img-4.jpg");
  position: relative;
  width: 50%;
  height: 100%;
}

.foreground-special-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.foreground-special-image {
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

/* LOGO COLLAB */

.logo-collab-section {
  background-color: #F7F7F2;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.logo-collab-container {
  padding: 1rem;
  transition: transform 0.3s ease;
}

.logo-collab {
  max-width: 100%;
  height: auto;
}

.logo-collab-container:hover {
  transform: translateY(-10px);
}


/* FINE LOGO COLLAB */

/* MENU */
.menu-section {
  padding: 2rem 0;
  text-align: center;
}

.subtitle {
  color: #D2401E;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.pizza-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
}



.slider-content {
  display: flex;
  overflow: hidden;
  width: 80%;
}

.pizza-card {
  flex-shrink: 0;
  width: 100%;
  padding: 0 1rem;
}

.pizza-card img {
  width: 100%;
  height: auto;
}

/* FINE MENU */

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

    const MenusliderContent = document.querySelector('.slider-content');
    let MenupageIndex = 0;

    function updateSlider() {
      const translateX = -pageIndex * 100;
      MenusliderContent.style.transform = `translateX(${translateX}%)`;
    }

    setInterval(() => {
      MenupageIndex = MenupageIndex === this.pizzas.length - 1 ? 0 : MenupageIndex + 1;
      updateSlider();
    }, 3000);
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
    logos: [
      { src: '../src/assets/h1-clients-img-1.png', alt: 'Logo 1' },
      { src: '../src/assets/h1-clients-img-2.png', alt: 'Logo 2' },
      { src: '../src/assets/h1-clients-img-3.png', alt: 'Logo 3' },
      { src: '../src/assets/h1-clients-img-4.png', alt: 'Logo 4' },
      { src: '../src/assets/h1-clients-img-5.png', alt: 'Logo 5' },
    ],
    pizzas: [
        {
          src: '../src/assets/h3-product-img-1a-100x100.png',
          alt: 'Pizza 1',
          name: 'Pizza Margherita',
          price: '$10'
        },
        {
          src: '../src/assets/h3-product-img-2a-150x150.png',
          alt: 'Pizza 2',
          name: 'Pizza Pepperoni',
          price: '$12'
        },
        {
          src: '../src/assets/h3-product-img-3a-150x150.png',
          alt: 'Pizza 3',
          name: 'Pizza Vegetariana',
          price: '$11'
        },
        {
          src: '../src/assets/h3-product-img-4a-150x150.png',
          alt: 'Pizza 4',
          name: 'Pizza Quattro Formaggi',
          price: '$13'
        },
        {
          src: '../src/assets/h3-product-img-5a-150x150.png',
          alt: 'Pizza 4',
          name: 'Pizza Quattro Formaggi',
          price: '$13'
        },
        {
          src: '../src/assets/h3-product-img-6a-100x100.png',
          alt: 'Pizza 4',
          name: 'Pizza Quattro Formaggi',
          price: '$13'
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
  