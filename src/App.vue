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

<style>
*{
  padding:0;
  margin:0;
  /* --bs-gutter-x:0px; */
}
</style>