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
     $(".chat-object").click(chat);
     //EVOCO FUNZIONI
     $(document).on('click' , function() {
          $(".chat-object").click(chat);
     })



     $('.fa-plus-circle').click(function() {
          $('.inserisci-nome').toggle();
          $('.fa-file-import').click(function() {
               var nome = $('.in-search-bar-input').val();                 // Prendo il valore dell'input NOME
               $('.chat').append('<div class="chat-object" nome-utente="'+ nome +'"><div class="avatar-chat-object-dentro"><img avatar="'+ nome +'" src="img/avataaars.png" alt=""></div><div class="chat-text-utente notifiche-attive"><p>' + nome + '</p><small class="chat-text">'+ '' +'</small></div></div>');
               $('.inserisci-nome').hide();
               scroll2();
          })
     })



     //EVOCO FUNZIONI

     $('.mic').click(invioMessaggio);

     $('.search-bar-input-messaggio').focus(function() {
        // console.log('focus');
        $('.mic i').toggleClass('fa fa-microphone fas fa-paper-plane');
    }).blur(function () {
        // console.log('uscito dal focus');
        $('.mic i').toggleClass('fa fa-microphone fas fa-paper-plane');
    });



     $('.search-bar-input-messaggio').keydown(function(event){
          var ciaos = ciao.push($(this).val());
          // console.log(ciaos);
          if (ciao.length > 0) {
               $('.fa-paper-plane').removeClass('nascosto');
               $('.fa-microphone').addClass('nascosto');
          } else {

          }
     })
//
// console.log(ciao);

     $('.search-bar-input').keydown(function(event){
          var ricercaContatto = $(this).val().toLowerCase();
          // console.log(ricercaContatto);
          $('.chat-text-utente p').each(function(){
               // console.log($(this).text());
               if($(this).text().toLowerCase().includes(ricercaContatto)){
                    $(this).parentsUntil('.chat').show();
               }else {
                    $(this).parentsUntil('.chat').hide();
               }
          })
     })



     function invioMessaggio() {
          // console.log('ciaobababa');
          $('.fa-paper-plane').addClass('nascosto');
          $('.fa-microphone').removeClass('nascosto');
          ciao.length = 0;
          var messaggioUtente = $('.search-bar-input-messaggio').val();
          if(messaggioUtente.trim().length > 0) {
               // console.log(messaggioUtente);
               $('.search-bar-input-messaggio').val('');
               var messaggio = $('.Arianna.main-chat.sxs .chat-you').clone();
               // console.log(messaggio);
               messaggio.children('p').text(messaggioUtente);
               messaggio.children('.ok-send').text(ora + ':' + minuti + ampm);
               $('.main-chat2').append(messaggio)
               console.log('chiamata scroll1');
               scroll()
               setTimeout(messaggioAutomatico, 1000);
               console.log('chiamata scroll2');
               scroll()

          }
     };

     function scroll() {
          var pixelScroll = $('.sfondo-chat').height();
          $('.sfondo-chat').scrollTop(pixelScroll);
          console.log('ho fatto lo scroll');
     }

     function scroll2() {
          var pixelScroll2 = $('.aside').height();
          $('.aside').scrollTop(pixelScroll2);
          console.log('ho fatto lo scroll');
     }


     function messaggioAutomatico() {
          var messaggioAutomatico = $('.Arianna.main-chat.dxs .chat-amico').clone();
          messaggioAutomatico.children('p').text('ok');
          // console.log(messaggioAutomatico);
          messaggioAutomatico.children('.ok-send').text(ora + ':' + minuti + ampm);
          $('.main-chat2').append(messaggioAutomatico)
     }




     // Funzione per selezionare la chat
       function chat() {
           // Tolgo la classe active a tutti ..
           $(".chat-object").removeClass("active");
           $(this).addClass("active");
           $(this).children('.ora-e-notifica').children('span').addClass('nascosto');
           var attributo = $(this).attr('nome-utente');
           // console.log(attributo);
           $("#nome-utente").text(attributo);
           for (var i = 0; i < attributo; i++) {
                console.log(attributo[i]);
           }
           // $(".main-chat").removeClass("offline-chat");
           if($(".main-chat").hasClass(attributo)){
               $('.main-chat').addClass("offline-chat");
               $('.main-chat' + '.' + attributo + '').removeClass("offline-chat");


          }else if(!$(".main-chat").hasClass(attributo)){
               $('.main-chat').addClass("offline-chat");
          }

           if($(".avatar").hasClass(attributo)){
               $('.avatar').addClass("offline-chat");
               $('.avatar2').addClass("offline-chat");
               $('.avatar' + '.' + attributo + '').removeClass("offline-chat");


          }else if(!$(".main-chat").hasClass(attributo)){
               $('.avatar').addClass("offline-chat");
               $('.utente').removeClass("offline-chat");

          }

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
