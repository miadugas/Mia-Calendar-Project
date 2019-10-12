// Bootstrap Calendar


$('#calendar').fullCalendar({
header: {
left: 'prev,next today',
center: 'addEventButton',
right: 'month,agendaWeek,agendaDay,listWeek'
    },
defaultDate: '2018-11-16',
navLinks: true,
editable: true,
eventLimit: true,
events: [{
title: 'Simple static event',
start: '2018-11-16',
description: 'Super cool event'
},

],
customButtons: {
addEventButton: {
text: 'Add new event',
click: function () {
var dateStr = prompt('Enter date in YYYY-MM-DD format');
var date = moment(dateStr);

if (date.isValid()) {
$('#calendar').fullCalendar('renderEvent', {
title: 'Dynamic event',
start: date,
allDay: true
});
} else {
alert('Invalid Date');
}

}
}
},
dayClick: function (date, jsEvent, view) {
var date = moment(date);

if (date.isValid()) {
$('#calendar').fullCalendar('renderEvent', {
title: 'Dynamic event from date click',
start: date,
allDay: true
});
} else {
alert('Invalid');
}
},
});



















//Functon to AddScript for Dark Mode Switch
// //triggers function when switch is flipped
// $( ".inner-switch" ).on("click", function() {
//     if( $( "body" ).hasClass( "dark" )) {
//     $( "body" ).removeClass( "dark" );
//     $( ".inner-switch" ).text( "OFF" );
//     } else {
//     $( "body" ).addClass( "dark" );
//     $( ".inner-switch" ).text( "ON" );
//     }
// })

// Functon to Add - Time of day greeting 
// var hours = new Date().getHours();
// var message;
// var morning = ('Good Morning');
// var afternoon = ('Good Afternoon');
// var evening = ('Good Evening');

// if (hours >= 0 && hours <12) {
// message = morning;

// } else if (hours >12 && hours <17){
//     message = afternoon;

// } else if (hours >17 && hours <24){
//     message = evening;

// }

// $('greeting').append(message);











;
