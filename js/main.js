$(document).ready(function(){
     ciao = []
     $('.search-bar-input-messaggio').keydown(function(event){
          switch (event.key) {
               case 'Enter':
               invioMessaggio();



                    break;

               default:




          }
     });
     //DATA
     var data = new Date();
     var ora = addZero(data.getHours());
     var minuti= addZero(data.getMinutes())
     var ampm = ora >= 12 ? 'PM' : 'AM';

     //EVOCO FUNZIONI
     $(".chat-object").click(chat);
     $('.mic').click(invioMessaggio);




     $('.search-bar-input-messaggio').keydown(function(event){
          var ciaos = ciao.push($(this).val());
          console.log(ciaos);
          if (ciao.length > 0) {
               $('.fa-paper-plane').removeClass('nascosto');
               $('.fa-microphone').addClass('nascosto');
          } else {

          }
     })

console.log(ciao);









     $('.search-bar-input').keydown(function(event){
          var ricercaContatto = $(this).val().toLowerCase();
          console.log(ricercaContatto);
          $('.chat-text-utente p').each(function(){
               console.log($(this).text());
               if($(this).text().toLowerCase().includes(ricercaContatto)){
                    $(this).parentsUntil('.chat').show();
               }else {
                    $(this).parentsUntil('.chat').hide();
               }
          })
     })




     function invioMessaggio() {
          console.log('ciaobababa');
          $('.fa-paper-plane').addClass('nascosto');
          $('.fa-microphone').removeClass('nascosto');
          ciao.length = 0;
          var messaggioUtente = $('.search-bar-input-messaggio').val();
          console.log(messaggioUtente);
          $('.search-bar-input-messaggio').val('');
          var messaggio = $('.main-chat.sxs .chat-you').clone();
          console.log(messaggio);
          messaggio.children('p').text(messaggioUtente);
          messaggio.children('.ok-send').text(ora + ':' + minuti + ampm);
          $('.main-chat2').append(messaggio)
          setTimeout(messaggioAutomatico, 1000); //Rispondo dopo un secondo
     };

     function messaggioAutomatico() {
          var messaggioAutomatico = $('.main-chat.dxs .chat-amico').clone();
          messaggioAutomatico.children('p').text('ok');
          console.log(messaggioAutomatico);
          messaggioAutomatico.children('.ok-send').text(ora + ':' + minuti + ampm);
          $('.main-chat2').append(messaggioAutomatico)
     }



     // Funzione per selezionare la chat
       function chat() {
           // Tolgo la classe active a tutti ..
           $(".chat-object").removeClass("active");
           $(this).addClass("active");
           var attributo = $(this).attr('nome-utente');
           $("#nome-utente").text(attributo);
           $(".main-chat").removeClass("offline-chat");
           // $(this).addClass("active");
           $(".main-chat2").empty();
           var immagine = $(this).attr('avatar');
           $("#avatar").text(immagine);

       }
     //Funzione che aggiunge lo 0 alla data
     function addZero(i) {
          if (i < 10) {
               i = "0" + i;
          }
          return i;
     }


})
