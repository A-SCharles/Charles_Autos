<template>
<div class="card mx-auto m-4 p-3">
  <div class="row">
    <div class="col-md-4">
    <img :src="car.img" style="height:200px; width:320px" class="card-img-top" alt="...">
    <div class="vr" style="width:2px; color:black; height:180px"></div>
    </div>
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{car.model}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <router-link :to="{name: 'single', params: {id: car.id}}">
        <button class="btn btn-primary">
          View Details
        </button>
      </router-link>
    </div>
  </div>
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
  color:white;
  box-shadow: 5px 5px 15px rgb(62, 60, 60);
}
img{
  vertical-align:top
}
/* h5{
  color:rgb(181, 0, 0);
  font-weight:bold;
}
h5:hover{
  color:rgb(255, 255, 255);
  font-weight:bolder;
} */
p{
  font-size:17px;
}
</style>