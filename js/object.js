$(document).ready(function(){
	var inputLH = $("input[name=lineHeight]");
	var lineHeight = Number(inputLH.val());
	$("#up").click(function(){
		inputLH.val(lineHeight + 1);
		lineHeight = Number(inputLH.val());
	});
	$("#down").click(function(){
		inputLH.val(lineHeight - 1);
		lineHeight = Number(inputLH.val());
	});

	var toggleGrid = $("#toggle-grid");
	toggleGrid.click(function(){
		var toggleVal = toggleGrid.html();
		if( toggleVal == "Off"){
			$("#grid-control-panel").css("opacity",0.2);
			toggleGrid.html("On");
			//put code here to toggle off grid
		}
		if(toggleVal == "On"){
			$("#grid-control-panel").css("opacity", 1);
			toggleGrid.html("Off");
			//put code to toggle on grid
		}
	});

});






var containerWidth = 12;
var columns;

var $GoGo = {
	containerWidth: containerWidth -1,
	numCols: columns,
	colWidth: containerWidth/12
}
console.log(containerWidth + " " + $GoGo.containerWidth);