<template>
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-row">
            <div class="footer-column">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="footer-column">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Contact Us</h4>
              <ul>
                <li><i class="fas fa-map-marker-alt"></i> Via Roma 123, 00100 Roma</li>
                <li><i class="fas fa-phone"></i> 06 1234567</li>
                <li><i class="fas fa-envelope"></i> info@pizzeria.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© 2023 Pizzeria | All rights reserved</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped lang="scss">
  footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
  }
  
  .footer-top {
    border-bottom: 1px solid #fff;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .footer-column {
    flex: 1;
    margin-bottom: 30px;
  }
  
  h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  ul li a {
    color: #fff;
  }
  
  ul li a:hover {
    color: #f00;
  }
  
  .fa-map-marker-alt,
  .fa-phone,
  .fa-envelope {
    margin-right: 10px;
  }
  
  .footer-bottom {
    margin-top: 40px;
    text-align: center;
  }
  </style>