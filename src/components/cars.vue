<template>
<div class="card mx-auto m-4 p-3">
  <router-link :to="{name: 'single', params: {id: car.id}}">
  <div class="row">
    <div class="col-md-7 mx-auto">
    <img :src="car.img" class="img-fluid" alt="...">
  </div>
    <!-- <div class="vr" style="width:1px; color:black; height:180px; margin-right: 10px;"></div> -->
    
    <div class="col-md-5 my-auto">
      <div class="card-body">
        <h5>{{car.manufacturer}} {{car.model}} from only R{{car.MSRP}}.00</h5>

        <div class="row">
          <div class="col">
            <i class="fa fa-gears mx-1"></i>
            <span>{{car.transmission}}</span>
          </div>
          <div class="col">
            <i class="fas fa-gas-pump mx-1"></i>
            <span>{{car.fueltype}}</span>
          </div>
          <div class="col">
            <i class="fa-solid fa-car mx-1"></i>
            <span>{{car.bodystyle}}</span>
          </div>
        </div>
      </div> 
    </div>
  
</div>
</router-link>
</div>
</template>

<script>
export default {
props: ["car"],
}
</script>

<style scoped>
.card{
  width:auto;
}
.card:hover{
  /* background-color: var(--color-); */
  background-color: rgb(121, 6, 27);
  box-shadow: 5px 5px 15px rgb(62, 60, 60);
}

.card:hover a{
  color:white;
}


img{
  vertical-align:top
}

a{
  text-decoration:none;
  color:black;
  font-size:17px;
}

.row{
  --bs-gutter-x:0px;
}

img {
  object-fit: cover;
}
</style>