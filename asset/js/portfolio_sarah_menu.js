$( function(){

    //AMIMATION FOOTER
    //console.log($('footer .avatar'));

    $('footer img').parent().on('mouseenter', function(){
        let play = $('footer p');
        //console.log('test in');
        play.show(800);
    });
    $('footer a').on('mouseleave', function(){
        let play = $('footer p');
        //console.log('test out');
        play.hide(800);
    });
        
    //CHAGEMENT DU MENU AU SURVOLE
    let vignette1 = $('#vignette1');
    let vignette2 = $('#vignette2');
    let vignette3 = $('#vignette3');
    let vignette4 = $('#vignette4');
    let vignette1Position = vignette1.offset();
    let vignette1Top = vignette1Position.top;
    let vignette1Left = vignette1Position.left;
   
    function hoverMenu( vignette, newSrc,newHref ,zoomSrc =''){
        let firstSrc = vignette.attr('src');

        vignette.parent().on('mouseenter', function(){//aparition image zoomée  
                if( vignette == vignette2 || vignette == vignette4 )
                {
                    vignette.attr('src', newSrc); 
                    timeoutId = window.setTimeout( function(){                  
                    $(`<a class='aZoom' href='${newHref}'><img src=${zoomSrc} class='imgZoom'></a>`)    
                    .prependTo( $('nav'));                    
                    $('.aZoom').css({'left':vignette1Left,'top':vignette1Top});  
                    },500); 
                } 
                else
                {                    
                    timeoutId = window.setTimeout( function(){                  
                        $(`<a class='aZoom' href='${newHref}'><img src=${newSrc} class='imgZoom'></a>`)    
                        .prependTo( $('nav'));                    
                        $('.aZoom').css({'left':vignette1Left,'top':vignette1Top});  
                        },500);
                }  
                if($('aZoom').lenght >= 1 || $(vignette).attr('src',newSrc)){
                    $('.ligne .a').off('mouseenter');
                }      
                //console.log('inMenu',$('nav').first());    
        }); //fin mouseenter       
        $('nav').on('mousemove', function(){  
            
            let element = $('nav').children();
            let aZoom = $('.aZoom');
            console.log('outMenu',element);
            console.log($('.aZoom').length);
            $(aZoom).on('mouseleave', function(){
                //disparition image zoomé
                window.clearTimeout(timeoutId);
                $('.aZoom').remove();
                setTimeout(function (){
                    vignette.attr('src', firstSrc);
                },500);
            });//fin mouseleave 
         });//fin mousemove                 
    }; //fin overMenu()

    hoverMenu( vignette1, 'img/menuB4_moyen.png', 'menu_graphism.html');
    hoverMenu( vignette2, 'img/menu3B_moyen.png', 'cv.html','img/oeil-ouvert_zoom1_moyen.png' );
    hoverMenu( vignette3, 'img/menuB2_moyen.png','menu_web_dev.html' );
    hoverMenu( vignette4, 'img/menu6B_moyen.png', 'contact.html','img/oeil-ouvert_zoom2_moyen.png' );



});//RIEN APRES