<script setup>
import {ref, onMounted, watch } from 'vue'
import {useRoute, onBeforeRouteLeave, onBeforeRouteUpdate} from 'vue-router'
const openMenu  = ref(false)
const route = useRoute();
let tag = ref('');
const open = ()=>{

}
const hide = () => {

}
onMounted(()=>{
    console.log(route)
})
watch( ()=> route.name ,(pre,next)=>{
    if(pre !== next){
        openMenu.value = false;
    }
   
})
</script>
<template>
    <div :class="['header',{'openMenu  animate__animated animate__fadeIn':openMenu }]" >
        <div class="menu-btn" @click="openMenu = true">
            <i class="bi bi-list"></i>
            <p>{{route.name}}</p>
        </div>
        <div :class="['menu']" >
            <div class="header-title">
                <div class="close" @click="openMenu = false" >
                    <i class="bi bi-x-lg"></i>
                    <p>Close</p>
                </div>
                <router-link to="/" class="home-return">
                    <img src="/src/assets/return.png">
                </router-link>
            </div>

            <div class="link">
                <div class="menu">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">ABOUT US</router-link>
                    <router-link to="/drbeauty">DR.BEAUTY</router-link>
                    <router-link to="/contact">CONTACT</router-link>
                    <router-link to="/shop">SHOP</router-link>
                </div>
            </div>
            <div class="share-wrapper">
                <p class="share-link-title">Follow</p>
                <div class="share-link">
                    <a class="icon">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a class="icon">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a class="icon">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
.share-link-title{
    font-size:20px;
    text-align: center;
    margin-bottom: 0;

}
.share-link{
    .icon{
        display:flex;
        justify-content: center;
        align-items: center;
    }
}
// header
.menu-btn{
    display: flex;
    align-items:center;
    justify-content: center;
    font-size:30px;
    font-weight: bold;
    margin:15px;
    color:#fff;
    p{
        margin-bottom:0;
    }
}
.header-title{
    .close{
        margin-right:20px;
    }
}
.close{
    display:flex;
    margin-top:10px;
    font-size:20px;
    p{
        margin-bottom: 0;
    }
}
.menu{
    width:0;
    transform: all 0.5s ease;
    background-color: #fff;
    justify-content: space-between;
    flex-direction: column;
    height:100%;
    display: none;
    font-size:30px;
    a{
        text-decoration: none;
        color:#000;
        font-weight: bold;
        &:after{
            display: block;
            content:'';
            width:0%;
            border-bottom:1px solid #000;
            transition:all 0.5s ease;

        }
        &.router-link-active{
            &:after{
                width:100%;
            }
        }
        &:hover{
                &:after{
                    width:100%;
                }
            }

    }
}
.header{
    position: fixed;
    left:0;
    top:0;
    display: flex;
    // width:100px;

   
    z-index:10;
    
    z-index: 999;
    a{
        display: block;
        width:100%;
    }
    &.openMenu{
        height:100%;
        
        .menu-btn{
            display: none;
        }
        .menu{
            width:auto;
            padding:15px;
            display: flex;
        }
    }
}
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