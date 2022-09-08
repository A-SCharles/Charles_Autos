<template>
    <section id="products">
        <div v-if="cars">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2 class="text-light">Filter & Sort</h2>
                    <div class="col-md-8 m-1">
                        <input type="text" class="form-control" v-model="search" placeholder="Search By Name ..." />
                    </div>

                    <div class="col-md-8 m-1">
                        <select v-model="sortMan" @change="sortManu" class="form-select">
                            <option value="" selected disabled>Sort by Manufacturer</option>
                            <option value="desc">A-Z</option>
                            <option value="asc">Z-A</option>
                        </select>
                    </div>

                    <div class="col-md-8 m-1">
                        <select name="transmission" class="form-select" v-model="transmission">
                            <option value="All" selected disabled>Filter by Transmission</option>
                            <option value="All">All</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>
                    </div>
                    <div class="col-md-8 m-1">
                        <select name="bodystyle" class="form-select" v-model="bodystyle">
                            <option value="All" selected disabled>Filter by Body Style</option>
                            <option value="All">All</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="mini-SUV">Mini-suv</option>
                            <option value="Coupe">Coupe</option>
                        </select>
                    </div>
                    <div class="col-md-8 m-1">
                        <select name="manufacturer" class="form-select" v-model="manufacturer">
                            <option value="All" selected disabled>Filter by Manufacturer</option>
                            <option value="All">All</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="BMW">BMW</option>
                            <option value="Cadillac">Cadillac</option>
                        </select>
                    </div>
                    </div>


                <!-- </div> -->
                <!-- <div class="row mx-auto"> -->
                    <div class="col-md-6">
                        <Cars v-for="car in cars" :key="car" :car="car" />
                    </div>
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
            sortMan: "",
        }
    },
    computed: {
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
        sortManu() {
            let cars = this.$store.state.cars
            let sort = this.sortMan
            if (sort === "desc") {
                cars.sort(function (a, b) {
                    var nameA = a.manufacturer.toLowerCase(), nameB = b.manufacturer.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            } else if (sort === "asc") {
                cars.sort(function (a, b) {
                    var nameA = a.manufacturer.toLowerCase(), nameB = b.manufacturer.toLowerCase();
                    if (nameA > nameB) //sort string ascending
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                })
            }
        },
    },
}
</script>

<style scoped>
#products {
    overflow-x: hidden;
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