# Challenge 5: Workday-Scheduler

## Description:
* Create a simple calendar application that allows a user to save events for each hour of the day by modifying and refractoring existing code.

* The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

* The Day.js library is used to work on the date and time.

___

## User Story:
* AS AN employee with a busy schedule
* I WANT to add important events to a daily planner
* SO THAT I can manage my time effectively

___

## Acceptance Criteria:
<u>GIVEN</u> I am using a daily planner to create a schedule ...

* <i>WHEN </i> I open the planner,
<br><b>THEN </b> the current day is displayed at the top of the calendar.

* <i>WHEN </i> I scroll down,
<br><b>THEN </b> I am presented with time-blocks for standard business hours.

* <i>WHEN </i> I view the time-blocks for that day,
<br><b>THEN </b> each time-block is color coded to indicate whether it is in the past, present, or future.

* <i>WHEN </i> I click into a time-block,
<br><b>THEN </b> I can enter an event.

* <i>WHEN </i> I click the save button for that time-block,
<br><b>THEN </b> the text for that event is saved in local storage.

* <i>WHEN </i> I refresh the page,
<br><b>THEN </b> the saved events persist.

___

## Completed Work:
* Upon loading the web application, the user sees the current day,  current calendar date and  current time. The day, date, and time is dynamic, reflecting the current user's time-zone and location in the world.

* Depending on the current time of the user, the user will see each hourly text-block with a different background color. The time references are past, present and future: 'Past' is the color grey, 'Present' is the color red, and 'Future is the color green.

* Within each text-block, the user may input his or her information. The user may save the information to the localStorage by clicking the 'blue' button to the far right.

* The input information will remain until the following day. The user can also return to the webpage, using the same browser, manually delete the input(s) and save the changes by clicking the far-right blue button.

* As the user's day progresses, the webpage will dynamically change the backgrounds to each hourly text-block using Day.js, jQuery, CSS and HTML.

* When the following day arrives, the webpage will dynamically reset using Day.js.

___

## Student's Submitted Work:

* URL of the <u>deployed application</u>: [Employee Work-Day Scheduler](https://clochstampfor60.github.io/C5-Workday-Scheduler/)


* URL of the application's <u>GitHub Repository</u>: [CLocky60](https://github.com/CLochstampfor60/C5-Workday-Scheduler)

___

## Final Product

![Final-Product-GIF](https://github.com/CLochstampfor60/C5-Workday-Scheduler/blob/main/assets/images/05-FinalProduct-third-party-apis-homework-demo.gif)
![Final-Product-homepage](/assets/images/Home-Page.jpg)
![Final-Product-text](/assets/images/Text-added.jpg)
___


## License
This project is licensed under the terms of the MIT license.

***

