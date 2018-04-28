function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[today.getDay()];
    
    
    document.getElementById('footer').innerHTML =
    h + ":" + m + ":" + s + " "+ n;
    var t = setTimeout(startTime, 500);
}


function login() {
    
    var username = prompt("Please enter your username:", "Harry Potter");
    var password = prompt("Please enter your password:", "LordVolderMort666");

    
}

function sign_up() {
    
    var username = prompt("Please enter the username you want:", "Harry Potter");
    var password = prompt("Please select a password:", "LordVolderMort666");

    
}




function loadReportsPage(){
    location.href="reports.html"
}

function loadOpenRecquisitionsPage(){
    location.href="open_recquisitions.html"
}

function loadHomePage(){
    location.href="index.html"
}

function loadCandidatesPage(){
    location.href="candidates.html"
}

function loadEventsPage(){
    location.href="events.html"
}

function loadCompaniesPage(){
    location.href="companies.html"
}