<template>
  <!-- <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">
      Navbar
      <img src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg" alt="">
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav> -->
  <nav class="Navbar navbar-dark sticky-top">
    <div class="navbar container-fluid">
      <router-link :to="{ name: 'home' }" class="text-decoration-none">
        <a class="navbar-brand"> ℂ𝕙𝕒𝕣𝕝𝕖𝕤 𝔸𝕦𝕥𝕠𝕤 </a>
      </router-link>
      <button
        class="navbar-toggler justify-content-end"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <img class="profile mx-3" src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg">
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <div class="container">
            <div class="row">
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
          </div>
          <div class="row">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
             <router-link :to="{ name: 'profile' }" class="text-decoration-none">
        <img src="https://i.postimg.cc/YSfNqcz3/5c0f995c86098-thumb900.jpg" />
      </router-link>
          </h5>
          </div>
          </div> 
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <router-link :to="{ name: 'home' }" class="text-decoration-none">
              <a class="navbar-brand"> ℍ𝕠𝕞𝕖 </a>
            </router-link>
      <router-link :to="{ name: 'about' }" class="text-decoration-none">
        <a class="navbar-brand"> 𝔸𝕓𝕠𝕦𝕥 </a>
      </router-link>
      <router-link :to="{ name: 'all' }" class="text-decoration-none">
        <a class="navbar-brand"> ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤 </a>
      </router-link>
      <router-link :to="{ name: 'contacts' }" class="text-decoration-none">
        <a class="navbar-brand"> ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕤 </a>
      </router-link>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>
          <!-- <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

.offcanvas-header img {
  width:260px;
  height: 230px;
  /* margin-right:20px; */
  padding-top:10px;
}
.Navbar{
  background-color: rgb(30, 32, 32);
  height:70px;
}
.navbar-toggler{
  padding:0;
  border:rgb(30, 32, 32);
}
a{
  font-size:30px;
  color:rgb(121, 6, 27);
  font-weight:bold;
  margin-left:2%
}
.profile{
  height:50px;
  width:50px;
  border-radius:50%;
}
.offcanvas{
  width:300px;
  background-color: rgb(30, 32, 32);
}

.btn-close{
color: white;
  /* padding-right:10px; */
  height:30px;
  width:30px;
}
</style>
