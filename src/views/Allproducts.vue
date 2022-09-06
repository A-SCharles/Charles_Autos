<template>
    <section id="products">
        <div v-if="cars">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <input type="text" class="form-control" v-model="search" placeholder="Search By Name ..." />
                    </div>
                    <div class="col-md-3">

                    </div>
                    <div class="col-md-3">

                    </div>
                    <div class="col-md-3">

                    </div>
                </div>
                <div class="row mx-auto">
                    <Cars v-for="car in cars" :key="car" :car="car" />
                </div>
            </div>
        </div>
        <div v-else>
            <Loading />
        </div>
    </section>
</template>

<script>
import Cars from '@/components/cars.vue';
import Loading from '@/components/loading.vue';
export default {
    components: { Cars, Loading },
    data() {
        return {
            search: "",
            transmission: "All",
            bodystyle: "All",
            manufacturer: "All",
        }
    },
    computed: {
        cars() {
            return this.$store.state.cars
        },
        cars() {
            return this.$store.state.cars?.filter((car) => {
                let isMatch = true;
                if (!car.model.toLowerCase().includes(this.search)) {
                    isMatch = false;
                }
                if (this.transmission !== "All" && this.transmission !== car.transmission) {
                    isMatch = false;
                }
                if (this.bodystyle !== "All" && this.bodystyle !== car.bodystyle) {
                    isMatch = false;
                }
                if (this.manufacturer !== "All" && this.manufacturer !== car.manufacturer) {
                    isMatch = false;
                }
                return isMatch;
            })
        }
    },
    mounted() {
        this.$store.dispatch("getCars")
    },
    methods: {
        sortPrice() {
            let up = this.price
            if (up === "asc") {
                this.$store.state.products.sort((a, b) => {
                    return a.price - b.price;
                });
            }
            else {
                this.$store.state.products.sort((a, b) => {
                    return b.price - a.price;
                });
            }
        },
    },
}
</script>

<style scoped>
#products {
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url("https://i.postimg.cc/J0HXFvCr/logo1.png");
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>