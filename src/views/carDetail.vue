<template>
  <section id="single">
    <div v-if="car">
      <div class="container p-3">
        <div class="card">
            <div class="row">
            <div class="col-md-4">
              <img :src="car.img" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2><span>Model : </span>{{car.model}}</h2>
                <h2><span>Fuel Type : </span>{{car.fueltype}}</h2>
                <h2><span>Manufacturer: </span>{{car.manufacturer}}</h2>
                <h2><span>Transmission : </span>{{car.transmission}}</h2>
                <h2><span>Year : </span>{{car.modelyear}}</h2>
                <h2><span>Body Style: </span>{{car.bodystyle}}</h2>
                <h2><span>Price : </span>R{{car.MSRP}}.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Loading</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    car() {
      return this.$store.state.car
    }
  },
  mounted() {
    this.$store.dispatch("getCar", this.id)
  },
};
</script>

<style scoped>
#single {
  min-height: 100vh;
}
</style>
