$(document).ready(function(){

  $(".ryu_pics").mouseenter(function(){
	$(".ryu_pose img").hide();
	$(".ryu_ready img").show();
  })

 .mouseleave(function(){
   	$(".ryu_ready img").hide();
  	$(".ryu_pose img").show();
  })

 .mousedown(function(){
 	playHadouken();
 	$(".ryu_ready img").hide();
 	$(".ryu_toss img").show();
  })

 .mouseup(function(){
 	$(".ryu_toss img").hide();
 	$(".ryu_ready img").show();
 	$(".fire_wrap").finish().show().animate(
 		{"left": "1020px"},
 		500,
 		function() {
 			$(this).hide();
 			$(this).css("left", "520px");
 		})
 	})
 
 $(document).keydown(function(event) {
   if(event.which == 88); { 
   	$(".ryu_ready img").hide();
   	$(".key_down img").show();

	};
});

function playHadouken () {
	$('#fire_sound')[0].volume = 0.5;
	$('#fire_sound')[0].load();
	$('#fire_sound')[0].play();
};
});