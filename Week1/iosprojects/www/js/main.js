//Jason Bentley AVF Project2 Term 0113	

$(function() {
	$.getJSON("http://search.twitter.com/search.json?q=pro%20tools&rpp=10&include_entities=true&lang=en&result_type=recent&callback=?",
		function(data) {
			console.log(data);
			$("#data-msg").html("<p>Latest Tweets about Avid Pro Tools!</p>");
			for(i=0, j=data.results.length; i<j; i++) {
				$("#twit-data-output")
				.append("<li>" + "<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + data.results[i].text + ", <em>" + "<br />" + data.results[i].created_at + "<em>" + 
				"</p>" + "<br />" + "</li>");
			};
		}
	)
});
	






