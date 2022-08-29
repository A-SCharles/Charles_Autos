<template>
  <Navbar />
  <router-view />
  <Footer/>
</template>


<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue"
export default {
  components: { Navbar, Footer },
};
</script>

<style scoped>
*{
  padding:0;
  margin:0;
}
</style>