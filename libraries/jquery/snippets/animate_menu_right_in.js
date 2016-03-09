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
// right in
$(document).ready(function() {
  $('#slidemarginleft button').click(function() {
    var $marginLefty = $(this).next();
    $marginLefty.animate({
      marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ?
        $marginLefty.outerWidth() : 0
    });
  });
});

// Bottom in 
$(document).ready(function() {
  $('#slidebottom button').click(function() {
    $(this).next().slideToggle();
  });
});