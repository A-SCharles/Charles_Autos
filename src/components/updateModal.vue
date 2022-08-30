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
      <div class="modal-content">
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
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Title :</label
              >
              <input v-model="car.model" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Image URL</label>
              <input v-model="car.img" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Category</label>
              <input
                v-model="car.manufacturer"
                type="text"
                class="form-control"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Description</label>
              <input v-model="car.modelyear" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Price</label>
              <input v-model="car.MSRP" type="number" class="form-control" />
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
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Update Caruct
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

<style scoped></style>
