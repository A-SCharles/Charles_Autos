<template>
  <div class="card" style="width: 18rem;">
  <img :src="car.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{car.model}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
export default {
props : ['car']
}
</script>

<style>

</style>