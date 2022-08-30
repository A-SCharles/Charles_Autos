<template>
  <div id="admin">
    <div class="container text-center p-5">
      <h2 class="text-center">Cars Table</h2>
      <table class="table table-hover">
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
            <td>{{ car.manufacturer }}</td>
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
export default {
  computed: {
    cars() {
      return this.$store.state.cars;
    },
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  components: { AddModal, UpdateModal },
};
</script>

<style scoped>
#admin {
  min-height: 100vh;
}
</style>
