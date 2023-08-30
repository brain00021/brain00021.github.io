<script setup>
    import {ref} from "vue"
    import Dialog from'../components/Dialog.vue'
    // import { YoutubeIframe } from '@vue-youtube/component';
    let data = [{
        videos:[{


        }]
    }]
    const yt = ref(null)
    const homeVideosDialog = ref(null)
    
    const onReady = (event) => {

      debugger;
      yt.value.playVideo()
    }
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
    const test = (event) => {
      homeVideosDialog.value.show();
      yt.value.pauseVideo()
    }
    const close = (event) => {
      yt.value.playVideo()
    }
</script>
<template>
    <Dialog ref="homeVideosDialog" @close="close">
      <VueYtframe
        class="dialog-video"
        ref="yt2"
        :videoUrl="`https://www.youtube.com/embed/biWk-QLWY7U`"
      />
    </Dialog>
    <div class="bg-video">
      <div class="wrapper">
          <div class="icon" @click="test">
              <img src="../assets/logo.png" alt="">
          </div>
      </div>
      <VueYtframe
        class="bg-video__iframe"
        ref="yt"
        :videoUrl="`https://www.youtube.com/embed/biWk-QLWY7U`"
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
        @ready="onReady"
      />
        <!-- <iframe id="existing-iframe-example" class="bg-video__iframe" src="https://www.youtube.com/embed/biWk-QLWY7U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allowfullscreen></iframe> -->
        <!-- <youtube-iframe :video-id="YT_VIDEO_ID" :player-parameters="YT_PLAYER_PARAMS"></youtube-iframe>
        <YoutubeIframe video-id="dQw4w9WgXcQ" @ready="onReady"  frameborder="0" allowfullscreen/> -->
        
    </div>
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