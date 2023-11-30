$(()=>{
    // header
    $('.menu a').on('click', function(){
        const name = $(this).text();
        sessionStorage.setItem("pageName", name);
    })
    const pageName = sessionStorage.getItem("pageName") || 'HOME';
    $('#toggle-link').find('span').text(pageName)

    $('#toggle').on('click',function(){
        $(this).toggleClass('on')
        $('.header').toggleClass('openMenu')
    })
    
    $('.dialog').hide()
    $('.close').on('click',function(){
        $('.dialog').hide();
        var iframes = document.querySelectorAll('.video');

        Array.prototype.forEach.call(iframes, iframe => { 
          iframe.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
       });
       var dialogiframes = document.querySelectorAll('.dialogvideo');
       Array.prototype.forEach.call(dialogiframes, dialogiframe => { 
        dialogiframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
     });
    })


});

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}