$(document).ready(function(){

 	//establishes grid parameters
 	var numCols = 12; /*Change this to your desired # of columns*/
    var containerWidth = 1000; /*Change this to your desired container width*/
    var colWidth = (1/numCols) * 100;
    var $body = $("body");
    //builds out grid and control panel
    $body.prepend('<div id="yAxis"></div><div id="xAxis"><div class="fill"></div></div><div id="grid-control-panel"><label>Line Height</label><input type="text" name="lineHeight" value="24" disabled><div id="tuner"><button id="up">&#43;</button><button id="down">&#45;</button></div><button id="toggle-grid">Off</button></div>');
    /*Establishes horizontal rhythm*/
    for (i = 0; i < numCols; i++) {
        $("#xAxis > div").prepend('<div class="xcols"></div>');
    }
    
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
    $("#yAxis").prepend('<hr class="latitudes"/>');
        console.log(i);
    }
    
    $("hr.latitudes").css("margin-bottom" , adjustedLineHeight);
    
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

//gogo grid-system styles!
 $("head").append("<style>.xcols{float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fill>.xcols{border-right:.8125em solid #fff;border-left:.8125em solid #fff;background:#e74c3c;width:100%}#yAxis{position:absolute;z-index:100;top:0;bottom:0;right:0;height:100%;width:100%;opacity:.1}#xAxis{max-width:1000px;width:100%;opacity:.1;z-index:100;margin:auto;height:100%;position:absolute;top:0;right:0;left:0}.fixed{position:fixed;bottom:0;z-index:101}hr.latitudes{border:1px solid #e74c3c;margin:0}hr.latitudes:last-child{margin:0!important}#grid-control-panel>input,button#down,button#toggle-grid,button#up{font-size:1em}#grid-control-panel{font-family:sans-serif;padding:1em;font-size:1em;position:fixed;bottom:0;left:0;z-index:101}label{float:left;text-align:center;line-height:26px;background-color:#000;color:#fff;padding:1em;border:1px solid #fff;width:112.5px;font-size:1em;border-top-left-radius:5px;border-bottom-left-radius:5px}#grid-control-panel>input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:75px;float:left;text-align:center;background-color:#000;border:1px solid #fff;color:#fff;padding:1em;height:60px;font-size:1em}#down,#up{display:block;height:50%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#000;border:1px solid #fff;width:50px;color:#fff;position:relative;cursor:pointer}#tuner{height:60px;position:relative;float:left}#toggle-grid{height:60px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1em;border:1px solid #fff;background:#000;color:#fff;width:75px;border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer}button#down:focus,button#toggle-grid:focus,button#up:focus{outline:0}</style>");