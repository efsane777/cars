// Colour picker JS only

// Reference of base image with paint watermark
const base = "https://ddools.imgix.net/cars/base.png?w=600&mark-align=center,middle&mark=https%3A%2F%2Fddools.imgix.net%2Fcars%2Fpaint.png%3Fw%3D600%26bri%3D-18%26con%3D26%26monochrome%3D"

// Click on a color
var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // updated url
  let updateColor = base + hex;
  // update src of image
  document.getElementById("productImage").src = updateColor;

  
}

//http://jscolor.com
//Custom colourpicker
function update(jscolor) {
  let updateColor = base + jscolor;
    // Use 'jscolor' instance for car color
     document.getElementById("productImage").src = updateColor;
}



$('.flipBtn').on('click', function() {
  var itemNum = $('.pane.one .active');  // get an active item in a stack
  var crnt = $('.pane.one .card').index( itemNum );  // find out the index of an active card
  var end = $('.pane.one .card').length-1;  // find out how many cards are in a stack
  
  ($(this).val() == 'Next') ? crnt++ : crnt--; // next / previous
  
  if (crnt > end) {  // at the end, so start over
    crnt = 0;
  } else if (crnt < 0) {  // at the front, so go to the end
    crnt = end;
  }
  
  $('.pane .active').removeClass('active');
  $('.pane .card:nth-child('+ (crnt+1) +')').addClass('active');
})

