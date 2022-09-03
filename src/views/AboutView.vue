<template>
  <div id="about">
    <div class="container">
      <div class="row1">
        <div class="col1 my-auto">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, delectus consectetur. Minus hic adipisci minima placeat expedita, sed nisi nam illo earum distinctio suscipit sit, laborum dicta iste delectus natus.
          </h2>
        </div>
        <div class="col img-fluid">
          <img src="https://i.postimg.cc/CxMYYj0X/New-2023-Honda-Passport.png">
        </div>
      </div>
      <div class="row2">
        <div class="col7">

        </div>
        <div class="col2">
          
        </div>
        <div class="col8">

        </div>
      </div>
      <div class="row3">
        <div class="col img-fluid">
          <img src="https://i.postimg.cc/sg2XKFMM/2022-Toyota-Corolla-Apex-Exterior.webp">
        </div>
        <div class="col1">
          
        </div>
      </div>
      <div class="row4">
        <div class="col3">

        </div>
        <div class="col">
          
        </div>
      </div>
      <div class="row1">

      </div>
      <div class="row3">
        <div class="col img-fluid">
          <img src="https://i.postimg.cc/sg2XKFMM/2022-Toyota-Corolla-Apex-Exterior.webp">
        </div>
        <div class="col1">
          
        </div>
      </div>
      <div class="row8">
        <div class="col">
          <figure>
        <p>LOVE LOVE KOVE key key <span>key</span> key</p>
        <p>LOVE LOVE KOVE key key <span>key</span> key</p>
      </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about{
  max-width:100%;
}
  .container{
    padding:0px;
    margin:0px;
    max-width:100%;
  }
.col{
  background-color:rgb(77, 38, 104);
  width:50%;
}
.col1{
  /* background-color:rgb(77, 38, 104); */
  width:50%;
}
h2{
  /* width:43%; */
}

.row8{
  height:60px;
  width:100%;
  overflow:hidden;
  position:relative;
  float:left;
  background-color: antiquewhite;
}
.row1{
  height:500px;
  width:100%;
  background-color:rgb(232, 98, 15);
}
.row{
  height:500px;
  width:100%;
  background-color:rgb(91, 165, 42);
}
.row2{
  height:500px;
  width:100%;
  background-color:rgb(220, 28, 28);
}
.row4{
  height:500px;
  width:100%;
  background-color:blue
}
img{
  width:100%;
}
h2{
  margin:0px;
}
.row8 figure{
  position:absolute;
  width:100%;
  animation: 3s slide ease-in-out infinite ;
}
@keyframes slide{
  from {
    transform:translateX(0%);
  }
  to {
    transform:translateX(90%);
  }
}
</style>
