import router from "@/router";
import {
  createStore
} from "vuex";

const api = "https://charles-autosapi.onrender.com";

export default createStore({
  state: {
    cars: null,
    car: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    users: null,
    wishlist: null,
    token: null || localStorage.getItem("token"),
    admin: false,
    msg: null,
    // loader : "https://i.postimg.cc/xCqJFzD7/hzk6C.gif"
  },
  getters: {},
  mutations: {
    setCars: (state, cars) => {
      state.cars = cars;
      // console.log(cars);
    },
    setCar: (state, car) => {
      state.car = car;
      // console.log(car);
    },
    setUser: (state, user) => {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      // console.log(user);
    },
    setUsers: (state, users) => {
      state.users = users;
      // console.log(user);
    },
    setwishlist: (state, list) => {
      if (list === null) {
        state.wishlist = null;
      } else {
        state.wishlist = list;
        // console.log(list);
      }
    },
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("token", token);
      // console.log(token);
    },
  },
  actions: {
    setAdmin(context) {
      if (context.state.user != null) {
        if (context.state.user.usertype === "admin") {
          context.state.admin = true;
        } else {
          context.state.admin = false;
        }
        context.dispatch('getWishlist')
      }
    },
    // cars
    getCars: async (context) => {
      await fetch(api + "/cars")
        // await fetch("http://localhost:3000/cars")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setCars", data.results);
        });
    },
    getCar: async (context, id) => {
      await fetch(api + "/cars/" + id)
        // await fetch("http://localhost:3000/cars/" + id)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setCar", data.results[0]);
        });
    },
    addCar: async (context, payload) => {
      await fetch(api + "/cars", {
          // await fetch("http://localhost:3000/cars", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.dispatch("getCars");
        });
    },
    editCar: async (context, car) => {
      await fetch(api + "/cars/" + car.id, {
          // await fetch("http://localhost:3000/cars/" + car.id, {
          method: "PUT",
          body: JSON.stringify(car),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.dispatch("getCars");
        });
    },
    deleteCar: async (context, id) => {
      await fetch(api + "/cars/" + id, {
          // await fetch("http://localhost:3000/cars/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.dispatch("getCars");
        });
    },

    //user
    register: async (context, payload) => {
      await fetch(api + "/users", {
          // await fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.msg === "Registration Successful") {
            context.state.msg = data.msg;
            setTimeout(() => {
              context.state.msg = null;
              context.dispatch("login", payload);
              router.push('/')
            }, 5000);
          } else {
            context.state.msg = data.msg;
            setTimeout(() => {
              context.state.msg = null;
            }, 3000);
          }
        });
    },
    login: async (context, payload) => {
      await fetch(api + "/users", {
          // await fetch("http://localhost:3000/users", {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.msg === "Login Successful") {
            context.state.msg = data.msg;
            context.commit("setUser", data.user);
            context.commit("setToken", data.token);
            context.dispatch('setAdmin')
            setTimeout(() => {
              context.state.msg = null;
              router.push('/')
            }, 3000);
          } else {
            context.state.msg = data.msg;
            setTimeout(() => {
              context.state.msg = null;
            }, 3000);
          }
        });
    },
    getUser: async (context, user) => {
      await fetch(api + "/users/" + user)
        // fetch("http://localhost:3000/users/" + user)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // context.state.msg = data.msg;
          context.commit("setUser", data.results[0]);
        });
    },
    getUsers: async (context) => {
      await fetch(api + "/users")
        // fetch("http://localhost:3000/users/" + user)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // context.state.msg = data.msg;
          context.commit("setUsers", data.results);
        });
    },
    editUser: async (context, user) => {
      await fetch(api + "/users/" + user.id, {
          // await fetch("http://localhost:3000/users/" + user.id, {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          context.dispatch("getUser", user.id);
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
        });
    },
    editUserPassword: async (context, user) => {
      await fetch(api + "/users/" + user.id + "/pass", {
          // await fetch("http://localhost:3000/users/" + user.id + "/pass", {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
        });
    },
    deleteUser: async (context, id) => {
      await fetch(api + "/users/" + id, {
          // await fetch("http://localhost:3000/users/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
            context.dispatch('getUsers')
          }, 3000);
        });
    },

    deleteAccount: async (context, id) => {
      await fetch(api + "/users/" + id, {
          // await fetch("http://localhost:3000/users/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.state.user = null;
          context.state.token = null;
          context.state.wishlist = null;
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push('/')
        });
    },

    //wishlist
    getWishlist: async (context, id) => {
      id = context.state.user.id
      await fetch(api + "/users/" + id + "/wishlist", {
          // await fetch("http://localhost:3000/users/" + id + "/wishlist", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data != null) {
            context.commit("setwishlist", JSON.parse(data));
          } else {
            context.commit("setwishlist", null);
          }
        });
    },
    addToWishlist: async (context, item, id) => {
      id = context.state.user.id;
      console.log(item);
      await fetch(api + "/users/" + id + "/wishlist", {
          // await fetch("http://localhost:3000/users/" + id + "/wishlist", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.dispatch("getWishlist", id);
        });
    },
    clearWishlist: async (context, id) => {
      await fetch(api + "/users/" + id + "/wishlist", {
          // await fetch("http://localhost:3000/users/" + id + "/wishlist", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.dispatch("getWishlist", id);
        });
    },
    deleteWishlistItem: async (context, list, id) => {
      id = context.state.user.id;
      await fetch(api + "/users/" + id + "/wishlist/" + list.wishlistid,
          // "http://localhost:3000/users/" + id + "/wishlist/" + list.wishlistid,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          }
        )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          setTimeout(() => {
            context.state.msg = null;
          }, 3000);
          context.dispatch("getWishlist", id);
        });
    },
  },
  modules: {},
});