$(function() {
  if ($('#infinite-scrolling').size() > 0) {
      $("#load-more").click(function() {
        var more_posts_url;
        more_posts_url = $('.pagination .next_page').attr('href');
        $('.pagination').html('<p>Loading...</p>');
        $.getScript(more_posts_url);
      });
      return;
  }
});