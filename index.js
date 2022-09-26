$(".menuButton").click(function() 
{
    $(".menuLeft").show("slide", {direction: "left"},5000 );
}
);

$(document).click(function(event) {
    var container = $("#menuButton");
    if (!container.is(event.target) && !container.has(event.target).length) {
        $(".menuLeft").hide();
    }
});