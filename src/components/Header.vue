<template>
    <header>
      <nav>
        <div class="logo">
          <a href="#">Logo</a>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
nav {
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.logo a {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}