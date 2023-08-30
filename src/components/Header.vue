<template>
    <div class="header">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <div class="share-link">
            <div class="icon">
                 <i class="bi bi-facebook"></i>
            </div>
            <div class="icon">
                 <i class="bi bi-instagram"></i>
            </div>
            <div class="icon">
                <i class="bi bi-youtube"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.share-link{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .icon{
        i{
            font-size:20px;
        }
    }
}
</style>