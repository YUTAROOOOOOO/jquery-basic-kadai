$(function() {
  // id="change-color"がクリックされたらid="target"のテキストを赤にする
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });
  // id="change-text"がクリックされたらid="target"のテキストをHello!に変更する
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });
  // id="fade-out"がクリックされたらid="target"をフェードアウトする
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  // id="fade-in"がクリックされたらid="target"をフェードインする
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});