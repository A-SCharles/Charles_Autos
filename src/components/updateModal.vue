<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'update' + car.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ car.model }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Model :</label>
                  <input v-model="car.model" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Manufacturer :</label>
                  <input v-model="car.manufacturer" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Body Style :</label>
                  <input v-model="car.bodystyle" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Image URL :</label>
                  <input v-model="car.img" type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Model Year :</label>
                  <input v-model="car.modelyear" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Price :</label>
                  <input v-model="car.MSRP" type="number" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Transmission :</label>
                  <select class="form-select" v-model="car.transmission" name="transmission" id="transmission">
                    <option value="" disabled selected>Select your option</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label class="form-label">Fuel Type :</label>
                  <select class="form-select" v-model="car.fueltype" name="fueltype" id="fueltype">
                    <option value="" disabled selected>Select your option</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            @click="update"
            class="btn"
            data-bs-dismiss="modal"
          >
            Update Car Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
  methods: {
    update() {
      this.$store.dispatch("editCar", this.car);
    },
  },
};
</script>

<style scoped>
  .btn{
  background-color: rgb(0, 0, 0);
  height:40px;
  /* width:202px; */
  color:rgb(223, 4, 4);
  font-weight:bold
}
</style>
