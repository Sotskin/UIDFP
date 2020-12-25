// let user = {name: "Sotsu", courses: [{"User Interface": 1}, {"Database Management": 0}]}

const is_professor = false;

$(window).resize(() => {reCenterDialog()});

const onClickDefault = (actorName) => {
    $("#"+actorName).dialog('close')
}

const onClickAddCourse = (actorName) => {
    // console.log(actorName)
    $("#"+actorName).dialog('close')
    $("#dialog-enroll-course").dialog('open')
}

const reCenterDialog = () => {
    console.log("Recenter!")
    $(".ui-dialog-content").dialog("option", "position", {my: "center", at: "center", of: window});
}

$(function() {
    // Common features
    $("#dialog-manage-course-student").dialog({
        autoOpen: false,
        dialogClass: 'dialog manage-courses',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-manage-course-student").dialog('close');
            });
        }
    });
    $("#button-manage-make-appointment").on("click", (e) => {
        e.preventDefault();
        $("#dialog-manage-course-student").dialog("close")
        $("#dialog-make-appointment").dialog("open")
    })

    $("#dialog-manage-course-professor").dialog({
        autoOpen: false,
        dialogClass: 'dialog manage-courses',
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
        dialogClass: 'dialog manage-courses',
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

    // Student hours
    $("#dialog-student-hour").dialog({
        autoOpen: false,
        dialogClass: 'dialog student-hour',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-student-hour").dialog('close');
            });
        }
    });

    // Appointment
    $("#dialog-make-appointment").dialog({
        autoOpen: false,
        dialogClass: 'dialog appointments',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-make-appointment").dialog('close');
                $("#app-date").val(undefined)
                $("#app-avail-time").css("display", "none")
            });
        }
    });
    $("#app-date").on("change", (e) => {
        e.preventDefault();
        $("#app-avail-time").css("display", "block")
        reCenterDialog();
    })

    $("#dialog-edit-appointment").dialog({
        autoOpen: false,
        dialogClass: 'dialog appointments',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-edit-appointment").dialog('close');
            });
        }
    });

    // Office hour
    $("#dialog-edit-oh").dialog({
        autoOpen: false,
        dialogClass: 'dialog office-hour',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-edit-oh").dialog('close');
            });
        }
    });

    // Read Event
    $("#dialog-oh-st").dialog({
        autoOpen: false,
        dialogClass: 'dialog office-hour',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-oh-st").dialog('close');
            });
        }
    });
    $("#note-oh-st").css("display", "none");
    $("#button-oh-st-remove").css("display", "none");
    $("#button-oh-st-remove").on("click", (e) => {
        $("#button-oh-st-add").css("display", "block")
        $("#note-oh-st").css("display", "none");
        $("#button-oh-st-remove").css("display", "none");
    })
    $("#button-oh-st-add").on("click", (e) => {
        $("#button-oh-st-add").css("display", "none")
        $("#note-oh-st").css("display", "block");
        $("#button-oh-st-remove").css("display", "block");
    })

    $("#dialog-oh-ins").dialog({
        autoOpen: false,
        dialogClass: 'dialog office-hour',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-oh-ins").dialog('close');
            });
        }
    });
    $("#button-oh-ins-edit").on("click", (e) => {
        e.preventDefault();
        $("#dialog-oh-ins").dialog('close')
        $("#dialog-edit-oh").dialog('open')
    })
    $("#button-edit-oh-confirm").on("click", (e) => {
        e.preventDefault();
        $("#dialog-edit-oh").dialog('close')
        $("#dialog-oh-ins").dialog('open')
    })

    $("#dialog-app-st").dialog({
        autoOpen: false,
        dialogClass: 'dialog appointments',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-app-st").dialog('close');
            });
        }
    });
    $("#button-app-st-edit").on("click", (e) => {
        e.preventDefault();
        $("#dialog-app-st").dialog("close")
        $("#dialog-make-appointment").dialog("open")
    })

    $("#dialog-app-ins").dialog({
        autoOpen: false,
        dialogClass: 'dialog appointments',
        width: "555px",
        padding: "20px",
        modal: true,
        open: function (e, ui) {
            $('.ui-widget-overlay').bind('click', function () {
                $("#dialog-app-ins").dialog('close');
            });
        }
    });
    $("#button-app-ins-edit").on("click", (e) => {
        e.preventDefault();
        $("#dialog-app-ins").dialog("close")
        $("#dialog-edit-appointment").dialog("open")
    })
    $("#button-edit-app-confirm").on("click", (e) => {
        e.preventDefault();
        $("#dialog-edit-appointment").dialog('close')
        $("#dialog-app-ins").dialog('open')
    })

    // Buttons
    $("#button-manage-course").on("click", function(e) {
        e.preventDefault()
        let $dialog_manage_course = is_professor ?  $("#dialog-manage-course-professor") : $("#dialog-manage-course-student");
        $dialog_manage_course.dialog("open");
    });
    $("#button-manage-course-student").on("click", function(e) {
        e.preventDefault()
        $("#dialog-manage-course-student").dialog("open");
    });
    $("#button-manage-course-professor").on("click", function(e) {
        e.preventDefault()
        $("#dialog-manage-course-professor").dialog("open");
    });
    $("#button-student-hour").on("click", function(e) {
        e.preventDefault()
        $("#dialog-student-hour").dialog("open");
    });
    $("#button-make-appointment").on("click", function(e) {
        e.preventDefault()
        $("#dialog-make-appointment").dialog("open");
    });
    $("#button-edit-appointment").on("click", function(e) {
        e.preventDefault()
        $("#dialog-edit-appointment").dialog("open");
    });
    $("#button-edit-oh").on("click", function(e) {
        e.preventDefault()
        $("#dialog-edit-oh").dialog("open");
    });

    $("#button-oh-st-not-joined").on("click", function(e) {
        e.preventDefault()
        $("#dialog-oh-st").dialog("open");
    });
    $("#button-oh-ins").on("click", function(e) {
        e.preventDefault()
        $("#dialog-oh-ins").dialog("open");
    });
    $("#button-app-st").on("click", function(e) {
        e.preventDefault()
        $("#dialog-app-st").dialog("open");
    });
    $("#button-app-ins").on("click", function(e) {
        e.preventDefault()
        $("#dialog-app-ins").dialog("open");
    });

});