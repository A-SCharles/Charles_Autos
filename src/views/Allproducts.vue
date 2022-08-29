<template>
    <section id="products">
        <div v-if="cars">
            <div class="container p-3">
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

<style>
</style>