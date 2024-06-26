$(()=>{
    // header
    // $('.menu a').on('click', function(){
    //     const name = $(this).text();
    //     sessionStorage.setItem("pageName", name);
    // })

    const path = document.location.pathname;

    const titleCheck = {
        'portfolio': 'OUR WORK',
        'contact':'CONTACT',
        'drBeauty':'DR.BEAUTY',
        'about': 'ABOUT',
        'index': 'HOME'
    }

    var page = path.split("/").pop().replace('.html','');


    const pageName = titleCheck[page] || 'HOME';
    $(`.menu > a[data-slide='${page}']`).addClass('active');
    debugger;

    $('#toggle-link').find('span').text(pageName)
    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    $(window).resize(debounce(function(){
        let windowWidth = window.innerWidth;
        if(windowWidth > 780){
            $('#toggle').off();
            $('#toggle').on('mouseover',function(){
                $(this).addClass('on')
                $('.header').addClass('openMenu')
            })
            $('.header').on('mouseleave',function(){
                $('#toggle').removeClass('on')
                $('.header').removeClass('openMenu')
            })
        }else{
            $('#toggle').off();
            $('.header').off();
            $('#toggle').on('click',function(){
                $(this).toggleClass('on')
                $('.header').toggleClass('openMenu')
            })
        }
    
})).resize();


    
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

