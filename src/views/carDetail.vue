<template>
  <section id="single">
    <div v-if="user" class="container">
        <div v-if="car">
        <!-- <div class="card"> -->
        <div class="row">
          <div class="col1">
            <router-link to="/all"><i class="bi bi-arrow-left ps-4"></i></router-link>
            <div class="s2">
              <img :src="car.img" class="img-fluid" alt="">
            </div>
          </div>
          <div class="vr" style="height:91vh; width:1.5px;"></div>
          <div class="col my-auto">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2>Model :</h2>
                  <h2>Fuel Type : </h2>
                  <h2>Manufacturer: </h2>
                  <h2>Transmission :</h2>
                  <h2>Year : </h2>
                  <h2>Body Style: </h2>
                  <h2>Price :</h2>
                </div>
                <div class="col d-flex flex-column">
                  <span> {{ car.model }}</span>
                  <span> {{ car.fueltype }}</span>
                  <span> {{ car.manufacturer }}</span>
                  <span> {{ car.transmission }}</span>
                  <span> {{ car.modelyear }}</span>
                  <span> {{ car.bodystyle }}</span>
                  <span> R{{ car.MSRP }}.00</span>
                </div>
              </div>
            </div>

            <button type="button" class="btn" @click="add">Add to Cart</button>

            <div v-if="msg" class="text-center m-5">
              <h2>{{ msg }}</h2>
            </div>

          </div>

        </div>
      </div>
      <div class="else" v-else>
        <Loader />
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="row vh-100 d-flex justify-content-center align-content-center">
          <div class="text-center">
            <h2 class="text-white">Please Login To View Products.</h2>
            <a class="logs">
              <router-link to="/">Return To Home Page</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import Loader from "@/components/loading.vue"
export default {
  props: ["id"],
  components: { Loader },
  computed: {
    car() {
      return this.$store.state.car
    },
    msg() {
      return this.$store.state.msg;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getCar", this.id)
  },

  methods: {
    add() {
      this.$store.dispatch("addToWishlist", {
        id: this.id
      })
    }
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.logs :hover{
text-decoration: underline;
transition: .5s;
}

.container {
  max-width: 100%;
  /* background-color:100% 100%; */
  --bs-gutter-x: 0px
}

#single {
  min-height: auto;
}

i {
  height: 30px;
  width: 40px;
}

a {
  padding-top: 20px;
  font-size: 30px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.btn {
  height: 50px;
  width: 300px;
  background-color: rgb(255, 254, 254);
  border-radius: 15px;
  margin-right: auto;
  margin-left: 29%;
  margin-top: 10%;
  border-width: 1px;
}

.btn:hover {
  background-color: var(--color-);
}

.col1 {
  height: auto;
  width: 47%;
  background-color: rgb(255, 254, 254);
}

.col {
  margin-left: 2%;
  color: rgb(255, 254, 254);
}

.card {
  position: relative;
  width: 100%;
  height: auto;
  /* max-width:100%; */
  border-width: 0px;
  /* margin:auto; */
  /* overflow:hidden; */
  /* box-shadow:0px 5px 10px black; */

}

.row {
  background-color: rgb(64, 63, 63);
}

h2 {
  font-size: 25px;
  font-weight: bold;
  color: rgb(18, 18, 18);
  margin-bottom: 10px;
}

span {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: normal;
  /* margin-left :70px;
  display: inline-block; */
}

.s2 {
  position: absolute;
  top: 15vh;
  width: 40vw;
  bottom: 0;
  margin-top: 50px;
  /* animation: gg .5s ease-out forwards; */
  /* pointer-events: none; */
}

.s2 {
  /* z-index: 1;  */
  left: 1vw;
  /* background-color: #000; */
  /* transform-name: move-x;
  transform: translateX(50%); */
  animation: 2s move-x;
  /* transition-duration:  */
  /* filter: hue-rotate(90deg); */
}

.vr {
  opacity: 100%;
  background-color: black
}

@keyframes move-x {
  from {
    transform: translateX(-150%);
  }

  to {
    transform: translateX(0%);
  }
}
</style>
