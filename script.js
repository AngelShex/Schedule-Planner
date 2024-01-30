// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
var currentHour = dayjs().hour();
var myDay = [
{
    id: "hour-9",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: ""
},
{
    id: "hour-10",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: ""
},
{
    id: "hour-11",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: ""
},
{
    id: "hour-12",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: ""
},
{
    id: "hour-1",
    hour: "01",
    time: "13",
    meridiem: "pm",
    reminder: ""
},
{
    id: "hour-2",
    hour: "02",
    time: "14",
    meridiem: "pm",
    reminder: ""
},
{
    id: "hour-3",
    hour: "03",
    time: "15",
    meridiem: "pm",
    reminder: ""
},
{
    id: "hour-4",
    hour: "04",
    time: "16",
    meridiem: "pm",
    reminder: ""
},
{
    id: "hour-5",
    hour: "05",
    time: "17",
    meridiem: "pm",
    reminder: ""
},
]





    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //




    // TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY HH:mm A'));


    
  });
  