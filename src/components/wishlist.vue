<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="wishlist" aria-labelledby="wishlist">
        <div class="offcanvas-header">
            <h2 class="offcanvas-title mx-auto" id="wishlistTitle">Wishlist Items</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-if="wishlist">
                <div v-for="item in wishlist" :key="item">
                    <div class="card">
                        <h4 class="pt-3 mx-auto">
                            {{  item.model  }}
                        </h4>
                        <a class="btn" @click="this.$store.dispatch('deleteWishlistItem', item)"><i
                                class="fa-solid fa-trash-can"></i></a>
                    </div>
                </div>

                <div class="my-2">
                    <button class="btn" @click="clear">Remove All items from wishlist</button>
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
        },
        msg(){
        return this.$store.state.msg
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

<style scoped>
    .card{
background-color:rgba(102, 101, 101, 0.082);
box-shadow:0px 5px 5px rgb(29, 28, 28);
color:rgb(197, 195, 195);
padding-bottom:9px;
    }
.offcanvas-body{
    background-color: rgb(64, 63, 63);
}
.offcanvas-header{
    background-color: rgb(64, 63, 63);
}
.offcanvas{
    border-width:1px;
    border-color:black;
}
/* router-link{
    /* height:50px 
    text-decoration:none;
    color:white;
} */
a {
    text-decoration:none;
    color:bisque
}
.offcanvas-title{
    color:rgb(121, 6, 27);
    font-weight:bold
}
</style>