//Use day.js to obtain the current day
var today = dayjs().format('dddd, DD/MM/YYYY');
$('#currentDay').text(today);

var currentTime = parseInt(dayjs().format('HH'));
console.log(currentTime);

var totalTime = [9,10,11,12,13,14,15,16,17];

for (let i = 0; i < totalTime.length; i++) {
    var firstColumn = $("<div class= 'row g-0 text-center'></div>")
    var secondColumn =$("<div class='col-sm-6 col-md-2 hour'>" + totalTime[i] + ":00</div>")
    var thirdColumn = $("<input class='col-sm-6 col-md-9 text present' id=" + totalTime[i] + " data-time=" + totalTime[i] + "></input>")
    var fourthColumn = $("<button class='col-6 col-md-1 saveBtn' id=" + totalTime[i] +"AMSAVE><i class='fas fa-save'></i></div>")
firstColumn.append(secondColumn,thirdColumn,fourthColumn);
$("#timeblocks").append(firstColumn);

console.log(parseInt($("#" + totalTime[i] + "").attr('data-time')))

var blockTime = parseInt($("#" + totalTime[i]).attr('data-time'));

if (currentTime < blockTime) {
  $("#" + totalTime[i]).removeClass("present").addClass("future");
  console.log("future");
} else if (currentTime === blockTime) {
  $("#" + totalTime[i]).removeClass("present").addClass("present");
  console.log("present");
} else if (currentTime > blockTime) {
  $("#" + totalTime[i]).removeClass("present").addClass("past");
  console.log("past");
}
}

