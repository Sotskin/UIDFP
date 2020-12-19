// let user = {name: "Sotsu", courses: [{"User Interface": 1}, {"Database Management": 0}]}

const is_professor = false;

const onClickAddCourse = (actorName) => {
    console.log(actorName)
    $("#"+actorName).dialog('close')
    $("#dialog-enroll-course").dialog('open')
}

const reCenterDialog = () => {
    $(".ui-dialog-content").dialog("option","position","center");
}

$(function() {
    $("#dialog-manage-course-student").dialog({
        autoOpen: false,
        dialogClass: 'dialog',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-manage-course-student").dialog('close');
            });
        }
    });
    $("#dialog-manage-course-professor").dialog({
        autoOpen: false,
        dialogClass: 'dialog',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-manage-course-professor").dialog('close');
            });
        }
    });
    $("#dialog-enroll-course").dialog({
        autoOpen: false,
        dialogClass: 'dialog',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-enroll-course").dialog('close');
            });
        }
    });

    $("#enroll-search-form").on("submit", (e) => {
        e.preventDefault();
        $("#enroll-search-result").css("display", "block")
        reCenterDialog();
    })
    $("#enroll-choice-form").on("submit", (e) => {
        e.preventDefault();
        $("#dialog-enroll-course").dialog('close');
        $("#enroll-search-result").css("display", "none")
    })
    $("#button-manage-course").on("click", function(e) {
        e.preventDefault()
        let $dialog_manage_course = is_professor ?  $("#dialog-manage-course-professor") : $("#dialog-manage-course-student");
        $dialog_manage_course.dialog("open");
    });

});