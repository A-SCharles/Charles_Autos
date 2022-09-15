<template>
  <section id="adminsingle">
    <div v-if="car" class="container">
      <div class="container mx-auto">
        <!-- <router-link to="/admin"
          ><i class="bi bi-arrow-left ps-4"></i
        ></router-link> -->
        <div class="row mx-auto">
          <div class="col-md-6 mx-auto s2">
              <img :src="car.img" class="img-fluid" alt="" />
              <div class="row mx-auto"> 
                <table class="table text-white">
                    <!-- <tbody> -->
                        <tr>
                            <td><p class="fs-5">Model :</p></td>
                            <td><p class="fs-5">{{ car.model }}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Fuel Type :</p></td>
                            <td><p class="fs-5">{{ car.fueltype }}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Manufacturer :</p></td>
                            <td><p class="fs-5">{{car.manufacturer}}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Transmission :</p></td>
                            <td><p class="fs-5">{{car.transmission}}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Year :</p></td>
                            <td><p class="fs-5">{{car.modelyear}}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Body Style :</p></td>
                            <td><p class="fs-5">{{car.bodystyle}}</p></td>
                        </tr>
                        <tr>
                            <td><p class="fs-5">Price :</p></td>
                            <td><p class="fs-5">{{car.MSRP}}</p></td>
                        </tr>
                    <!-- </tbody> -->
                </table>
                <!-- <div class="col">
                  <h2>Model :</h2>
                  <h2>Fuel Type :</h2>
                  <h2>Manufacturer:</h2>
                  <h2>Transmission :</h2>
                  <h2>Year :</h2>
                  <h2>Body Style:</h2>
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
                </div> -->
            </div>
            <!-- <div>
                <button type="button" class="btn" @click="add">Add to Wishlist</button>
            </div> -->
          </div>

          <!-- <div class="vr"></div> -->

          <!-- <div class="col-md-6 my-auto">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2>Model :</h2>
                  <h2>Fuel Type :</h2>
                  <h2>Manufacturer:</h2>
                  <h2>Transmission :</h2>
                  <h2>Year :</h2>
                  <h2>Body Style:</h2>
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

            <button type="button" class="btn" @click="add">Add to Wishlist</button>
            <div v-if="msg" class="text-center m-5">
              <h2>{{ msg }}</h2>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </section>
</template>

<script>
import Loader from "@/components/loading.vue";
export default {
  props: ["id"],
  components: { Loader },
  computed: {
    car() {
      return this.$store.state.car;
    },
    msg() {
      return this.$store.state.msg;
    },
  },
  mounted() {
    this.$store.dispatch("getCar", this.id);
  },

  methods: {
    add() {
      this.$store.dispatch("addToWishlist", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
#adminsingle {
  min-height: 100vh;
  background-color: rgb(64, 63, 63);
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
  background-color: rgba(64, 64, 64, 0.725);
  border-radius: 15px;
  margin-right: auto;
  margin-left: 38%;
  margin-top: 10%;
  border-width: 1px;
}

.btn:hover {
  background-color: var(--color-);
}



h2 {
  /* font-size: 25px; */
  font-weight: bold;
  /* color: rgb(18, 18, 18); */
  /* margin-bottom: 10px; */
}

span {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: normal;
}

/* .s2 {
  position: absolute;
  top: 15vh;
  width: 40vw;
  bottom: 0;
}

.s2 {
  left: 1vw;
  animation: linear 1.0s forwards;
  animation: 2s move-x;
} */

.vr {
  opacity: 100%;
  background-color: black;
}

@keyframes move-x {
  0% {
    transform: translateX(-150%);
  }

  100% {
    transform: translateX(50%);
  }
} 
</style>
