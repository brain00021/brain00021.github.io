<template>
    <div class="footer-info">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="info">
            <p>myschedulestudio@gmail.com</p>
            <p>Taipei.Taiwan</p>
        </div>
        <div class="info">
            <p>©️ COPYRIGHT </p>
        </div>
    </div>
</template>

<style lang="scss">
.footer-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:100px;
  border-top:1px solid white;
  padding:1em;
  color:#fff;
  .logo{
    width:50px;
    height:50px;
    img{
      width:100%;
    }
  }
  .info{
    display: flex;
    text-align: center;
    color:#fff;
    align-items: center;
    flex-direction: column;
    p{
      margin-bottom: 0;
    }
  }
}
</style>