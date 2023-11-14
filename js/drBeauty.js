import data from './allData.js';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
$(function async(){
    const { drBeautyVideos } = data;
    $('.button-resume').on('click',function(){
        $('.drBeautyDialog').addClass('on')
    })

    $('.drBeautyContext .icon').on('click',function(){
        $('.drBeautyDialog').removeClass('on')
    })
})
