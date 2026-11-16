// CPIS358 JavaScript: functions, decisions, events and HTML DOM.
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userType = document.getElementById("userType").value;
    if (username == "" || password == "" || userType == "") {
        window.alert("Please complete all login fields.");
        return false;
    }
    window.alert("Login form completed. This is a demonstration, not a real login.");
    return true;
}

function checkSignup() {
    var email = document.getElementById("email").value;
    var club = document.getElementById("club").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (email == "" || club == "" || password == "" || confirmPassword == "") {
        window.alert("Please complete all sign up fields.");
        return false;
    }
    if (password != confirmPassword) {
        window.alert("Passwords do not match.");
        return false;
    }
    window.alert("Sign up form completed. No account is stored on this static website.");
    return true;
}

function showClub(club) {
    var message = "";
    if (club == 1) {
        message = "Coding Club: coding workshops and programming challenges.";
    } else if (club == 2) {
        message = "Cybersecurity Club: security awareness and networking workshops.";
    } else {
        message = "AI Club: introductory AI sessions and technology talks.";
    }
    document.getElementById("clubMessage").innerHTML = message;
    document.getElementById("clubMessage").style.color = "#1b5e20";
}

function highlightSchedule() {
    document.getElementById("schedule").style.backgroundColor = "#e8f5e9";
    document.getElementById("scheduleMessage").innerHTML = "The activity schedule is highlighted.";
}

function resetSchedule() {
    document.getElementById("schedule").style.backgroundColor = "white";
    document.getElementById("scheduleMessage").innerHTML = "";
}

function changePicture() {
    document.getElementById("dynamicPicture").src = "images/fcit.jpg";
    document.getElementById("pictureMessage").innerHTML = "FCIT Student Activities logo";
}

function originalPicture() {
    document.getElementById("dynamicPicture").src = "images/campus.jpg";
    document.getElementById("pictureMessage").innerHTML = "King Abdulaziz University campus";
}

function changeAbout() {
    document.getElementById("aboutDynamic").innerHTML = "Our goal is to help students find clubs and activities in one place.";
    document.getElementById("aboutDynamic").style.color = "#1b5e20";
}

function showContactMessage() {
    document.getElementById("contactDynamic").innerHTML = "You can contact the project team using the email addresses above.";
    document.getElementById("contactDynamic").style.color = "#1b5e20";
}

function countClubs() {
    var count = 0;
    var i;
    for (i = 1; i <= 3; i++) {
        count = count + 1;
    }
    document.getElementById("clubCount").innerHTML = "Number of available clubs: " + count;
}
