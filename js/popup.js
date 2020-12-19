// let user = {name: "Sotsu", courses: [{"User Interface": 1}, {"Database Management": 0}]}

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