<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="wishlist" aria-labelledby="wishlist">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="wishlistTitle">Wishlist Items</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-if="wishlist">
                <div v-for="item in wishlist" :key="item">
                    <div class="card">
                        <h2>
                            {{  item.model  }}
                        </h2>
                        <a class="btn" @click="this.$store.dispatch('deleteWishlistItem', item)"><i
                                class="fa-solid fa-trash-can"></i></a>
                    </div>
                </div>

                <div class="my-2">
                    <button class="btn btn-danger" @click="clear">Remove All items from wishlist</button>
                </div>
                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        wishlist() {
            return this.$store.state.wishlist
        }
    },
    mounted() {
        this.$store.dispatch("getWishlist", this.id)
    },
    methods: {
        clear() {
            this.$store.dispatch('clearWishlist', this.id)
        }
    },
}
</script>

<style>
</style>