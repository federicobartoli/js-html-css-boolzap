$(document).ready(function(){

     $(document).keydown(function(event){
          switch (event.key) {
               case 'Enter':
               invioMessaggio();
                    break;

               default:
               


          }
     });
     var data = new Date();
     var ora = data.getHours();
     var minuti= data.getMinutes()
     var ampm = ora >= 12 ? 'PM' : 'AM';


     $(".chat-object").click(chat);

          $('#invia-messaggio').click(invioMessaggio);

          function invioMessaggio() {
               var messaggioUtente = $('.search-bar-input-messaggio').val();
               console.log(messaggioUtente);
               $('.search-bar-input-messaggio').val('');
               var messaggio = $('.main-chat.sxs .chat-you').clone();
               console.log(messaggio);
               messaggio.children('p').text(messaggioUtente);
               messaggio.children('.ok-send').text(ora + ':' + minuti + ampm);
               $('.main-chat.sxs2').append(messaggio);
          };














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
