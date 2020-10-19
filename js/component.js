// header読み込み
function header() {
  $.ajax({
      url: "./component/header.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      document.write(html);
    }
  });
}

// footer読み込み
function footer() {
  $.ajax({
      url: "./component/footer.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      document.write(html);
    }
  });
}
