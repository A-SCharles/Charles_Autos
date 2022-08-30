<template>
  <section id="login">
    <div class="container">
      <div class="row d-flex justify-content-center align-content-center">
        <form @submit="login" class="border border-1 shadow-lg p-5 rounded-5">
          <h2 class="display-3 fw-bolder text-center mb-4">Login</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email" required
            />
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
      email: null,
      password: null,
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg;
    },
  },
  methods: {
    login(e) {
        e.preventDefault();
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>

<style scoped>
#login {
  min-height: 100vh;
}

.row {
  min-height: 90vh;
}
</style>
