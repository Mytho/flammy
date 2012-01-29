APP = {

	base : undefined,
	elementId : "content",
	spinner : undefined,
	spinnerElementId : "spinner",
	router : undefined,
							
	controller : {
		index : function(template){
			APP.Spinner();
			$.get(APP.base+template, function(html){
				$("#"+APP.elementId).html(html);
			});
		}
	},

	Router : function(){
		APP.base = window.location.protocol+"//"+window.location.host+"/";
		APP.router = $.sammy(function(){
			this.get('#!/', function(){
				APP.controller.index("home");
			});
			this.get('#!/:template', function(){
				APP.controller.index(this.params["template"]);
			});
		});
		APP.router.run('#!/'); 
	},

	Spinner : function(){
		var s = $("<div />").attr("id", "spinner");
		$("#"+APP.elementId).html(s);
		APP.spinner = new Spinner({
			color:  '#555', // #rgb or #rrggbb
			length: 2,      // The length of each line
			lines:  10,     // The number of lines to draw
			radius: 8,      // The radius of the inner circle
			shadow: false,  // Whether to render a shadow
			speed:  0.8,    // Rounds per second
			trail:  40,     // Afterglow percentage
			width:  4       // The line thickness
		}).spin(document.getElementById(APP.spinnerElementId));
	}
}; // END APP
