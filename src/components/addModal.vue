



<template>
  <!-- manufacturer, bodystyle, model, modelyear, MSRP, fueltype, transmission, img -->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Model :</label>
                  <input v-model="model" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Manufacturer :</label>
                  <input v-model="manufacturer" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Body Style :</label>
                  <input v-model="bodystyle" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Image URL :</label>
                  <input v-model="img" type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Model Year :</label>
                  <input v-model="modelyear" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Price :</label>
                  <input v-model="MSRP" type="number" class="form-control" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Transmission :</label>
                  <select class="form-select" v-model="transmission" name="transmission" id="transmission">
                    <option value="" disabled selected>Select your option</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label class="form-label">Fuel Type :</label>
                  <select class="form-select" v-model="fueltype" name="fueltype" id="fueltype">
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" @click="addProd" class="btn" data-bs-dismiss="modal">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "",
      manufacturer: "",
      bodystyle: "",
      fueltype: "",
      transmission: "",
      img: "https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg",
      modelyear: 2022,
      MSRP: 0,
    };
  },
  methods: {
    addProd() {
      const payload = {
        model: this.model,
        manufacturer: this.manufacturer,
        bodystyle : this.bodystyle,
        fueltype : this.fueltype,
        transmission : this.transmission,
        img: this.img,
        modelyear: this.modelyear,
        MSRP: this.MSRP,
      };
      this.$store.dispatch("addCar", payload);
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
