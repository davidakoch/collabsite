$(document).ready(function() {



	$("#donate, #donateHeader").click(function(){

		alert("Thanks for Donating!")
		});

	/*$("#donateHeader").click(function(){

		alert("Thanks for Donating!");
		});*/

	/*create the jquery slideshow*/

	//hide all the images except the first one
	$(".photos img:gt(0)").hide();

	setInterval (function() {
		//get the current image - it is the visible one
		var current = $(".photos img:visible");

		//get immediate next image after the current if exist,
		//otherwise find the first one

		var next = current.next().length ? current.next() : $(".photos img:eq(0)");
		//hide the current image
		current.fadeOut (2000);
		//show the next one
		next.fadeIn(2000);


	}, 3000);






});