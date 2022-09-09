<template>
  <footer id="footer">
    <div class="container p-3">
      <div class="row">
        <!-- <div class="col my-auto m-3 d-flex flex-column"> -->
        <div class="d-sm-flex justify-content-around mx-auto">
          <!-- <a class="link fs-3">
            <router-link to="/contact"> Contact </router-link>
          </a>

          <a class="link fs-3">
            <router-link to="/about"> About us </router-link>
          </a> -->
          <a class="link fs-3 pb-2 text-white">
            <router-link to="/" class="text-decoration-none">
              ℍ𝕠𝕞𝕖
            </router-link>
          </a>
          <a class="link fs-3 pb-2 text-white">
            <router-link to="/about" class="text-decoration-none">
              𝔸𝕓𝕠𝕦𝕥
            </router-link>
          </a>
          <a class="link fs-3 pb-2 text-white">
            <router-link to="/all" class="text-decoration-none">
              ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤
            </router-link>
          </a>
          <a class="link fs-3 pb-2 text-white">
            <router-link to="/contact" class="text-decoration-none">
              ℂ𝕠𝕟𝕥𝕒𝕔𝕥
            </router-link>
          </a>
        </div>
        <!-- </div> -->

        <div class="row mx-auto">
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            optio sit! Asperiores provident dolorem, itaque expedita doloremque
            amet quis? Debitis facere alias quos, ea deleniti aliquid quia
            aliquam corporis incidunt!
          </p>
          <hr />
          <div class="row mx-auto lead text-center">
            <p class="fs-3">
              <a
                class="btn fs-3 mx-3"
                href="https://github.com/A-SCharles"
                target="_blank"
              >
                <i class="fa fa-github"></i>
              </a>

              <a
                class="btn fs-3 mx-3"
                href="https://www.linkedin.com/in/abdus-samad-charles-51bba5227/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
      <footer class="footer mx-auto lead text-center">
        <p>Copyright &copy;2022 ℂ𝕙𝕒𝕣𝕝𝕖𝕤 𝔸𝕦𝕥𝕠𝕤</p>
      </footer>
    </div>
  </footer>
</template>

<style scoped>
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"); */

#footer {
  color: white;
  min-height: fit-content;
  overflow-x: hidden;
}
#footer a{
color: white !important;
}

.container {
  min-height: fit-content;
  background-color: rgb(99, 6, 9);
  max-width: 100%;
}
.col {
  /* width:500px; */
  padding: 10px;
}

h6 {
  margin-top: 20px;
}

.btn {
  transition: .5s;
}

.btn :hover {
  color: lightblue;
}

a.router-link-exact-active {
  filter: invert();
}
</style>
