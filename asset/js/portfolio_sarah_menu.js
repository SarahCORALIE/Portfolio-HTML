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
    let vignette3Position = vignette3.offset();
    let vignette3Top = vignette3Position.top;
    let vignette3Left = vignette3Position.left;
   
    function hoverMenu( vignette, newSrc,newHref ,zoomSrc =''){
        let firstSrc = vignette.attr('src');

        vignette.parent().on('mouseenter', function(){//aparition image zoomée  
                if( vignette == vignette2 || vignette == vignette4 )
                {
                    vignette.attr('src', newSrc); 
                    timeoutId = window.setTimeout( function(){                  
                    $(`<a class='aZoom' href='${newHref}'><img src=${zoomSrc} class='imgZoom'></a>`)    
                    .prependTo( $('nav'));                    
                    $('.aZoom').css({'left':vignette3Left,'top':vignette3Top});  
                    },500); 
                } 
                else
                {                    
                    timeoutId = window.setTimeout( function(){                  
                        $(`<a class='aZoom' href='${newHref}'><img src=${newSrc} class='imgZoom'></a>`)    
                        .prependTo( $('nav'));                    
                        $('.aZoom').css({'left':vignette3Left,'top':vignette3Top});  
                        },500);
                }  
                console.log( $('aZoom'));
                
                 
                //console.log('inMenu',$('nav').first());    
        }); //fin mouseenter       
        $('nav').on('mousemove', function(){  
            
            let element = $('nav').children();
            let aZoom = $('.aZoom');

              if( $('aZoom').lenght >= 1 ){
                    $('.ligne .a').off('mouseenter');
                }   
            //console.log('outMenu',element);
            //console.log($('.aZoom').length);
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

    // hoverMenu( vignette1, 'img/menuB4_moyen.png', 'menu_graphism.html');
    // hoverMenu( vignette2, 'img/menu3B_moyen.png', 'cv.html','img/oeil-ouvert_zoom1_moyen.png' );
    // hoverMenu( vignette3, 'img/menuB2_moyen.png','menu_web_dev.html' );
    // hoverMenu( vignette4, 'img/menu6B_moyen.png', 'contact.html','img/oeil-ouvert_zoom2_moyen.png' );
    function hoverMenu2(vignette,$rubrique, newSrc ){

        let firstSrc = vignette.attr('src');
        vignette.parent().on('mouseenter', function(){
            console.log('hoverMenu2 in');
            $('#rubrique').show().html($rubrique);
            vignette.attr('src', newSrc); 
        });//fin mouseenter()
        vignette.parent().on('mouseleave', function(){
            $('#rubrique').hide();
            vignette.attr('src', firstSrc); 

        });

    }//fin hoverMenu2()
hoverMenu2(vignette3, '/ WEB DEV<i class="fas fa-angle-double-right "></i>', 'img/menuB2_moyen.png');
hoverMenu2(vignette4, '/ CONTACT<i class="fas fa-angle-double-right "></i>', 'img/menu6B_moyen.png');
hoverMenu2(vignette1, '/ GRAPHISM<i class="fas fa-angle-double-right "></i>','img/menuB4_moyen.png');
hoverMenu2(vignette2, '/ CV<i class="fas fa-angle-double-right "></i>', 'img/menu3B_moyen.png');


});//RIEN APRES