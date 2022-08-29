import { createStore } from 'vuex'

export default createStore({
  state: {
    cars : null,
    car : null
  },
  getters: {
  },
  mutations: {
    setCars : (state, cars) => {
      state.cars = cars
    },
    setCar : (state, car) => {
      state.cars = car
    }
  },
  actions: {
    // cars
    getCars : (context) => {
      fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        context.commit("setCars", data.results)
      })
    },
    getCar : (context, id) => {
      fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        context.commit("setCar", data.results[0])
      })
    },
  },
  modules: {
  }
})
