<template>
  <div id="profile">
    <div class="container" v-if="user">
      <div class="card border-0">
        <div class="row d-flex justify-content-center align-content-center">
          <div class="col-md-6 mx-auto">
            <img class="mx-auto img-fluid rounded-circle" :src="user.profile" />
            <h2 class="mx-auto">User : {{ user.username }}</h2>
          </div>
          <div class="col-md-6 mx-auto">
            <form class="bg-danger shadow-lg p-5 rounded-5 my-auto">
              <h2 class="text-center">My Details</h2>

              <p class="text-center">
                <button
                  class="btn btn-primary mt-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                 View Details
                </button>
              </p>

              <div class="collapse" id="collapseExample">
                <div class="card border-0 card-body">
                  <div class="mb-3">
                    <label class="form-label" for="name">Username :</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="user.username"
                      placeholder="Enter Username"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="firstname" class="form-label"
                      >Firstname :</label
                    >
                    <input
                      v-model="user.firstname"
                      type="text"
                      class="form-control"
                      placeholder="Enter Firstname"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="surname" class="form-label">Surname :</label>
                    <input
                      v-model="user.surname"
                      type="text"
                      class="form-control"
                      placeholder="Enter Surname"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="surname" class="form-label"
                      >Profile Image :</label
                    >
                    <input
                      v-model="user.profile"
                      type="text"
                      class="form-control"
                      placeholder="Enter image URL"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label"
                      >Email address :</label
                    >
                    <input
                      v-model="user.email"
                      type="email"
                      class="form-control"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="this.$store.dispatch('editUser', user)"
                  >
                    Update Details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
#profile {
  min-height: 100vh;
  background-image: url("https://i.postimg.cc/TwfCHkzD/347139.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.row {
  min-height: 100vh;
}

.card {
  background-color: var(--color-);
  /*
  /* border-width: 0px; */
}

.row {
  /* background:green; */
}
</style>
<!-- filter/sort
    users detail with update and delete 
    users detil with update and delete
    users detil with update and delete-->
