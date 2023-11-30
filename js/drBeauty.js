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


    const initSwiper = () => {
        let swiper = new Swiper('.profilo-swiper', {
            slidesPerView:1,
            spaceBetween: 0,
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
                            <span class="text"> ${drBeautyVideos[index].title}</span>
                        </div>
                    `;
                }
            },
        });
    }
    let i =0;
    const init = ()=>{
        let element =$('.profilo-swiper').find('.swiper-wrapper')
        while( i < drBeautyVideos.length ){
            element.append(`
            <div class="swiper-slide">
                
                <div class="wrapper">
                    <div class="blackScreen">
                        <div class="button" data-set="${i}" >
                            <img src="../assets/logo.png"/>
                        </div>
                    </div>
                    <iframe id="youtube${i+1}" class="video" src="${drBeautyVideos[i].url}?rel=0&loop=1&amp;autoplay=1&mute=1&enablejsapi=1&showinfo=0&playlist=${youtube_parser(drBeautyVideos[i].url)}"  frameborder="0" allowfullscreen></iframe>
                </div>
            </div>`)
            i++
        }
    }
    var stopAllYouTubeVideos = () => { 
        var iframes = document.querySelectorAll('.video');
        Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    }
    $('.swiper-wrapper').on('click', '.button', function(){
        stopAllYouTubeVideos();
        const set  = $(this).data('set')
        $('.dialog').show()
        $('#dialog-wrapper').empty();
        $('#dialog-wrapper').append(`
            <iframe id="youtube-dialog${set+1}" class="dialogvideo" src="${drBeautyVideos[set].url}?rel=0&loop=1&autoplay=1&mute=0&enablejsapi=1&showinfo=0"  allow='autoplay' allowfullscreen frameborder="0" ></iframe>
        `)
        // do something here
    });
    const gogo = async() =>{
        await init();
        await initSwiper();
    }

    $('#submit').on('click', function(){
        debugger;
        event.preventDefault();
        let email = 'mssdrbeauty@gmail.com';
        let subject = $('#subject')[0].value || '';
        let emailBody = $('#message')[0].value || '';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    })
    gogo();
})
