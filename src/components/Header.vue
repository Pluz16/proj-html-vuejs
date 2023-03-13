<template>
    <header>
      <nav>
        <div class="logo">Order Now</div>
        <div class="navbar">
          <div class="nav-item" v-for="item in menuItems" :key="item.id">
            <a href="#">{{ item.text }}</a>
          </div>
          <div class="nav-item">
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
          </div>
          <div class="nav-item hamburger">
            <a href="#"><i class="fas fa-bars"></i></a>
          </div>
        </div>
      </nav>
    </header>
  </template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuItems: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Pages' },
        { id: 3, text: 'Menu' },
        { id: 4, text: 'Event' },
        { id: 5, text: 'Blog' },
        { id: 6, text: 'Landing' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .navbar {
    display: flex;
    align-items: center;

    .nav-item {
      margin-left: 20px;

      a {
        color: #333;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #f00;
        }
      }
    }
  }

  .hamburger {
    display: none;
  }
}

</style>