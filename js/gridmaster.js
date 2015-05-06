function build_xyControlPanel() {
	$("body").prepend('<div id="yAxis"></div><div id="xAxis"><div class="fill"></div></div><div id="gggcontrol-panel"><div class="gggcontrol-brick"><div id="gggcontrol-widget-1"><label class="gggrid" id="ggglabel-line-height">Line Height</label><input name="lineHeight" class="gggrid" type="text" value="24" size="2" disabled><div class="gggtuner"><button class="gggrid" id="gggbaseline-up">+</button><button class="gggrid" id="gggbaseline-down">-</button></div></div><div id="gggcontrol-widget-2"><label class="gggrid" id="ggglabel-columns">Columns</label><input name="numberColumns" class="gggrid" type="text" value="12" size="2" disabled><div class="gggtuner"><button class="gggrid" id="gggcolumns-up">+</button><button class="gggrid" id="gggcolumns-down">-</button></div></div></div><div class="gggcontrol-brick"><div id="gggcontrol-widget-3"><label class="gggrid">Page Width</label><input name="containerWidth" class="gggrid" id="gggpagewidth" type="text" value="1000"></div></div><div class="gggcontrol-brick"><button class="gggrid" id="gggtoggle-button">Grid<br>Off</button></div></div>');
	//change default input values
	$("input[name=lineHeight]").val();
	$("input[name=numberColumns]").val();
	$("input[name=containerWidth]").val();

		function hide_controlPanel(booleanValue) {
		if (booleanValue === true) {
			$("#gggcontrol-panel").hide();
		}
	}

	//turn off widget boolean --> true will hide control panel widget
	hide_controlPanel();

}

// call function
build_xyControlPanel();

//set global params - must build Control Panel before setting(done in previous step)
var inputLH = $("input[name=lineHeight]");
var lineHeight = Number(inputLH.val());

var inputNC = $("input[name=numberColumns]")
var numCols = Number(inputNC.val());

var inputCW = $("input[name=containerWidth]")
var containerWidth = Number(inputCW.val());

//we(I) are going to rename this GridMaster "In-browser Prototyping System" - said this on 5/1/2015 and git has this version timestamped - my poor mans patent
function gogoGridClass(lineHeight,numCols,containerWidth) {
	this.screenHeight = $(window).height();
	//vertical object params
	this.lineHeight = lineHeight;
	this.adjustedLineHeight = this.lineHeight - 2 + "px";
	this.lines = this.screenHeight/this.lineHeight;
	//horizonal object params
	this.numCols = numCols;
	this.colWidth = (1/this.numCols) * 100;
	this.containerWidth = containerWidth;

	this.recalculate = function(lineHeight,numCols,containerWidth){
			this.screenHeight = $(window).height();
			//vertical object params
			this.lineHeight = lineHeight;
			this.adjustedLineHeight = this.lineHeight - 2 + "px";
			this.lines = this.screenHeight/this.lineHeight;
			//horizonal object params
			this.numCols = numCols;
			this.colWidth = (1/this.numCols) * 100;
			this.containerWidth = containerWidth;
	};

	this.build_xAxis = function() {
			$("#xAxis > div").empty();
			for (i = 0; i < this.numCols; i++) {
		        $("#xAxis > div").prepend('<div class="xcols"></div>');
		    }
		    $(".xcols").css( "width", this.colWidth +"%" );
		    $("#xAxis > .fill div").height(this.screenHeight);
	};

	this.build_yAxis = function() {
			$("#yAxis").empty();
		    for (i = 0; i <= this.lines; i++) {
		    $("#yAxis").prepend('<hr class="latitudes"/>');
		    }
		    $("hr.latitudes").css("margin-bottom", this.adjustedLineHeight);
		    $("#yAxis").height(this.screenHeight);
	};

	this.build_ggstyles = function() {
			$("head").append("<style>.xcols{float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fill>.xcols{border-right:.8125em solid #fff;border-left:.8125em solid #fff;background:#e74c3c;width:100%}#yAxis{position:absolute;z-index:-1;top:0;bottom:0;right:0;height:100%;width:100%;opacity:.1}#xAxis{max-width:1000px;width:100%;opacity:.1;z-index:-1;margin:auto;height:100%;position:absolute;top:0;right:0;left:0}hr.latitudes{border:1px solid #e74c3c;margin:0}hr.latitudes:last-child{margin:0!important}button.gggrid,label.gggrid,input.gggrid{font-family:sans-serif;font-size:1em;padding:1em;background-color:#000;color:#fff;border:none;float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:solid 1px #fff;text-align:center}input.gggrid:focus{outline:none}label.gggrid{width:117px}button.gggrid:hover{cursor:pointer}button.gggrid:focus{outline:none}.gggtuner{float:left}#gggbaseline-up,#gggbaseline-down,#gggcolumns-up,#gggcolumns-down{width:42px;padding:.25em 1em;float:left;height:26px}#gggcolumns-down,#gggbaseline-down{clear:both}#gggcontrol-widget-2{clear:both}.gggcontrol-brick{float:left}#gggpagewidth{clear:left;float:left;width:117px}#gggtoggle-button{height:104px;line-height:20px;float:left;display:block;border-top-right-radius:10px;border-bottom-right-radius:10px}#gggcontrol-panel{position:fixed;bottom:10px;left:10px;z-index:100;width:428px}#ggglabel-line-height{border-top-left-radius:10px}#ggglabel-columns{border-bottom-left-radius:10px}</style>");
	};
}

