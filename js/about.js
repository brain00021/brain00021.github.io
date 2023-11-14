import data from './allData.js';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
$(function async(){
    

    const {aboutVideos , memberData} = data;
    $('.aboutVideos1').append(`
        <div class="iframe-videos">
            <iframe  class="video" src="${aboutVideos[0].url}?rel=0&autoplay=1&mute=1&enablejsapi=1&showinfo=0"  frameborder="0" ></iframe>
        </div>
    `)
    $('.aboutVideos2').append(`
        <div class="iframe-videos">
            <iframe  class="video" src="${aboutVideos[1].url}?rel=0&autoplay=1&mute=1&enablejsapi=1&showinfo=0"  frameborder="0" ></iframe>
        </div>
    `)

    var stopAllYouTubeVideos = () => { 
        var iframes = document.querySelectorAll('.video');
        Array.prototype.forEach.call(iframes, iframe => { 
          iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
       });
    }
    for(let i = 0; i < memberData.length; i++) {
        $('.member-container').append(`
            <div class="member">
                <img src="${memberData[i].member}" />
            </div>`)
    }
    
    $('.videos-wrapper').on('click', '.button', function(){
        stopAllYouTubeVideos();
        const set  = $(this).data('set')
        $('.dialog').show()
        $('#dialog-wrapper').empty();
        $('#dialog-wrapper').append(`
            <iframe id="youtube-dialog${set+1}" class="dialogvideo" src="${aboutVideos[set].url}?rel=0&autoplay=1&mute=1&enablejsapi=1&showinfo=0"  frameborder="0" ></iframe>
        `)
        var dialogiframes = document.querySelectorAll('.dialogvideo');
        Array.prototype.forEach.call(dialogiframes, iframes => { 
            iframes.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
        // do something here
    });
    
})
