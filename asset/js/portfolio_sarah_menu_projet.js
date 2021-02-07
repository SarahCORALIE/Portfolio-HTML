$(function(){
    //AMIMATION FOOTER
    //console.log($('footer .avatar'));

    $('footer a').on('mouseenter', function(){
        let play = $('footer p');
        //console.log('test in');
        play.show(800);
    });
    $('footer a').on('mouseleave', function(){
        let play = $('footer p');
        //console.log('test in');
        play.hide(800);
    });
    
    //TOGGLE MENU
    $('#logo-menu').on('mouseenter', function(){
         $(this).css({'border-radius': '30px 30px 0 0', 'border':'solid black 3px'} );
        $('.toggle-menu').css({'opacity': 1});
        console.log('test in',$( '#logo-menu'));
    });

    $('.toggle-menu').on('mouseleave', function(){
        $(this).css({'opacity': 0});
        $('#logo-menu').css({'border-radius': '30px', 'border':'none'} );
    });



});//RIEN APRES