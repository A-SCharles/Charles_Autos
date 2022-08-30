<template>
  <section id="register">
    <div class="container">
      <div class="row d-flex justify-content-center align-content-center">
        <form @submit="register" class="border border-1 shadow-lg p-5 rounded-5">
          <div class="mb-3">
            <h2 class="display-3 fw-bolder text-center mb-4">Register</h2>
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
            <input v-model="email" type="email" class="form-control" placeholder="Enter Email" required />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Enter Password" required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <div v-if="msg" class="text-center m-5">
          <h2>{{ msg }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
}

.row {
  min-height: 90vh;
}
</style>
