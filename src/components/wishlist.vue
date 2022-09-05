<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="wishlist" aria-labelledby="wishlist">
        <div class="offcanvas-header">
            <h2 class="offcanvas-title mx-auto" id="wishlistTitle">𝕎𝕚𝕤𝕙𝕝𝕚𝕤𝕥</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-if="wishlist">
                <div v-for="item in wishlist" :key="item">
                    <div class="row">
                        <div class="col ms-0 ps-0 my-auto">
                            <img :src="item.img" class="img-fluid" alt="" style="height:70px; width:110px;">
                        </div>
                        <div class="col pt-3 mx-auto">
                            <h4>
                               {{  item.model  }} 
                            </h4>
                            
                        </div>
                        <div class="vr" style="height:auto; padding:0px; margin-bottom:6px; margin-top:6px"></div>
                        <a class="col-2 btn my-auto me-2" @click="this.$store.dispatch('deleteWishlistItem', item)"><i class="fa-solid fa-trash-can"></i></a>
                    </div>
                </div>

                <div class="my-2 text-center">
                    <button class="btn text-white" @click="clear">Remove All items from wishlist</button>
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
.row{
    background-color:rgba(102, 101, 101, 0.082);
    box-shadow:0px 5px 5px rgb(29, 28, 28);
    color:rgb(11, 11, 11);
    margin-bottom:10px;
    height:auto;
}
.offcanvas-body{
    background-color: rgb(64, 63, 63);
}
.offcanvas-header{
    background-color: rgb(64, 63, 63);
}
.offcanvas{
    width:400px;
    border-width:1px;
    border-color:rgb(0, 0, 0);
}
/* router-link{
    height:50px 
    text-decoration:none;
    color:white;
} */
a {
    text-decoration:none;
    color:bisque
}
.offcanvas-title{
    color:rgb(144, 2, 2);
    font-weight:bold
}

/* .btn {
    color:rgb(144, 2, 2);
} */
</style>