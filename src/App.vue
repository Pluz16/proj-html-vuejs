<template>
  <div>
    <Header />
    <main>
      <!-- codice per la sezione principale -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
main {
  padding: 20px;
}
</style>
