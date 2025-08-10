$(function () {
  $('#change-color').on('click', function() {
    // フェードアウトする
    $('#target').css('color','red');
  });
  
  $('#change-text').on('click', function() {
    // フェードアウトする
    $('#target').text('Hello!');
  });
  
  // id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
});