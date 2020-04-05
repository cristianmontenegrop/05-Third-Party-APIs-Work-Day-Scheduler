
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
// console.log(currentHour);
// console.log(now);

$(".textarea").each(function () {

    if ($(this).attr("block-hour") == currentHour) {
        // console.log("==")
        $(this).addClass("present");
    }

    if ($(this).attr("block-hour") > currentHour) {
        // console.log("<")
        $(this).addClass("future");
    }

    if ($(this).attr("block-hour") < currentHour) {
        // console.log(">")
        $(this).addClass("past");
    }

});

var appointmentsBlock = {};

// retrieving of previously stored information 
appointmentsBlock = JSON.parse(localStorage.getItem("appointmentsBlock"));
console.log(appointmentsBlock);
$("input[type=text]").each(function () {

    $(this).val(appointmentsBlock[$(this).attr("block-hour")]);
});

// Function that captures the input on each time-block and saves it in the
//  localStorage when any button is pressed
$("button").on("click", function () {

    $("input[type=text]").each(function () {

        appointmentsBlock[$(this).attr("block-hour")] = $(this).val();
    });

    localStorage.setItem("appointmentsBlock", JSON.stringify(appointmentsBlock));
    // console.log(localStorage);
    // console.log(appointmentsBlock);
});




