AOS.init({
//  startEvent: 'DOMContentLoaded',
  offset: 200,
  duration: 1200,
  easing: 'ease',
  delay: 100
});


var scrollingSpeed = 1.5*1000;
var startDate = $("section:nth-of-type(1)").data("date");


$(window).load(function() {
		$('.counter').html( startDate );
});

$('.counter').bind("DOMSubtreeModified",function(){
	var dateInput = $(".counter").text();
	var datePrint = moment(dateInput, "x").format("MMMM DD, YYYY"); // Oct 4th 16; 
	$('.date').text(datePrint);
});

function countScroll(d) {
    var nextDate = $("section:nth-of-type("+[d+1]+")").data("date");
    var prevDate = $("section:nth-of-type("+[d+0]+")").data("date");
						
	if (d === 1) {
		var lastDate = startDate;
	};

//	alert("next " + nextDate + " | last " + lastDate);

	$('.counter').countTo({
		from: nextDate,
		to: prevDate,
		speed: scrollingSpeed,
		refreshInterval: 50,
		onComplete: function(value) {
//			console.debug(this);
			var lastDate = nextDate; 
		}
	});
	var lastDate = nextDate;
}

$(function() {

	$.scrollify({
		section:"section",
		sectionName : false,
		setHeights: false,
		offset : 0,
		overflowScroll: true,
		scrollSpeed: scrollingSpeed,
		before:function(i) { // i is section number
			countScroll(i);
			$('.date').removeClass( "fadeOutDown" );
			$('.date').addClass( "animated fadeOutUp" );
		},
		after: function() {
			$('.date').removeClass( "fadeOutUp" );	
			$('.date').addClass( "animated fadeInDown" );	
		}
	});

});

var topofDiv = $("section:nth-of-type(1)").offset().top; //gets offset of header
var height = $("section:nth-of-type(1)").outerHeight() + 20; //gets height of header

$(".dateContainer").hide();
$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
       $(".dateContainer").show();
    }
    else{
       $(".dateContainer").hide();
    }
});


//var selScrollable = 'section';
//// Uses document because document will be topmost level in bubbling
//$(document).on('touchmove',function(e){
//  e.preventDefault();
//});
//// Uses body because jQuery on events are called off of the element they are
//// added to, so bubbling would not work if we used document instead.
//$('body').on('touchstart', selScrollable, function(e) {
//  if (e.currentTarget.scrollTop === 0) {
//    e.currentTarget.scrollTop = 1;
//  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
//    e.currentTarget.scrollTop -= 1;
//  }
//});
//// Stops preventDefault from being called on document if it sees a scrollable div
//$('body').on('touchmove', selScrollable, function(e) {
//  e.stopPropagation();
//});

 // Disable overscroll / viewport moving on everything but scrollable divs
// $('body').on('touchmove', function (e) {
//         if (!$('section').has($(e.target)).length) e.preventDefault();
// });