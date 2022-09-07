<template>
  <section id="login">
    <div class="container">
      <div class="row d-flex justify-content-center align-content-center">
        <form @submit="login" class="text-light border border-dark p-5 rounded-5 w-75">
          <h2 class="display-3  fw-bolder text-center mb-4">𝕃𝕠𝕘𝕚𝕟</h2>
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
          <div class="reg">
             <router-link to="/register">
              Don't have an account?
              Register Here
          </router-link>
          </div>
          
          <button type="submit" class="btn d-flex justify-content-center mx-auto w-100">
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
  background-image: url("https://i.postimg.cc/J0sVdrdq/car-driving-18.gif");
  background-size: cover;
  background-position: center;
  /*
  background-repeat: no-repeat; */
  
}
.container{
  /* width:300px; */
  color:rgb(81, 80, 80);
  
}
a{
  text-decoration: none;
  color:gray;
}
.reg{
  padding-bottom: 10px;
}
/* .btn{
  background-color: rgba(242, 23, 23, 0.853);
  height:40px;
  width:202px;
  color:black;
  font-weight:bold
} */
.btn{
  background-color: rgb(0, 0, 0);
  height:40px;
  /* width:202px; */
  color:rgb(223, 4, 4);
  font-weight:bold
}
.row {
  min-height: 90vh;
}
form{
  background-color:rgb(0, 0, 0)
}
input{
  border-width:1px;
  background-color: black;
  color: white;
  border-color: rgb(228, 2, 25);
}
</style>
