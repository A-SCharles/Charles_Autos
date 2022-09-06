<template>
  <div id="admin">
    <div class="container text-center p-5">
      <h2 class="text-center">ℂ𝕒𝕣𝕤 𝕋𝕒𝕓𝕝𝕖</h2>
      <table class="table table-hover text-white">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">model</th>
            <th scope="col">Price</th>
            <th scope="col">
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
          <tr v-for="car in cars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>
            <router-link :to="{name: 'singleAdmin', params : {id: car.id}}">
              {{ car.manufacturer }}
            </router-link>
            </td>
            <td>{{ car.model }}</td>
            <td>R{{ car.MSRP }}.00</td>
            <td>
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
          <Loader/>
        </tbody>
      </table>
    </div>
  </div>

  <!-- modals -->
  <div v-if="cars">
    <AddModal />

    <div v-for="car in cars" :key="car">
      <UpdateModal :car="car" />
    </div>
  </div>
</template>

<script>
import AddModal from "@/components/addModal.vue";
import UpdateModal from "@/components/updateModal.vue";
import Loader from "@/components/loading.vue"
export default {
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    loader() {
      return this.$store.state.loader;
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
  min-height: 100vh;
  background-color: rgb(64, 63, 63);
  color: white;
}
i{
  color:white
}
a{
  text-decoration: none;
  color:rgb(137, 9, 9);
  font-weight: bold;
}
thead{
  color:black;
  font-size:20px
}
h2{
  color:black;
  font-size:50px;
  font-weight: bold;
}
tr:hover{
color:black
}
</style>
