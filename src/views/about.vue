<template>
  <div id="about">
    <div class="container">
      <div class="row8">
        <div class="col">
          <figure>
            <aside>
              GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img" /></span
              >GET BETTER DEALS <span>10%</span> OFF<span
                ><img
                  src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
                  id="img"
              /></span>
            </aside>
            <!-- <h5>LOVE LOVE KOVE key key  key</h5> -->
          </figure>
        </div>
      </div>

      <div class="container">
        <div class="row mx-auto p-1">
          <div class="col-md-6 p-1 my-auto">
            <h1 class="text-center">
              Welcome to Charles Autos.
              A Place to Buy AutoMobiles.
            </h1>
          </div>
          <div class="col-md-6 p-2">
            <img
              class="img-fluid"
              src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png"
            />
          </div>
        </div>

        <div class="row m-3">
          <div class="col-md-2">
            <h2>About Us</h2>
          </div>

          <div class="col-md-4 mx-auto img-fluid">
            <img
              class="img-fluid" id="nd"
              src="https://i.postimg.cc/sg2XKFMM/2022-Toyota-Corolla-Apex-Exterior.webp"
            />
          </div>
          <div class="col-md-5 ms-auto text-center" id="middle">
            <p>
              We advertise many different vehicles with different body styles, from different manufacturers.
            </p>
            <p>
              At Charles-Autos make an effort to understand what the customer wants. We value diversity and treat all people with equal and mutual respect.
            </p>
          </div>
        </div>

        <div class="row m-3">
          <h2 class="col-md-6  m-auto">Our Team</h2>
          <div class="col-md-6 d-lg-flex mx-auto">
            <img
              class="img-fluid rounded-circle"
              id="img"
              src="https://i.postimg.cc/x8w6tG9m/navLogo.png"
            />
            <img
              class="img-fluid rounded-circle"
              id="img"
              src="https://i.postimg.cc/yYwNW7tJ/s3.jpg"
            />
          </div>
        </div>

        <div class="row m-3">
          <div class="col-md-2">
            <img
              class="img-fluid" id="rd"
              src="https://i.postimg.cc/sg2XKFMM/2022-Toyota-Corolla-Apex-Exterior.webp"
            />
          </div>
          <div class="col-md-5 mx-auto text-center py-auto px-4" id="side">
            <h2>
              About Our<br />
              Founder
            </h2>
          </div>
          <div class="col-md-5 p-3">
            <p>
              Charles-Autos is built on a foundation where we sell your favourite car brands. We know cars are the standard mode of transport, and we are here to help you with that. Our goal is customer satisfaction here at Charles-Autos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* margin: 0; */
  padding: 0;
}

#about {
  background-color: black;
  color: white;
  overflow-x:hidden ;
}

#img {
  height: auto;
  width: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  /* margin-left: 30px;
  margin-right: 6px; */
  object-fit: cover;
}
#nd{
  height:100%;
  width:auto
}

.img-fluid {
  border-radius: 10px;
}

span #img {
  height: 60px;
  border-radius: 0px;
}
h1{
  color: rgb(145, 1, 20);
}
h2{
  writing-mode: vertical-rl;
text-orientation: mixed;
}
span {
  color: red;
  font-size: 22px;
  font-weight: bolder;
}
p{
  font-size:20px;
  font-weight:300
}
.row8 {
  height: 60px;
  width: 100%;
  overflow: hidden;
  position: relative;
  float: left;
  color: white;
  background-color: rgb(0, 0, 0);
}
.row8 figure {
  position: absolute;
  width: 200%;
  animation: 10s slide linear infinite;
}
@keyframes slide {
  from {
    transform: translateX(-34.35%);
  }
  to {
    transform: translateX(0%);
  }
}
@media screen and (max-width:768px){
  h2{
    writing-mode: lr;
text-orientation: none;
font-size:30px;
font-weight:bold;
margin-bottom:20px;
  }
  #img{
    margin-top:20px;
  }
}
</style>
