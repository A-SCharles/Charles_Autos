<template>
  <section id="register">
    <div class="container">
      <div class="row d-flex justify-content-center align-content-center">
        <form
          @submit="register"
          class="w-75 text-light border border-1 shadow-lg p-5 rounded-5"
        >
          <div class="mb-3">
            <h2 class="display-3 text-center fw-bolder mb-4">ℝ𝕖𝕘𝕚𝕤𝕥𝕖𝕣</h2>
            <label for="exampleInputPassword1" class="form-label"
              >Username :</label
            >
            <input
              v-model="username"
              type="text"
              class="form-control"
              placeholder="Enter Username"
              required
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Enter Email"
              required
            />

            <div v-if="msg === 'Email already in use'" class="text-center m-5">
              <h2>{{ msg }}</h2>
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            class="btn w-100 d-flex justify-content-center mx-auto"
          >
            Submit
          </button>
        </form>
        <div v-if="msg === 'Registration Successful'" class="text-center m-5">
          <h2>{{ msg }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      usertype: null,
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg;
    },
  },
  methods: {
    register(e) {
      e.preventDefault();

      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        usertype: this.usertype,
      };
      this.$store.dispatch("register", payload);
    },
  },
};
</script>

<style scoped>
#register {
  min-height: 100vh;
  background-image: url("https://i.postimg.cc/1tH70kmK/c7104a5185e327d62f7aab51800d4212.gif");
  background-size: cover;
}

.container {
  /* width:300px; */
  color: rgb(81, 80, 80);
}
a {
  text-decoration: none;
  color: gray;
}
.btn {
  background-color: rgb(0, 0, 0);
  /* height:40px;
  width:202px; */
  text-align: center;
  color: rgb(223, 4, 4);
  font-weight: bold;
  border-width: 0;
}
.btn:hover {
  border-width: 1px;
  border-color: rgb(228, 2, 25);
}
.row {
  min-height: 90vh;
}
form {
  background-color: rgb(0, 0, 0);
}

input {
  border-width: 1px;
  background-color: black;
  color: white;
  border-color: rgb(228, 2, 25);
}
</style>
