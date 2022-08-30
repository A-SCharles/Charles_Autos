<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
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
              <input v-model="model" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Image URL</label>
              <input v-model="img" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Category</label>
              <input v-model="manufacturer" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Description</label>
              <input v-model="modelyear" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Price</label>
              <input v-model="MSRP" type="number" class="form-control" />
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
          <button type="button" @click="addProd" class="btn btn-primary" data-bs-dismiss="modal">
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
      img: "https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg",
      manufacturer: "",
      modelyear: "",
      MSRP: 0,
    };
  },
  methods: {
    addProd() {
      const payload = {
        model: this.model,
        img: this.img,
        manufacturer: this.manufacturer,
        modelyear: this.modelyear,
        MSRP: this.MSRP,
      };
      this.$store.dispatch("addProd", payload);
    },
  },
};
</script>

<style></style>
