$(document).ready(function(){
	
 	//builds the grid
 	var numCols = 12; /*Change this to your desired # of columns*/
    var containerWidth = 1000; /*Change this to your desired container width*/
    var colWidth = (1/numCols) * 100;
    var $body = $("body");

    /*Establishes horizontal rhythm*/
    $body.prepend('<div id="xAxis"></div>');
    $("#xAxis").prepend('<div class="fill"></div>');
    for (i = 0; i < numCols; i++) {
        $("#xAxis > div").prepend('<div class="xcols"></div>');
    }
    $body.prepend('<div id="yAxis"></div>');
    /*$body.prepend('<div class="fixed"><button id="toggle">Toggle Baseline</button></div>');*/
    
    $(".xcols").css( "width", colWidth +"%" );
    var screenHeight = screen.height;
    
    $("#xAxis > .fill div").height(screenHeight);
    
    /* Establishes vertical rhythm or "the Baseline" */
    var inputLH = $("input[name=lineHeight]");
	var lineHeight = Number(inputLH.val());
    var adjustedLineHeight = lineHeight - 2 + "px";
    var lines = screenHeight/lineHeight;
   

   //builds yAxis
   function build_yAxis(){
    for (i = 0; i <= lines; i++) {
    $("#yAxis").prepend("<hr/>");
        console.log(i);
    }
    
    $("hr").css("margin-bottom" , adjustedLineHeight);
    
    $("#yAxis").height(screenHeight);
    //remove on production
    var haha = $("#yAxis").height;
    console.log(haha);
    }

    /*Call the function for initial build*/
    build_yAxis();
	
	// controls and inputs for control-panel
	$("#up").click(function(){
		inputLH.val(lineHeight + 1);
		lineHeight = Number(inputLH.val());
		adjustedLineHeight = lineHeight - 2 + "px";
    	lines = screenHeight/lineHeight;
    	build_yAxis();
		
	});
	$("#down").click(function(){
		inputLH.val(lineHeight - 1);
		lineHeight = Number(inputLH.val());
		adjustedLineHeight = lineHeight - 2 + "px";
    	lines = screenHeight/lineHeight;
		build_yAxis();
	});

	var toggleGrid = $("#toggle-grid");
	toggleGrid.click(function(){
		var toggleVal = toggleGrid.html();
		if( toggleVal == "Off"){
			$("#grid-control-panel").css("opacity",0.2);
			toggleGrid.html("On");
			//put code here to toggle off grid
			$("#yAxis, #xAxis").hide();
		}
		if(toggleVal == "On"){
			$("#grid-control-panel").css("opacity", 1);
			toggleGrid.html("Off");
			//put code to toggle on grid
			$("#yAxis, #xAxis").show();
		}
	});

});

//grid styles!
 $("head").append("<style>.xcols{float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fill>.xcols{border-right:.8125em solid #fff;border-left:.8125em solid #fff;background:#000;width:100%}#yAxis{position:absolute;z-index:100;top:0;bottom:0;right:0;height:100%;width:100%;opacity:.1}#xAxis{max-width:1000px;width:100%;opacity:.1;z-index:100;margin:auto;height:100%;position:absolute;top:0;right:0;left:0}.fixed{position:fixed;bottom:0;z-index:101}hr{border:1px solid #000;margin:0}hr:last-child{margin:0!important}</style>");





var containerWidth = 12;
var columns;

var $GoGo = {
	containerWidth: containerWidth -1,
	numCols: columns,
	colWidth: containerWidth/12
}
console.log(containerWidth + " " + $GoGo.containerWidth);