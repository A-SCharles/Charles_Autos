<template>
    <section id="products">
        <div v-if="cars">
            <div class="container">
                <div class="row mx-auto">
                    <Cars v-for="car in cars" :key="car" :car="car" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Cars from '@/components/cars.vue';
export default {
    components: { Cars },
    computed: {
        cars() {
            return this.$store.state.cars
        }
    },

    mounted() {
        this.$store.dispatch("getCars")
    },
}
</script>

<style scoped>
    .container{
        max-width: 100%;
        --bs-gutter-x:0px;
    }
    #products{
        padding-top:50px;
        padding-bottom:50px;
        background-image: url("https://i.postimg.cc/J0HXFvCr/logo1.png");
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position:bottom;
    }
</style>