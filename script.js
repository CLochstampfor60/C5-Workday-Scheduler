// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// ------------- Variables ------------------------------------------------------------------------

const currentDayEl = $('#currentDay');
const leadEl = $('.lead');
const wrapperEl = $('#wrapper');
// var hour9 = $('#hour-9');
// var hour10 = $('#hour-10');
// var hour11 = $('#hour-11');
// var hour12 = $('#hour-12');
// var hour13 = $('#hour-13');
// var hour14 = $('#hour-14');
// var hour15 = $('#hour-15');
// var hour16 = $('#hour-16');
// var hour17  = $('#hour-17');

// ------------- Timer ------------------------------------------------------------------------



hourUpdater();

setInterval(hourUpdater, 15000);



// ------------- Load any saved data from localStorage -----------------------------------------------------

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

{
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY')));
}