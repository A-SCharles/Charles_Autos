<template>
  <nav class="Navbar navbar-dark sticky-top">
    <div class="navbar container">
      <router-link :to="{ name: 'home' }" class="text-decoration-none">
        <a class="navbar-brand"> ℂ𝕙𝕒𝕣𝕝𝕖𝕤 𝔸𝕦𝕥𝕠𝕤 </a>
      </router-link>
      <div v-if="user">

      </div>
      <div v-else class="d-flex w-25 justify-content-between">
        <router-link to="/register">Register</router-link> 
        <router-link to="/login">Login</router-link> 
      </div>
      <button
        class="navbar-toggler justify-content-end"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <img
          class="profile mx-3"
          src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg"
        />
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <div class="container">
            <div class="row">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="row">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <router-link
                  :to="{ name: 'profile' }"
                  class="text-decoration-none"
                >
                  <img data-bs-dismiss="offcanvas"
                    src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg"
                  />
                </router-link>
              </h5>
            </div>
          </div>
        </div>
        <div class="offcanvas-body">
          <ul
            data-bs-dismiss="offcanvas"
            class="navbar-nav justify-content-end flex-grow-1 pe-3"
          >
            <router-link :to="{ name: 'home' }" class="text-decoration-none">
              <a class="navbar-brand"> ℍ𝕠𝕞𝕖 </a>
            </router-link>
            <router-link :to="{ name: 'about' }" class="text-decoration-none">
              <a class="navbar-brand"> 𝔸𝕓𝕠𝕦𝕥 </a>
            </router-link>
            <router-link :to="{ name: 'all' }" class="text-decoration-none">
              <a class="navbar-brand"> ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤 </a>
            </router-link>
            <router-link
              :to="{ name: 'contacts' }"
              class="text-decoration-none"
            >
              <a class="navbar-brand"> ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕤 </a>
            </router-link>
           
            <router-link
              :to="{ name: 'admin' }"
              class="text-decoration-none"
            >
              <a class="navbar-brand"> Admin </a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
};
</script>

<style scoped>
.offcanvas-header img {
  width: 260px;
  height: 230px;
  /* margin-right:20px; */
  padding-top: 10px;
}
.Navbar {
  background-color: rgb(121, 6, 27);
  height: 70px;
}
.navbar-toggler {
  padding: 0;
  border: rgb(30, 32, 32);
  /* margin-left:20px; */
}
a {
  font-size: 30px;
  color: rgb(9, 5, 6);
  font-weight: bold;
  margin-left: 2%;
}
.profile {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.offcanvas {
  width: 310px;
  background-color: rgb(121, 6, 27);
}

.btn-close {
  color: white;
  /* padding-right:10px; */
  height: 30px;
  width: 30px;
}
</style>
