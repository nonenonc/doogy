var main = function () {
	"use strict";
	//location.reload()
	var eiei = document.getElementById("object").value;

	var url = "http://api.flickr.com/services/feeds" + 
	"/photos_public.gne?tags="+eiei+"&format=json&jsoncallback=?";

	$.getJSON(url, function (flickrResponse) {
		flickrResponse.items.forEach(function (item) {
			// create a new jquery element to hold the image
			var $img = $("<img>").hide();
			// set the attribute to the url contained in the response
			console.log(item.media.m);
			$img.attr("src", item.media.m);
			// attach the img tag to <main>
			$("main .photo").append($img);
			$img.fadeIn();
		});
});

	
};
$(document).ready(main);