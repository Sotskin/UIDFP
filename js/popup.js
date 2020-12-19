// var numDynamicButtons = 0;
//
// function createButton() {
//     numDynamicButtons++;
//     var newButton = $("<button class='dynamic-button'>")
//     var newButtonText = "Dynamic Button #" + numDynamicButtons
//
//     $(newButton).text(newButtonText)
//     $("#dynamic-button-container").append(newButton)
//
//     $(newButton).click(function(){ alert("Clicked " + newButtonText + "!") })
// }

// $(document).ready(function(){
//     $("#dialog").dialog({
//         autoOpen: false
//     });
//     $("#main-button").click(function(){
//         createButton();
//     })
// })

let user = {name: "Sotsu", courses: [{"User Interface": 1}, {"Database Management": 0}]}

$(function() {
    $("#dialog-manage-course").dialog({
        autoOpen: true,
        dialogClass: 'dialog',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-manage-course").dialog('close');
            });
        }
    });
    $("#button-manage-course").on("click", function(e) {
        e.preventDefault()
        $("#dialog-manage-course").dialog("open");
    });
});