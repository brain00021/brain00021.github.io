$(()=>{
    // header
    $('.menu a').on('click', function(){
        const name = $(this).text();
        localStorage.setItem("pageName", name);

    })
    const pageName = localStorage.getItem("pageName") || 'HOME';
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
       Array.prototype.forEach.call(dialogiframes, iframes => { 
        iframes.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
     });
    })
});