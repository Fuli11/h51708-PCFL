require(["config"], function(){
	require(["jquery", "load", "zoom"], function(jq){
		jq("img").elevateZoom();
	});
});