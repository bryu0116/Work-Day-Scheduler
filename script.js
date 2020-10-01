var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// Text hour var
var NineAm = $("#9am");
var TenAm = $("#10am");
var ElevenAm = $("#11am");
var TwelvePm = $("#12pm");
var OnePm = $("#13pm");
var TwoPm = $("#14pm");
var ThreePm = $("#15pm");
var FourPm = $("#16pm");
var FivePm = $("#17pm");

var hour = moment().hours();
var userInput;
var hourSpan;
// var hourString = $(".hour").text().split(" ");


// Date and Hour
var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  NineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  TenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  ElevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  TwelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
  OnePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
  TwoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
  ThreePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
  FourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
  FivePm.val(init5);
} 

function background () {
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  })
});