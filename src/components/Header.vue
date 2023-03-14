<template>
    <header class="header">
      <nav class="navbar is-transparent">
        <div class="navbar-left">
          <a class="navbar-item" href="/">
            <Logo name="logo" />
          </a>
          <div class="navbar-item is-hidden-desktop">
            <button class="navbar-burger" @click="toggleMenu" :class="{ 'is-active': isMenuActive }">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <a class="navbar-item is-hidden-touch">
            <span class="icon is-small">
              <fa-icon :icon="['fas', 'home']" />
            </span>
            <span>Home</span>
          </a>
          <a class="navbar-item is-hidden-touch">
            <span>Pages</span>
          </a>
          <a class="navbar-item is-hidden-touch">
            <span>Menu</span>
          </a>
        </div>
        <div class="navbar-center">
          <a class="navbar-item" href="/">
            <Logo name="logo" />
          </a>
        </div>
        <div class="navbar-right is-hidden-touch">
          <a class="navbar-item">
            <span>Events</span>
          </a>
          <a class="navbar-item">
            <span>Blog</span>
          </a>
          <a class="navbar-item">
            <span>Landing</span>
          </a>
          <a class="navbar-item">
            <span class="icon is-small">
              <fa-icon :icon="['fas', 'motorcycle']" />
            </span>
            <span>Cart</span>
          </a>
          <a class="navbar-item">
            <span class="icon is-small">
              <fa-icon :icon="['fas', 'search']" />
            </span>
            <span>Search</span>
          </a>
        </div>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
  
  .navbar.is-transparent {
    background-color: transparent;
    color: #fff;
  }
  
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .navbar-center {
    display: flex;
    align-items: center;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .navbar-item {
    padding: 0.5rem 0.75rem;
    color: #fff;
    display: flex;
    align-items: center;
  }
  
  .navbar-item:hover {
    color: #3273dc;
  }
  
  .fa-icon {
    margin-right: 0.25rem;
  }
  
  @media screen and (min-width: 1024px) {
    .navbar-item {
      padding: 0.5rem 1.5rem;
    }
  }
  </style>
  
  <script>
import Logo from "../assets/header-logo.png";


export default {
  name: "Header",
  components: {
    Logo,
    faIcon: FontAwesomeIcon,
  },
  data() {
    return {
      isMenuActive: false,
    }
    },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>
