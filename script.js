
// Current date Function
function currentDate() {
    var momentDate = moment().format('LLLL');
    $("#currentDay").text(momentDate);
}
currentDate();


{/* <div class="row timeblock2">
<div class="hour col-1">12:00</div>
<input type="text" placeholder="Write your notes here" class="Time-block present textarea col-10">
<button class="saveBtn fas fa-lock col-1"></button>
</div> */}


// create a function that creates all the needed timeblocks