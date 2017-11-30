require.config({
	baseUrl : "/",
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min", "lib/jquery/jquery-1.12.4.min"],
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"load" : "js/loadHeaderFooter",
		"template" : "lib/arttemplate/template",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom-3.0.8.min"
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		}
	}
});