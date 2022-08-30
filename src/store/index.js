import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    cars: null,
    car: null,
    user: null,
    wishlist: null,
    token: null,
    admin: false,
    msg : null,
  },
  getters: {},
  mutations: {
    setCars: (state, cars) => {
      state.cars = cars
      // console.log(cars);
    },
    setCar: (state, car) => {
      state.car = car
      // console.log(car);
    },
    setUser: (state, user) => {
      state.user = user
      // console.log(user);
    },
    setwishlist: (state, list) => {
      state.list = list
      // console.log(list);
    },
    setToken: (state, token) => {
      state.token = token
      // console.log(token);
    },
  },
  actions: {
    // cars
    getCars: async (context) => {
      await fetch("http://localhost:3000/cars")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setCars", data.results)
        })
    },
    getCar: async (context, id) => {
      await fetch("http://localhost:3000/cars/" + id)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setCar", data.results[0])
        })
    },
    addCar: async (context) => {
      await fetch("http://localhost:3000/cars")
        .then((res) => res.json())
        .then((data) => {

        })
    },
    editCar: async (context, car) => {
      await fetch("http://localhost:3000/cars/" + car.id)
        .then((res) => res.json())
        .then((data) => {

        })
    },
    deleteCar: async (context, id) => {
      await fetch("http://localhost:3000/cars/" + id)
        .then((res) => res.json())
        .then((data) => {

        })
    },

    //user
    register: async (context, payload) => {
      await fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("login", payload)
        })
    },
    login: async (context, payload) => {
      await fetch("http://localhost:3000/users", {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.state.msg = data.msg
          context.commit("setUser", data.user)
          context.commit("setToken", data.token)
        })
    },
    editUser: async (context, user) => {
      await fetch("http://localhost:3000/users/" + user.id)
        .then((res) => res.json())
        .then((data) => {

        })
    },
    editUserPassword: async (context, user) => {
      await fetch("http://localhost:3000/users/" + user.id)
        .then((res) => res.json())
        .then((data) => {

        })
    },
    deleteUser: async (context, id) => {
      await fetch("http://localhost:3000/users/" + id)
        .then((res) => res.json())
        .then((data) => {

        })
    },

    //wishlist
    getWishlist: async (context, id) => {
      await fetch("http://localhost:3000/users/" + id + "wishlist")
        .then((res) => res.json())
        .then((data) => {

        })
    },
    addToWishlist: async (context, id) => {
      await fetch("http://localhost:3000/users/" + id + "wishlist")
        .then((res) => res.json())
        .then((data) => {

        })
    },
    clearWishlist: async (context, id) => {
      await fetch("http://localhost:3000/users/" + id + "wishlist")
        .then((res) => res.json())
        .then((data) => {

        })
    },
    deleteWishlistItem: async (context, list) => {
      await fetch("http://localhost:3000/users/" + id + "wishlist/" + list.wishlistid)
        .then((res) => res.json())
        .then((data) => {

        })
    },
  },
  modules: {}
})