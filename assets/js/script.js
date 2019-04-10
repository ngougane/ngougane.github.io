//Animation navbar
$(function () {
    $(window).scroll(function() {
      if($(this).scrollTop() > 70) {
        $('.navbar').addClass('opaque');
        $('.logoNG').addClass('logoOpaque');
      } else {
        $('.navbar').removeClass('opaque');
        $('.logoNG').removeClass('logoOpaque');
      }
    });
});

//Animation Timeline

$(document).ready(function(e){
  $('.cntl').cntl({
    revealbefore: 300,
    anim_class: 'cntl-animate',
    onreveal: function(e){
      console.log(e);
    }
  });
});