// create GridMaster instance
var gogoGrid = new gogoGridClass(lineHeight,numCols,containerWidth);

gogoGrid.build_xAxis();

gogoGrid.build_yAxis();

gogoGrid.build_ggstyles();

//GUI functions
$("#gggbaseline-up").click(function(){
	var x = $("input[name=lineHeight]").val();
	$("input[name=lineHeight]").val(++x);
	x = $("input[name=lineHeight]").val();
	gogoGrid.lineHeight = x;
	gogoGrid.recalculate(gogoGrid.lineHeight,gogoGrid.numCols,gogoGrid.containerWidth);
	gogoGrid.build_yAxis();
});
$("#gggbaseline-down").click(function(){
	var x = $("input[name=lineHeight]").val();
	$("input[name=lineHeight]").val(--x);
	x = $("input[name=lineHeight]").val();
	gogoGrid.lineHeight = x;
	gogoGrid.recalculate(gogoGrid.lineHeight,gogoGrid.numCols,gogoGrid.containerWidth);
	gogoGrid.build_yAxis();
});
$("#gggcolumns-up").click(function(){
	var x = $("input[name=numberColumns]").val();
	$("input[name=numberColumns]").val(++x);
	x = $("input[name=numberColumns]").val();
	gogoGrid.numCols = x;
	gogoGrid.recalculate(gogoGrid.lineHeight,gogoGrid.numCols,gogoGrid.containerWidth);
	gogoGrid.build_xAxis();
});
$("#gggcolumns-down").click(function(){
	var x = $("input[name=numberColumns]").val();
	$("input[name=numberColumns]").val(--x);
	x = $("input[name=numberColumns]").val();
	gogoGrid.numCols = x;
	gogoGrid.recalculate(gogoGrid.lineHeight,gogoGrid.numCols,gogoGrid.containerWidth);
	gogoGrid.build_xAxis();
});
$("input[name=containerWidth]").focus(function(){
	var x = $("#gggcontrol-widget-3 > label");
	x.html("Set Page").css("cursor","pointer");
});
$("#gggcontrol-widget-3 > label").click(function(){
	var x = $("#gggcontrol-widget-3 > label");
	var y = x.html();
	var z = "Set Page";
	if(y === z){
		gogoGrid.containerWidth = $("input[name=containerWidth]").val();
		$("#xAxis").css("max-width",gogoGrid.containerWidth + "px");
		var y = $("#xAxis").css("max-width");
		console.log(y);
		x.html("Page Width");
	} else {
		console.log("went to else statement");
	}
});
$("#gggtoggle-button").click(function(){
	var x = $("#xAxis").css("display");
	if(x == "block"){
		$("#yAxis").css("display","none");
		$("#xAxis").css("display","none");
		$(this).html('Grid<br>On');
		$("#gggcontrol-panel").css("opacity",0.3);
	} else {
		$("#yAxis").css("display","block");
		$("#xAxis").css("display","block");
		$(this).html('Grid<br>Off');
		$("#gggcontrol-panel").css("opacity",1);
	}
});
$(window).resize(function(){
	var x = $(window).height();
	gogoGrid.screenHeight = x;
	gogoGrid.recalculate(gogoGrid.lineHeight,gogoGrid.numCols,gogoGrid.containerWidth);
	gogoGrid.build_yAxis();
	gogoGrid.build_xAxis();
});