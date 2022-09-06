<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col m-3">
          <h6>
            Company
          </h6>
          <router-link to="/contact">
            <p>Contact us</p>
            
          </router-link>
          <router-link to="/about">
            <p>About us</p>
            
          </router-link>
          <router-link to="/contact">
            <p>Feedback</p>
            
          </router-link>
        </div>
        <div class="col mt-3">
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi
            corrupti voluptas ex tempora perspiciatis amet iure! Omnis nemo
            commodi nesciunt, molestias laudantium expedita. Incidunt facilis
            nam accusantium molestias! Omnis.
          </h6>
        </div>
        <div class="col mt-3">
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            aperiam sed fugiat eveniet quisquam delectus, minus tempore est,
            excepturi, inventore ut consectetur facere totam quia! Iste dicta
            deserunt a iusto.
          </h6>
        </div>
        <div class="col mt-3">
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            aperiam sed fugiat eveniet quisquam delectus, minus tempore est,
            excepturi, inventore ut consectetur facere totam quia! Iste dicta
            deserunt a iusto.
          </h6>
        </div>
        <div class="col m-3">
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            aperiam sed fugiat eveniet quisquam delectus, minus tempore est,
            excepturi, inventore ut consectetur facere totam quia! Iste dicta
            deserunt a iusto.
          </h6>
        </div>
        <div class="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            optio sit! Asperiores provident dolorem, itaque expedita doloremque
            amet quis? Debitis facere alias quos, ea deleniti aliquid quia
            aliquam corporis incidunt!
          </p>
          <hr />
          <div class="row mx-auto lead text-center">
            <p>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-youtube mx-3"></i>
              <i class="bi bi-twitter"></i>
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
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#footer {
  max-height: 10vh;
}
.container {
  min-height: fit-content;
  background-color: rgb(99, 6, 9);
  max-width: 100%;
  color: rgb(13, 8, 9);
}
.col {
  /* width:500px; */
  padding: 10px;
}

h6{
  margin-top:20px;
}
</style>
