$(function(){
    //déclaration de variable
    let avatar = $('.avatar');
    let portfolio = $('#portfolio');
    let prenom = $( '#prenom' );
    let nom = $( '#nom');

    

    //ANIMATION DU TEXTE
    

    //ecoute position souris sur la page
    $(window).on('mousemove', function faceChange(e){
        //console.log('test mousemouve', e.pageX , e.pageY);
        //déclaration des variable de position
        let positionX = e.pageX;
        let positionY = e.pageY;
        
        let widthAvatar = parseInt(avatar.css('width').substr(0,3));
        let heightAvatar = parseInt(avatar.css('height').substr(0,3));
        let positionAvatar = avatar.offset();
        let avatarLeft = parseInt(positionAvatar.left);
        let avatarTop = parseInt(positionAvatar.top);
        let avatarRight = avatarLeft + widthAvatar;
        let avatarBottom = avatarTop+heightAvatar;
        
        //position haut gauche
        if( 0 <= positionX && positionX < avatarLeft && 0 <= positionY && positionY < avatarTop)
        {
            avatar.attr('src','img/avatar_haut_gauche.png');
        }
        //position vers le haut
        else if( avatarLeft <= positionX && positionX <= avatarRight && 0 <= positionY && positionY < avatarTop ){
            avatar.attr('src','img/avatar_face_haut_moyen.png');
        }
        //haut droit
        else if( avatarRight < positionX && 0 <= positionY && positionY < avatarTop ){
            avatar.attr('src','img/avatar_haut_droite.png');
        }
        //droit
        else if( avatarRight < positionX && avatarTop <= positionY &&  positionY <= avatarBottom ){
            avatar.attr('src','img/avatar_droit.png');
        }
        //bas droit
        else if( avatarRight < positionX && avatarBottom < positionY){
            avatar.attr('src','img/avatar_droite_bas.jpg');
        }
        // bas
        else if( avatarLeft <= positionX && positionX <= avatarRight && avatarBottom <positionY ){
            avatar.attr('src','img/AVATAR_FACE_BAS_moyen.png');
        }
        //bas gauche
        else if( 0 <= positionX && positionX < avatarLeft && avatarBottom < positionY ){
            avatar.attr('src','img/avatar_gauche_bas.jpg');
        }
        //gauche
        else if( 0 <= positionX && positionX < avatarLeft && avatarTop <= positionY && positionY < avatarBottom ){
            avatar.attr('src','img/avatar_gauche.png');
        }
        else{
            avatar.attr('src','img/avatar.png');
        }
    });
    
    
});//RIEN APRES