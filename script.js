


jQuery(document).ready(function($){
    let thehours = new Date().getHours();
        if (thehours >= 0 && thehours < 12) {
        $("body").addClass("day");
        } else if (thehours >= 17 && thehours < 24) {
        $("body").addClass("night");
        }
    });