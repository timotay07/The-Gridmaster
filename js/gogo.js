$(document).ready(function(){
    var numCols = 6; /*Change this to your desired # of columns*/
    var containerWidth = 1000; /*Change this to your desired container width*/
    var colWidth = (1/numCols) * 100;
       
    $("body").append('<div id="xAxis"></div>');
    $("#xAxis").append('<div class="group fill"></div>');
    for (i = 0; i < numCols; i++) {
    $("#xAxis > div").append('<div class="cols"></div>');
    }
    $("body").append('<div id="yAxis"></div>');
    $("body").append('<div class="fixed"><button id="toggle">Toggle Baseline</button></div>');
    
    $(".cols").css( "width", colWidth +"%" );
    var screenHeight = screen.height;
    
    $("#xAxis > .fill div").height(screenHeight);
    
    /* For the Baseline */
    
    var lineHeight = 26; /*Change this to your calculated line-height*/
    var adjustedLineHeight = lineHeight - 2 + "px";
    var lines = screenHeight/lineHeight;
    
    console.log(lines);
    console.log(screenHeight);
    
   
    for (i = 0; i <= lines; i++) {
    $("#yAxis").append("<hr/>");
        console.log(i);
    }
    
    $("hr").css("margin-bottom" , adjustedLineHeight);
    
    $("#yAxis").height(screenHeight);
    var haha = $("#yAxis").height;
    console.log(haha);
    
    $("#toggle").on("click", function(){
        $("#yAxis").toggle();
    });
    $("#toggle").on("click", function(){
        $("#xAxis").toggle();
    });
});