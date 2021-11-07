
// onLoad() run loading bar
$(document).on('readystatechange', function () {
    var url = window.location.href.url;
    if (document.readyState == "interactive") {

        var all = document.getElementsByTagName("*");
        // sets loading bar initizial to 0%
        document.getElementById("loading_width").value = 0; // Ist das ein BugFix oder kann das weg?
  
        var scale = 4;
        if (isFirstVisit()){
            // if you be on the startpage run a slower loading animation
            scale = 1;
            console.log("Hey, that's your first visit!!");
            setVisited();
        }

        for (var i = 0, max = all.length; i < max; i++) {
            set_ele(all[i], scale);
        }
    }
});
showCookieBanner();
$(document).on('readystatechange', function () {
    if (document.readyState == "interactive") {
        document.body.style.overflow = "hidden"
        //showCookieBanner();
    }
})
//$("#loading_bar").fadeOut("slow");
//$("#loading_bar").hide();
//$("#cookie-banner").hide();

var stop = false;

$(document).keyup(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        stop = true
        $("#loading_bar").hide();
        $("#cookie-banner").hide();
        hideCookieBanner();
    }
});

var sleep_time = 15;

function check_element(ele, scale) {
    var all = document.getElementsByTagName("*");
    var totalele = all.length;
    var per_inc = 100 * scale / all.length;

    if ($(ele).on()) {
        var prog_width = per_inc + Number(document.getElementById("loading_width").value);
        document.getElementById("loading_width").value = prog_width;
        $("#loading_percent").animate({
            width: prog_width + "%"
        }, sleep_time, function () {
            if (Number(document.getElementById("loading_percent").style.width.replace("%", "")) >= 100 || stop) {
                if (scale == 1 && !stop){
                    document.getElementById("loading_percent").style.width = "97%";
                    setTimeout(() => {
                        document.getElementById("loading_percent").style.width = "100%"
                        showCookieBanner();
                        $("#loading_bar").fadeOut("slow");
                    }, 500);
                }
                else{
                    document.getElementById("loading_percent").style.width = "100%";
                    showCookieBanner();
                    $("#loading_bar").fadeOut("slow");
                }           
            }
        });
    } else {
        set_ele(ele, scale);
    }
}

function set_ele(set_element, scale) {
    check_element(set_element, scale);
}


// cookies

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

function showCookieBanner() {
    if (getCookie("cookie-banner") == '1') {
        $("#cookie-banner").remove();
        document.body.style.overflow = "auto"
    } else {
        document.body.style.overflow = "hidden";
    }

}

function hideCookieBanner() {
    document.body.style.overflow = "auto";
    $("#cookie-banner").fadeOut("slow");
    eraseCookie("cookie-banner")
    setCookie("cookie-banner", "1", 7);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// Session Storage in Use

// Check if user has already a entry in session storage...
function isFirstVisit() {
    var returns = getSessionStorageItem("visited");
    if (returns == '1') {
        return false;
    }
    return true;
}

// set entry in session storage...
function setVisited() {
    setSessionStorageItem("visited", '1');
}

// Session Storage

function setSessionStorageItem(itemname, itemvalue) {
    sessionStorage.setItem(itemname, itemvalue);
} 

function getSessionStorageItem(itemname) {
    return sessionStorage.getItem(itemname);
}

function removeSessionStorageItem(itenname) {
    sessionStorage.removeItem(itenname);
}