
<script setup>
    import {ref,computed,onMounted, } from "vue"
    // import Dialog from'../components/Dialog.vue'
    import data from '../assets/data/allData.js'
    import {
    Keyboard,
    Mousewheel,
  } from 'swiper/modules'
    import {
      Swiper,
      SwiperSlide,
  } from 'swiper/vue';
  // SwiperCore.use([Keyboard, Mousewheel])

  const  modules = [Keyboard, Mousewheel]
  const yt = ref(null)
  const dialogYt = ref(null);
  const dialogLink = ref(null)
  const homeVideosDialog = ref(null)
  const lists = ref(null)
  const emit = defineEmits(['dialogSet'])

  const onStateChange = (event) => {
    if (event.getPlayerState() === 1) {
      // control the frames using the template reference
      debugger
      yt.value.forEach((video) => {
          // if (video.getVideoUrl() !== event.getVideoUrl()) {
          //   video.pauseVideo()
          // }
      })
    }
  }
  
  const openDialog = (url,id) => {

    emit('dialogSet',{url,id,currentYtDom: yt})
  }
  // const close = (event) => {
  //   dialogYt.value.pauseVideo();
  //   console.log(dialogYt,'test')
  //   yt.value.forEach((video) => {
      
  //     video.playVideo()
  //   })
  // }
  onMounted(() =>{
    lists.value = data.homeVideos;
    console.log(lists.value,'test')
  })
</script>
<template>
    <!-- <Dialog ref="homeVideosDialog" @close="close">
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
    </Dialog> -->
    <swiper
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :mousewheel="true" 
      :direction="'vertical'"
    >
      <swiper-slide v-for="(list,index) in lists" :key="index">      
        <div class="bg-video">
          <div class="wrapper"> 
              <div class="icon" @click="openDialog(list.url,list.id)">
                  <img class="logoPlayIcon" src="../assets/logo.png" alt="">
              </div>
          </div>
          <VueYtframe
            class="bg-video__iframe"
            ref="yt"
            :videoUrl="list.url"
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
      </swiper-slide>
    </swiper>
</template>

<style lang="scss">
:root {
  --video-width: 100vw;
  --video-height: 100vh;
  
  @media (min-aspect-ratio: 16/9) {
    --video-height: 56.25vw;
  }

  @media (max-aspect-ratio: 16/9) {
    --video-width: 177.78vh;
  }
}
.swiper{
  height:100vh;
}
.dialog-video{
  width: fit-content;
    height: fit-content;
    min-width: 70vw;
    min-height: 54vh;
}

.wrapper{
    background:rgba(#000,0.5);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
        height:50px;
        width:50px;
        img{
            width:100%;
        }
    }
}

.bg-video {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.bg-video__iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--video-width);
  height: var(--video-height);
  transform: translate(-50%, -50%);
}
</style>