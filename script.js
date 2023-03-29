
	// --------- Display current day and calendar date to html and browser ----------------
var currentDay = $('#current-day').text(dayjs().format('dddd, MMMM DD, YYYY [at] h:mm A'));
console.log(currentDay);
// var currentTime = $('#current-time').text(dayjs().format('h:mm:ss A'));

// -------------- Web Application opens to the user --------------
// By 'triggering' when the full document/browser is opened by, and fully rendered to the user,
	// 		we've wrapped all the code together in an organized manner that operates without error.
$(document).ready(function () {
	// saveBtn click listener to initiate the current function and the below methods.
	$(".saveBtn").on("click", function () {
			// Obtain the values of the description in JQuery.
			var userText = $(this).siblings(".description").val();
			var userTime = $(this).parent().attr("id");

			// Save the newly added values and text into the local storage
			localStorage.setItem(userTime, userText);
	})
 
	function watchClock() {
			//Obtains current hour from Day.js value, and we assign it to a variable to be used in this function.
			var currentHourEl = dayjs().hour();

			// Method loops through each and every time-block.
			$(".time-block").each(function () {
					var timeBlockEl = parseInt($(this).attr("id").split("hour")[1]);

					// Conditional statements to check, compare and contrast with the current hour, and
					// 			finally add the appropriate background settings (i.e., past, present, future in CSS).
					if (timeBlockEl < currentHourEl) {
							$(this).removeClass("future");
							$(this).removeClass("present");
							$(this).addClass("past");
					}
					else if (timeBlockEl === currentHourEl) {
							$(this).removeClass("past");
							$(this).removeClass("future");
							$(this).addClass("present");
					}
					else {
							$(this).removeClass("present");
							$(this).removeClass("past");
							$(this).addClass("future");
					}
			})
	}

	// Obtain the user input that was saved to the localStorage from the localStorage (if any), using the id attribute of each time-block.
	// 			We also set the values to the corresponding textarea elements.
		$("#hour-7 .description").val(localStorage.getItem(".hour-7"));
		$("#hour-8 .description").val(localStorage.getItem(".hour-8"));
    $("#hour-9 .description").val(localStorage.getItem(".hour-9"));
    $("#hour-10 .description").val(localStorage.getItem(".hour-10"));
    $("#hour-11 .description").val(localStorage.getItem(".hour-11"));
    $("#hour-12 .description").val(localStorage.getItem(".hour-12"));
    $("#hour-13 .description").val(localStorage.getItem(".hour-13"));
    $("#hour-14 .description").val(localStorage.getItem(".hour-14"));
    $("#hour-15 .description").val(localStorage.getItem(".hour-15"));
    $("#hour-16 .description").val(localStorage.getItem(".hour-16"));
    $("#hour-17 .description").val(localStorage.getItem(".hour-17"));
		$("#hour-18 .description").val(localStorage.getItem(".hour-18"));

    watchClock();

		setInterval(watchClock, 15000);
})
