$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

// 網頁title
$(function () {
  document.title = $('h1').text();
});

// 回頂部按鈕
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTopBtn').fadeIn();
    } else {
      $('.scrollTopBtn').fadeOut();
    }
  });

  $('.scrollTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 0);
    return false;
  });
});
