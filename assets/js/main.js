
const picElement = $( "img.section-pic" );

function isElementVisible(picElement)
{
    const TopView = $(window).scrollTop();
    const BotView = TopView + $(window).height();
    const TopElement = picElement.offset().top;
    const BotElement = TopElement + picElement.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
    $( ".outer" ).each(function() {
        $this = $(this);
        isOnView = isElementVisible($(this));
        if(isOnView && !$(this).hasClass('slide-left')){
            $(this).removeClass('hide');
            $(this).addClass('slide-left');
            startAnimation($(this));
        }
    });
});

function startAnimation($this) {
  $this.animate({
    width: "100%"
  }, 4000, function() {
    // Animation over
  });
}

