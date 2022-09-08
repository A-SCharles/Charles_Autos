<template>
  <div id="profile">
    <div class="container" v-if="user">
      <div class="card border-0">
        <div
          class="row py-5 d-flex justify-content-center align-content-center"
        >
          <div class="col-md-6 me-auto">
            <form class="shadow-lg p-5 rounded-5 my-auto text-light">
              <h2 class="text-center">My Details</h2>

              <p class="text-center">
                <button
                  class="btn mt-5"
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
                    class="btn m-3"
                    @click="this.$store.dispatch('editUser', user)"
                  >
                    Update Details
                  </button>

                  <button
                    type="button"
                    class="btn"
                    @click="this.$store.dispatch('deleteUser', user.id)"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loading.vue";
export default {
  components: { Loader },
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
  background-image: url("https://i.postimg.cc/3NmPhQSW/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card {
  background-color: var(--color-);
  /*
  /* border-width: 0px; */
}

.btn{
  background-color: rgb(0, 0, 0);
  height:40px;
  color:rgb(223, 4, 4);
  font-weight:bold
}

form {
  background-color: rgb(121, 6, 27);
}
</style>
<!-- filter/sort
    users detail with update and delete 
    users detil with update and delete
    users detil with update and delete-->
