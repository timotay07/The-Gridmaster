$(document).ready(function(){
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
    $body.prepend('<div class="fixed"><button id="toggle">Toggle Baseline</button></div>');
    
    $(".xcols").css( "width", colWidth +"%" );
    var screenHeight = screen.height;
    
    $("#xAxis > .fill div").height(screenHeight);
    
    /* Establishes vertical rhythm or "the Baseline" */
    var lineHeight = 26; /*Change this to your calculated line-height*/
    var adjustedLineHeight = lineHeight - 2 + "px";
    var lines = screenHeight/lineHeight;
    
    console.log(lines);
    console.log(screenHeight);
    
   
    for (i = 0; i <= lines; i++) {
    $("#yAxis").prepend("<hr/>");
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



    /*setting some styles*/

    /*Incase anybody is wondering why I mix style with script in this part: the Go Go Grid is for visual aid
    **and to prove to yourself that you are adhering to both the principles of horizontal and vertical rhythm.
    **Therefore, I have put all the styles of the grid into this script so that you may easily use the visual 
    **aid during development, and then quickly strip it by deleting the script tags. This leaves you with a 
    **nice clean style sheet and folder!
    */

    $("head").append("<style>.xcols{float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fill>.xcols{border-right:.8125em solid #fff;border-left:.8125em solid #fff;height:100px;background:#000;width:100%}#yAxis{position:absolute;z-index:100;top:0;bottom:0;right:0;height:100%;width:100%;opacity:.1}#xAxis{max-width:1000px;width:100%;opacity:.1;z-index:100;margin:auto;height:100%;position:absolute;top:0;right:0;left:0}.fixed{position:fixed;bottom:0;z-index:10}hr{border:1px solid #000;margin:0}hr:last-child{margin:0!important}</style>");


    /*
    
    */


});


//for debuggins

$(document).ready(function(){
    
    
    $(".demo").height(100);
});