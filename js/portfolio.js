import data from './allData.js';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

$(function async(){
    

    const {profilo} = data;
    let i = 0;
    let element = $('.profilo-swiper').find('.swiper-wrapper')
    let videosElement = $('.profilo')
    if(profilo.length > 0){
        while( i < profilo.length ){
            element.append(`
            <div class="swiper-slide">
                <button type="button" data-id="${profilo[i].name}">${profilo[i].name}</button>
            </div>`)
            videosElement.append(`<div class="videos" data-set="${profilo[i].name}"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div>`)
            profilo[i].profilo.forEach((current,index)=>{
                videosElement.find(`.videos[data-set="${profilo[i].name}"]`).find('.swiper-wrapper').append(`
                <div class="swiper-slide">
                    <div class="wrapper">
                        <div class="blackScreen">
                            <div class="button" data-profilotext="${index}" data-profilo="${i}">
                                <img src="../assets/logo.png"/>
                            </div>
                        </div>
                        <iframe id="youtube${index+1}" class="video" src="${current.url}?rel=0&loop=1&amp;autoplay=1&mute=1&enablejsapi=1&showinfo=0&playlist=${youtube_parser(current.url)}"  frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>`
                )
            })

            let swiper = new Swiper(`.videos[data-set="${profilo[i].name}"]`, {
                slidesPerView:1,
                spaceBetween: 0,
                // loop: true,
                // mousewheel: true,
                // observer: true
                direction: 'vertical',
                // loop: true,
                // mousewheel: true,
                // observer: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return `
                            <div class="pagination-subtitle ${className}" >
                                <span class="text"> ${profilo[i].profilo[index].title}</span>
                            </div>
                        `;
                    }
                },
            });
            i++
        }
    
    }
$('.profilo-swiper').on('click','button',function(e){
    console.log('swiper clicked '+ e.target.dataset.id);
    let currentName = e.target.dataset.id;
    let videosElement = $('.profilo')
    $('.profilo-swiper').find('button').removeClass('active');
    e.target.className = 'active'

    videosElement.find(`.videos[data-set="${currentName}"]`).show().siblings().hide();
})
var stopAllYouTubeVideos = () => { 
    var iframes = document.querySelectorAll('.video');
    Array.prototype.forEach.call(iframes, iframe => { 
        iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
}
$('.videos .swiper-wrapper').on('click', '.button', function(){
    stopAllYouTubeVideos();
    const mainSet = $(this).data('profilo');
    const subSet  = $(this).data('profilotext')
    const getURL = profilo[mainSet].profilo[subSet].url;

    $('.dialog').show()
    $('#dialog-wrapper').empty();
    $('#dialog-wrapper').append(`
        <iframe id="youtube-dialog${mainSet+1}" class="dialogvideo" src="${getURL}}?rel=0&loop=1&autoplay=1&mute=0&enablejsapi=1&showinfo=0"  allow='autoplay' allowfullscreen frameborder="0" ></iframe>
    `)
    // do something here
});

    const initSwiper = () => {
        let swiper = new Swiper('.profilo-swiper', {
            spaceBetween: 0,
            slidesPerView: 4,
            slideToClickedSlide: true,
            // loop: true,
            // mousewheel: true,
            // observer: true
        });
    }
    initSwiper();
    $('.profilo-swiper button').eq(0).click();
})
