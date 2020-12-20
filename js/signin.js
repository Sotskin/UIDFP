
const sample_student = {email: "eva@columbia.edu", password: "123456"}
const sample_professor = {email: "smith@columbia.edu", password: "123456"}

$(function() {
  $("#submit-sign-in").on("click", (e) => {
    e.preventDefault()
    const email = $("#email").val();
    const pwd = $("#password").val();
    if (email === sample_student.email && pwd === sample_student.password) {
      window.location.replace("dashboard-st.html");
    } else if (email === sample_professor.email && pwd === sample_professor.password) {
      window.location.replace("dashboard-ins.html");
    } else {
      // Improve-able: show error message on screen rather than using ugly alert
      alert("Wrong email or password")
    }
  });
});