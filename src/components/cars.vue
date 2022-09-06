<template>
<div class="card mx-auto m-4 p-3">
  <router-link :to="{name: 'single', params: {id: car.id}}">
  <div class="row">
    <div class="col-md-4">
    <img :src="car.img" style="height:200px; width:320px" class="card-img-top" alt="...">
  </div>
    <div class="vr" style="width:1px; color:black; height:180px; margin-right: 10px;"></div>
    
    <div class="col-md-7">
      <!-- <div class="card-body"> -->
        <h5 class="card-title">{{car.model}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <!-- </div>  -->
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
  height:220px;
  width:auto;
  /* background-color: rgb(0, 0, 0);
  color:white; */
}
.card:hover{
  background-color: var(--color-);
  box-shadow: 5px 5px 15px rgb(62, 60, 60);
}
img{
  vertical-align:top
}
/* img:hover{
  height:240px;
  width:auto;
} */
a{
  text-decoration:none;
  color:black;
  font-size:17px;
}
a:hover{
  color:white;
  /* font-weight:bold; */
  /* width:300px; */
}
.row{
  --bs-gutter-x:0px;
}
/* h5{
  color:rgb(181, 0, 0);
  font-weight:bold;
}
h5:hover{
  color:rgb(255, 255, 255);
  font-weight:bolder;
} */
/* .vr:hover{
  color:rgb(92, 92, 92)
} */
</style>