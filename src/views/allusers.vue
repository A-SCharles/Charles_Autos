<template>
    <section id="users">
        <div class="container text-center p-5">
            <h2 class="text-center">𝕌𝕤𝕖𝕣𝕤 𝕋𝕒𝕓𝕝𝕖</h2>
            <table class="table table-hover text-white my-5">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Type</th>
                        <th scope="col">
                            <!-- <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-regular fa-square-plus"></i>
                            </a> -->
                        </th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>
                            <!-- <router-link :to="{name: 'singleAdmin', params : {id: user.id}}"> -->
                            {{ user.username }}
                            <!-- </router-link> -->
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.usertype }}</td>
                        <td>
                            <a class="btn" data-bs-toggle="modal" :data-bs-target="'#user' + user.id">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>

                            <a class="btn" @click="this.$store.dispatch('deleteUser', user.id)"><i
                                    class="fa-solid fa-trash-can"></i></a>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Loader />
                </tbody>
            </table>
        </div>

        <!-- modals -->
        <div v-if="users">
            <div v-for="user in users" :key="user">
                <UserUpdate :user="user"/>
            </div>
        </div>

    </section>
</template>

<script>
import Loader from "@/components/loading.vue"
import UserUpdate from "@/components/userUpdate.vue";
export default {
    components: { Loader, UserUpdate },
    computed: {
        users() {
            return this.$store.state.users;
        },
        loader() {
            return this.$store.state.loader;
        },
    },

    mounted() {
        this.$store.dispatch("getUsers");
    },
}
</script>

<style scoped>
#users {
    background-color: rgb(64, 63, 63);
    color: white;
    min-height: 100vh;
    font-size: larger;
}

h2 {
  color: black;
  font-size: 50px;
  /* font-weight: bold; */
  color: white;
}

td a {
    color: white;
}

td:hover {
    color: white !important;
}
</style>