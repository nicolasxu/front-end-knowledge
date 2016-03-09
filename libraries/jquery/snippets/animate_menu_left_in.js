/*
<div id="slidebottom" class="slide">
  <button>slide it</button>
  <div class="inner">Slide from bottom</div>
</div>
*/

/* css

.slide {
  position: relative;
}
.slide .inner {
  position: absolute;
  left: 0;
  bottom: 0;
}

*/

$(document).ready(function() {
  $('#slideleft button').click(function() {
    var $lefty = $(this).next();
    $lefty.animate({
      left: parseInt($lefty.css('left'),10) == 0 ?
        -$lefty.outerWidth() :
        0
    });
  });
});
