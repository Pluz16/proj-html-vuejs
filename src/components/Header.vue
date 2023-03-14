<template>
    <header>
      <nav>
        <div class="Order"> <a href="#">Order Now</a> </div>
        <div class="navbar">
          <div class="nav-item" v-for="item in menuItems" :key="item.id">
            <a href="#">{{ item.text }}</a>
          </div>
        </div>
          <div class="nav-act">
            <a href="#">Cart</a>
            <a href="#">Search</a>
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
  background-color: #181818;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 760px;
  height: 85px;

  a{
    text-transform: uppercase;
  }

  .Order a {
    background-color: #D2401E;
    font-size: 16px;
    font-weight: bold;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-item {
      margin-left: 20px;

      a {
        color: #f4f0f0;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #f00;
        }
      }
    }
  }
}

</style>