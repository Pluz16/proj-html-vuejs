<template>
    
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