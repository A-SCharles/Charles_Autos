<template>
<body id="card">
    <div class="heart">
        <i class="fa-solid fa-cog fa-spin"></i>
    </div>
</body>
    
</template>
<style scoped>
body{
    margin: 0;
    padding: 0;
    /* background-color: rgb(186, 24, 24);
    box-shadow: 0px 5px 25px var(--color-dark); */
    /* background-size: cover;
    background-repeat: no-repeat; */
    
  background-color: var(--color-)
}

.heart{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

}
i{
    color: rgb(0, 0, 0);
    font-size: 100px;
    animation: beat 0.9s infinite;
    text-shadow:
        0 0 5px rgb(255, 2, 2),
        0 0 45px rgb(248, 6, 6),
        0 0 90px rgb(239, 10, 10)
    ;
}
@keyframes beat{
    0%{
        transform: rotateX(0);
    }
    20%{
        transform: scale(1.15);
    }
    40%{
        transform: scale(1.4);
    }
}
</style>