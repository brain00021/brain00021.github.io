<script setup>  
  import {ref,computed,onMounted,onUnmounted} from "vue"
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import data from '../assets/data/allData.js'
  const lists = ref(null);
  const memberList = ref(null);
  const second = ref(null);
  const first = ref(null);
  const third = ref(null);
  const emit = defineEmits(['dialogSet']);
  const yt = ref(null);
  const yt2 = ref(null);

  const openDialog = (url,id,dom) => {
    emit('dialogSet',{url,id,currentYtDom: dom})
  }
  const handleScroll = (evt) => {
    const scrollY = window.scrollY
    // decreases as user scrolls
    // first.value.style.opacity =
    //   (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100
    // console.log(scrollY)
    if(scrollY <  second.value.offsetTop){
      first.value.style.top = `calc(${scrollY}px)`;
    }

    // increases as user scrolls
    second.value.style.opacity =
      (scrollY + window.innerHeight - second.value.offsetTop) / 100

    const maxBackgroundSize = 120
    const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

    // zoom the background at a slower rate
    // background.value.style.transform =
    //   'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
    // foreground.value.style.transform =
    //   'scale(' + (100 + backgroundSize) / 100 + ')'
  }
  onMounted(() =>{
    lists.value = data.aboutVideos;
    memberList.value = data.memberData;
    document.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
  })
</script>
<template>
  <div class="aboutWrapper">
    <Dialog ref="homeVideosDialog" @close="close">
      <VueYtframe
        class="dialog-video"
        ref="dialogYt"
        :playerVars="{
          controls:0,
          showinfo:0,
          rel:0,
          autoplay:1,
        }"
        :videoUrl="dialogLink"
      />
    </Dialog>
    <div class="banner" ref="first">
      <div class="bg-videos">
        <div class="wrapper description"> 
          <div class="icon" @click="openDialog(lists?.[0].url,lists?.[0].id,yt)">
              <img class="logoPlayIcon" src="../assets/logo.png" alt="">
          </div>
          <div class="note">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum, maiores a ducimus beatae voluptatibus itaque assumenda labore neque ipsum impedit corrupti numquam. Voluptatibus deserunt eum at natus quasi delectus.</p>
          </div>
      </div>
        <VueYtframe
          class="bg-video__iframe"
          ref="yt"
          :videoUrl="lists?.[0].url"
          height="100vh"
          :playerVars="{
            controls:0,
            showinfo:0,
            rel:0,
            autoplay:1,
            loop:1,
            mute:1,
            allowfullscreen:1
          }"
        />
      </div>
    </div>
    <div class="member-group" ref="second">
      <h3>Actually Humans</h3>
      <div class="member-innder-wrapper">
        <div class="member" :style="{'background-image':`url(${member.member})`}"  v-for="(member,index) in memberList " :key="index">
          <div class="member-cover" :style="{'background-image':`url(${member.member_hover})`}"></div>
        </div>
      </div>

    </div>
    <div class="banner" ref="thrid">
      <div class="bg-videos">
        <div class="wrapper"> 
          <div class="icon" @click="openDialog(lists?.[1].url,lists?.[1].id,yt2)">
              <img class="logoPlayIcon" src="../assets/logo.png" alt="">
          </div>
      </div>
        <VueYtframe
          class="bg-video__iframe"
          ref="yt2"
          :videoUrl="lists?.[1].url"
          height="100vh"
          :playerVars="{
            controls:0,
            showinfo:0,
            rel:0,
            autoplay:1,
            loop:1,
            mute:1,
            allowfullscreen:1
          }"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.aboutWrapper{
  position: relative;
  height:fit-content;
  width:100vw;
  background:#000;
  .description{
    background: rgba(#000,0.7);
    flex-direction: column;
    .icon{
      width:auto;
      height:auto;
    }
    .note{
      color:#fff;
      max-width:300px;
      margin:0 auto;
    }
    .logoPlayIcon{
      width:300px;
      height:300px;
    }

  }
  .bg-video__iframe{
    top:unset;
    left:unset;
    transform:none;
  }
}
.banner{
  position: relative;
  top:0;
  width:100vw;
  position: relative;
  
  // min-height: 100vh;
  height:100vh;
  overflow: hidden;
  opacity: 1;
  scroll-behavior: smooth;

}
.member-group{
  position: relative;
  width:100vw;
  height:100vh;
  background: url(../assets/aboutUs.jpg) no-repeat center center;
  background-size:cover;
  z-index: 10;
  display:flex;
  align-items: center;
  justify-content: center;
  .member-innder-wrapper{
    height:100%;
    position: relative;
    overflow: hidden;
    width:100%;
  }
  h3{
    color:#fff;
    font-size:60pt;
    position: absolute;
    top:-150px;
    left:0;
    right:0;
    margin:auto;
    text-align: center;
    padding:1em 0;
  }
  .member{
    position: absolute;
    width:300px;
    height:500px;
    background-size: 100%;
    &:nth-child(1){
      margin:auto;
      top:0;
      bottom:0;
      left:100px;
      transform: scale(1.5);
    }
    &:nth-child(2){
      top: 800px;
      left: 330px;
    }
    &:nth-child(3){
      right:100px;
      transform: scale(1.3);
      top:0;
      bottom:0;
      margin:auto;
    }
    &:nth-child(4){
      right:350px;
      // transform: scale(1.3);
      top:0;
      margin:auto;

    }
    &:hover{
      .member-cover{
        display: none;
      }
    }
    .member-cover{
      position: absolute;
      width:100%;
      height:100%;
      background-size: 100%;
    }
  }
}
</style>