$(document).ready(function(){

  $('#btn-play').attr('disabled', true);
  $('#btn-stop').attr('disabled', true);

  $.get( "/feed", function( data ) {
    $(".episode-title").text(data['title']);
    audio = new Audio(data['url']);

    audio.ondurationchange = function(){
      audio.currentTime = Math.floor(Math.random() * audio.duration) + 1;
      $('#btn-play').attr('disabled', false);
      $('.loading').hide();
    };

  });

  $('#btn-play').click(function(){

    audio.play();

    $('#btn-play').attr('disabled', true);
    $('#btn-pause').attr('disabled', false);
    $('#btn-stop').attr('disabled', false);
    $('#btn-change').attr('disabled', false);
  });

  $('#btn-pause').click(function(){

    audio.pause();

    $('#btn-change').attr('disabled', true);
    $('#btn-pause').attr('disabled', true);
    $('#btn-stop').attr('disabled', false);
    $('#btn-play').attr('disabled', false);
  });

  $('#btn-change').click(function(){
    audio.currentTime = Math.floor(Math.random() * 14400) + 1;
  });

  $('#btn-stop').click(function(){

    audio.pause();
    audio.currentTime = Math.floor(Math.random() * 14400) + 1;

    $('#btn-stop').attr('disabled', true);
    $('#btn-change').attr('disabled', true);
    $('#btn-pause').attr('disabled', true);
    $('#btn-play').attr('disabled', false);
  });

});