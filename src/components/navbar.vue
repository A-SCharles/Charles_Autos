<template>
  <nav class="Navbar sticky-top">
    <div class="navbar container">
      <router-link :to="{ name: 'home' }" class="text-decoration-none">
        <a class="navbar-brand"> ℂ𝕙𝕒𝕣𝕝𝕖𝕤 𝔸𝕦𝕥𝕠𝕤 </a>
      </router-link>

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
                <div v-if="user">
                  <router-link
                    :to="{ name: 'profile', params: { user: user } }"
                    :user="user"
                    class="text-decoration-none"
                  >
                    <img class="rounded-circle"
                      data-bs-dismiss="offcanvas"
                      src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg"
                    />
                    <h2 data-bs-dismiss="offcanvas" class="text-center">
                      View Profile
                    </h2>
                  </router-link>
                </div>
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
            <router-link :to="{ name: 'contact' }" class="text-decoration-none">
              <a class="navbar-brand"> ℂ𝕠𝕟𝕥𝕒𝕔𝕥 </a>
            </router-link>
            <div v-if="admin">
              <router-link :to="{ name: 'admin' }" class="text-decoration-none">
                <a class="navbar-brand"> 𝔸𝕕𝕞𝕚𝕟</a>
              </router-link>
            </div>
          </ul>
        </div>
      </div>

      <div class="d-flex">
        <div v-if="user">
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
          <button
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#wishlist"
            aria-controls="wishlist"
          >
            <i class="fa-regular fa-heart fs-1"></i>
          </button>
          <button class="btn" @click="logout">
            <i class="fa-solid fa-right-from-bracket fs-1"></i>
          </button>

          <Wishlist :id="user.id" />
        </div>

        <div v-else class="">
          <ul class="navbar-nav d-flex">
            <router-link to="/login"><a class="nav-link">Login</a></router-link>
            <router-link to="/register"
              ><a class="nav-link">Register</a></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";
import Wishlist from "./wishlist.vue";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
  mounted() {
    this.$store.commit("setAdmin");
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      this.$store.state.token = null;
      this.$store.state.cart = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/");
    },
  },
  components: { Wishlist },
};
</script>

<style scoped>
nav {
  overflow-x: hidden;
}
.offcanvas-header img {
  width: 260px;
  height: 230px;
  /* margin-right:20px; */
  padding-top: 10px;
}

.Navbar {
  background-color: rgb(121, 6, 27);
  min-height: 70px;
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
.Navbar a.router-link-exact-active {
  filter: invert();
}
</style>
