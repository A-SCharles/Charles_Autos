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

a {
  position: relative;
  text-decoration: none;
}
.link a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  margin: -5px 0;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.4s ease-in-out 0s;
}
.link a:hover:before {
  content: "";
  visibility: visible;
  transform: scaleX(1);
}

.else {
  min-height: 100vh;
  background-color: black;
  transition: 10s ease-in-out;
}
</style>