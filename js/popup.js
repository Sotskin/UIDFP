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
        autoOpen: false,
        dialogClass: 'dialog',
        width: "555px",
        padding: "20px",
    });
    $("#button-manage-course").on("click", function() {
        $("#dialog-manage-course").dialog("open");
    });
});