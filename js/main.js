$(document).ready(function(){

     // $(document).keydown(function(event){}

     $('#invia-messaggio').click(function(){
          var messaggioUtente = $('.search-bar-input-messaggio').val();
          console.log(messaggioUtente);
          $('.search-bar-input-messaggio').val('');
          var messaggio = $('.main-chat.sxs .chat-you').clone();
          console.log(messaggio);
          messaggio.children('p').text(messaggioUtente);
          $('.main-chat.sxs2').append(messaggio);


     });




     $(".chat-object").click(chat);


     // Funzione per selezionare la chat
       function chat() {
           // Tolgo la classe active a tutti ..
           $(".chat-object").removeClass("active");
           $(this).addClass("active");
           var attributo = $(this).attr('nome-utente');
           $("#nome-utente").text(attributo);
           var immagine = $(this).attr('avatar');
           $("#avatar").text(immagine);

       }





})
