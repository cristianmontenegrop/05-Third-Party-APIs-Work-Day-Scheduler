
// Current date Function
function currentDate() {
    var momentDate = moment().format('LLLL');
    $("#currentDay").text(momentDate);
}
currentDate();

// Function that  changes the block colors
var now = new Date();
var currentHour = now.getHours();
// var currentHour = 12;
console.log(currentHour);
console.log(now);

$(".textarea").each(function (){


    if ($(this).attr("block-hour") == currentHour) {
        console.log("==")
        $(this).addClass("present");
    }

    if ($(this).attr("block-hour") > currentHour) {
        console.log("<")
        $(this).addClass("future");
    }

    if ($(this).attr("block-hour") < currentHour) {
        console.log(">")
        $(this).addClass("past");
    }

});


// Function that captures the input on each time-block and saves it in the localStorage