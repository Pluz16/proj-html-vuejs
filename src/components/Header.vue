<template>
    <header class="header">
      <nav class="navbar is-transparent">
        <div class="navbar-container">
        <div class="navbar-left">
          <div class="navbar-item">
            <button class="order-online-btn">
              Order Online
            </button>
          </div>
          <a class="navbar-item">
            <span class="icon is-small">
              <fa-icon :icon="['fas', 'home']" />
            </span>
            <span>Home</span>
          </a>
          <a class="navbar-item">
            <span>Pages</span>
          </a>
          <a class="navbar-item">
            <span>Menu</span>
          </a>
        </div>
        <div class="navbar-center">
          <a class="navbar-item logo" href="/">
            <img src="../assets/header-logo.png" alt="">
          </a>
        </div>
        <div class="navbar-right">
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
      </div>
      </nav>
    </header>
  </template>
  
  <style scoped>

  header{
    display: flex;
    width: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 85px;
    background-color: transparent;
    text-transform: uppercase;
    justify-content: center;
  }
  .header {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: transparent;
}
  
  .navbar.is-transparent {
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
}

  .navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}

  .order-online-btn {
  background-color: #D2401E;
  text-transform: uppercase;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-online-btn:hover {
  background-color: #c13718;
}
  
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .navbar-center {
    display: flex;
    align-items: center;
  }

  .logo img{
    width: 100px;
    height: 70px;
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
  
  </style>
  
  <script>


export default {
  name: "Header",
  components: {
  },
}
</script>
