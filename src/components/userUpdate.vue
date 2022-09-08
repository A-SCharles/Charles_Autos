<template>
    <!-- Modal -->
    <div class="modal fade" :id="'user' + user.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ user.username }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Username :</label>
                                    <input v-model="user.username" type="text" class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Firstname :</label>
                                    <input v-model="user.firstname" type="text" class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Surname :</label>
                                    <input v-model="user.surname" type="text" class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Email :</label>
                                    <input v-model="user.email" type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Profile Image URL :</label>
                                    <input v-model="user.profile" type="text" class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">User Type :</label>
                                    <input v-model="user.usertype" type="text" class="form-control" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Password :</label>
                                    <input v-model="user.password" type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" @click="update" class="btn btn-primary" data-bs-dismiss="modal">
                        Update User Details
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ["user"],
    methods: {
        update() {
            this.$store.dispatch("editUserPassword", this.user);
        },
    },
};
</script>
  
<style scoped>

</style>
  