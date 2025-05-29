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

// 文章搜尋功能
$(function () {
  let isComposing = false;

  $('#searchInput')
    .on('compositionstart', function () {
      isComposing = true;
    })
    .on('compositionend', function () {
      isComposing = false;
      $(this).trigger('input');
    })
    .on('input', function () {
      if (isComposing) return;

      const keyword = $(this).val().toLowerCase().trim();
      let metchCard = 0;

      $('.blog-card').each(function () {
        const titleText = $(this).find('.blog-card-title').text().toLowerCase();
        if (titleText.includes(keyword)) {
          $(this).removeClass('d-none');
          metchCard++;
        } else {
          $(this).addClass('d-none');
        }
      });

      $('#noResult').toggleClass('d-none', metchCard > 0);
    });
});
