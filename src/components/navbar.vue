<template>
  <nav class="Navbar sticky-top">
    <div class="navbar container">
      <a class="link navbar-brand">
        <router-link :to="{ name: 'home' }" class="text-decoration-none">
          ℂ𝕙𝕒𝕣𝕝𝕖𝕤 𝔸𝕦𝕥𝕠𝕤
        </router-link>
      </a>

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
                    :to="{ name: 'profile' }"
                    :user="user"
                    class="text-decoration-none text-center link"
                  >
                    <img
                      class="rounded-circle"
                      data-bs-dismiss="offcanvas"
                      src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg"
                    />
                    <a @click="profile" data-bs-dismiss="offcanvas" class="text-center">
                      𝕍𝕚𝕖𝕨 ℙ𝕣𝕠𝕗𝕚𝕝𝕖
                    </a>
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
            <a class="navbar-brand link">
              <router-link :to="{ name: 'home' }" class="text-decoration-none">
                ℍ𝕠𝕞𝕖
              </router-link>
            </a>
            <a class="navbar-brand link">
              <router-link :to="{ name: 'about' }" class="text-decoration-none">
                𝔸𝕓𝕠𝕦𝕥
              </router-link>
            </a>
            <a class="navbar-brand link">
              <router-link :to="{ name: 'all' }" class="text-decoration-none">
                ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤
              </router-link>
            </a>
            <a class="navbar-brand link">
              <router-link
                :to="{ name: 'contact' }"
                class="text-decoration-none"
              >
                ℂ𝕠𝕟𝕥𝕒𝕔𝕥
              </router-link>
            </a>

            <div v-if="admin" class="d-flex flex-column">
              <a class="navbar-brand link">
                <router-link
                  :to="{ name: 'admin' }"
                  class="text-decoration-none"
                >
                  𝔸𝕕𝕞𝕚𝕟
                </router-link>
              </a>
              <a class="navbar-brand link">
                <router-link
                  :to="{ name: 'users' }"
                  class="text-decoration-none"
                >
                 𝕌𝕤𝕖𝕣𝕤
                </router-link>
              </a>
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
          <ul class="navbar-nav d-flex flex-row">
            <a class="logs nav-link mx-2">
              <router-link to="/login"> Login </router-link>
            </a>
            <a class="logs nav-link mx-2">
              <router-link to="/register"> Register </router-link>
            </a>
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
    this.$store.dispatch("setAdmin");
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      this.$store.state.token = null;
      this.$store.state.wishlist = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/");
    },
    profile() {
      router.push("/profile");
    }
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

.logs {
  transition: 0.5s;
  /* transition: all 0.4s ease-in-out 0s; */
}

.logs :hover {
text-decoration-line: underline;
text-decoration-color: white;
  transition-duration: .5s;
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
