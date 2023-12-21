//Use day.js to obtain the current day
var today = dayjs().format('dddd, DD/MM/YYYY');
$('#currentDay').text(today);

var currentTime = parseInt(dayjs().format('HH'));
console.log(currentTime);

var totalTime = [9,10,11,12,13,14,15,16,17];

for (let i = 0; i < totalTime.length; i++) {
    var firstColumn = $("<div class= 'row g-0 text-center'></div>")
    var secondColumn =$("<div class='col-sm-6 col-md-2 hour'>" + totalTime[i] + ":00</div>")
    var thirdColumn = $("<div contenteditable class='col-sm-6 col-md-9 text present' id=" + totalTime[i] + " data-time=" + totalTime[i] + "></div>")
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

// Event listener for save buttons
$("#" + totalTime[i] + "AMSAVE").on("click", function () {
  var blockId = $(this).attr("id");
  console.log(blockId);
  console.log(blockId.slice(0, -6));
  var eventData = $("#" + blockId.slice(0, -6)).text(); // Get text content from content-editable div
  console.log(eventData);

  // Save event data to local storage with a unique key
  var output = localStorage.setItem("userInput_" + blockId, eventData);
  console.log(output);

  // Provide a confirmation message
  alert("Event saved!");
});
}

window.onload = function () {
for (let i = 0; i < totalTime.length; i++) {
  var input = localStorage.getItem('userInput_' + totalTime[i] + 'AMSAVE');
  console.log(input);
  $("#" + totalTime[i]).text(input);
}
}