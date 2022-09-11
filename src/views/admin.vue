<template>
  <section id="admin">
    <div v-if="admin" class="container text-center p-5">
      <h2 class="text-center text-light">ℂ𝕒𝕣𝕤 𝕋𝕒𝕓𝕝𝕖</h2>
      <table class="table table-hover text-white my-5">
        <thead>
          <tr class="text-start text-white">
            <th scope="col">#id</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Model</th>
            <th scope="col">Body Style</th>
            <th scope="col">Price</th>
            <th scope="col" class="text-center">
              <a
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="fa-regular fa-square-plus"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tbody v-if="cars">
          <tr class="text-start" v-for="car in cars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>
              <a class="link">
                <router-link
                  :to="{ name: 'singleAdmin', params: { id: car.id } }"
                >
                  {{ car.manufacturer }}
                </router-link>
              </a>
            </td>
            <td>{{ car.model }}</td>
            <td>{{ car.bodystyle }}</td>
            <td>R{{ car.MSRP }}.00</td>
            <td class="text-center">
              <a
                class="btn"
                data-bs-toggle="modal"
                :data-bs-target="'#update' + car.id"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </a>

              <a class="btn" @click="this.$store.dispatch('deleteCar', car.id)"
                ><i class="fa-solid fa-trash-can"></i
              ></a>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <Loader />
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="container">
        <div class="row vh-100 d-flex justify-content-center align-content-center">
          <div class="text-center">
            <h2>Only Admins Are Allowed Here, Sorry.</h2>
            <a class="btn">
              <router-link to="/">Return To Home Page</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <div v-if="cars">
      <AddModal />
      
      <div v-for="car in cars" :key="car">
        <UpdateModal :car="car" />
      </div>
    </div>
  </section>
</template>

<script>
import AddModal from "@/components/addModal.vue";
import UpdateModal from "@/components/updateModal.vue";
import Loader from "@/components/loading.vue";
export default {
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    loader() {
      return this.$store.state.loader;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  components: { AddModal, UpdateModal, Loader },
};
</script>

<style scoped>
#admin {
  /* overflow-x: hidden; */
  min-height: 100vh;
  background-color: rgb(64, 63, 63);
  color: white;
  font-size: larger;
}
i {
  color: white;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

thead {
  color: black;
  font-size: 20px;
}
h2 {
  color: black;
  font-size: 50px;
}


td:hover {
  color: white !important;
}
</style>
