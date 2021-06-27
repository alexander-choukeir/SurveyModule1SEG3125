// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail) {
    var b = document.getElementById(txtEmail).value;

    var filter = /^\S+@\S+$/;

    if (filter.test(b)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCard) {
    var b = document.getElementById(txtCard).value;

    var filter = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;

    if (filter.test(b)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/21/2021", "06/23/2021", "06/25/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    $("#therapist").change(function(){
        var selectedTherapist = $(this).children("option:selected").val();
        
        if (selectedTherapist == "Marie Smith") {
            unavailableDates = ["06/21/2021", "06/23/2021", "06/25/2021", "06/28/2021", "06/30/2021", "07/01/2021"];
        }

        if (selectedTherapist == "Hannah Johnson") {
            unavailableDates = ["06/22/2021", "06/24/2021", "06/29/2021", "07/01/2021", "07/06/2021"];
        }

        if (selectedTherapist == "Spencer Collings") {
            unavailableDates = ["06/21/2021", "06/25/2021", "06/28/2021", "07/01/2021", "07/02/2021", "07/05/2021"];
        }

        if (selectedTherapist == "Mark Watford") {
            unavailableDates = ["06/23/2021", "06/24/2021", "06/30/2021", "07/01/2021", "07/07/2021", "07/08/2021"];
        }

    })


    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground

    

    let listoferrors = [];
    let listofsuccess = [];
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            $("#phone").val("Wrong format for phone");
            $("#phone").addClass("error");
            listoferrors.push("Wrong format for phone")
        }
        else {
            $("#phone").removeClass("error");
            listofsuccess.push("Success");
        }
    });

    $("#email").on("change", function(){
        if (!validateEmail("email")){
            $("#email").val("Wrong format for email");
            $("#email").addClass("error");
            listoferrors.push("Wrong format for email")
        }
        else {
            $("#email").removeClass("error");
            listofsuccess.push("Success");
        }
    });

    $("#debit").on("change", function(){
        if (!validateCard("debit")){
            $("#debit").val("Wrong format for credit card number");
            $("#debit").addClass("error");
            listoferrors.push("Wrong format for credit card number")
        }
        else {
            $("#debit").removeClass("error");
            listofsuccess.push("Success");
        }
    });

    
    let errormsg = document.getElementById("errormessage");
    
    errormsg.innerHTML = "";

    let successmsg = document.getElementById("successfulmessage");
    
    successmsg.innerHTML = "";
    $("#pay").click(function(){

        if (listoferrors.length > 0) {
            successmsg.innerHTML = "";
            successmsg.className = "";
            errormsg.className = "alert alert-danger";
            for (var i = 0; i <listoferrors.length; i++) {
                let msg = document.createElement("p");
                msg.innerHTML = listoferrors[i];
                errormsg.appendChild(msg);
            }
        } else if (listofsuccess.length > 0){
            errormsg.innerHTML = "";
            errormsg.className = "";
            successmsg.className = "alert alert-success"
            let a = document.createElement("p");
            a.innerHTML = "Sucessful! Your appointment is now booked. A confirmation has been sent to your email."
            successmsg.appendChild(a);
        }
        
        listoferrors = [];
        listofsuccess = [];
    })

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    $("#firstname").on("mouseenter", function(){
        $("#firstname").addClass("showInput");
    });

    $("#firstname").on("mouseleave", function(){
        $("#firstname").removeClass("showInput");
    });

    $("#lastname").on("mouseenter", function(){
        $("#lastname").addClass("showInput");
    });

    $("#lastname").on("mouseleave", function(){
        $("#lastname").removeClass("showInput");
    });

    $("#email").on("mouseenter", function(){
        $("#email").addClass("showInput");
    });

    $("#email").on("mouseleave", function(){
        $("#email").removeClass("showInput");
    });

    $("#cvv").on("mouseenter", function(){
        $("#cvv").addClass("showInput");
    });

    $("#cvv").on("mouseleave", function(){
        $("#cvv").removeClass("showInput");
    });

    $("#nameoncard").on("mouseenter", function(){
        $("#nameoncard").addClass("showInput");
    });

    $("#nameoncard").on("mouseleave", function(){
        $("#nameoncard").removeClass("showInput");
    });

    $("#dateInput").on("mouseenter", function(){
        $("#dateInput").addClass("showInput");
    });

    $("#dateInput").on("mouseleave", function(){
        $("#dateInput").removeClass("showInput");
    });

    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    $("#input-time").on("mouseenter", function(){
        $("#input-time").addClass("showInput");
    });

    $("#input-time").on("mouseleave", function(){
        $("#input-time").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#firstname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#lastname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#email").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#cvv").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#nameoncard").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#dateInput").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#input-time").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});
