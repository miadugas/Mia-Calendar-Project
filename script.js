//Script for Dark Mode Switch

//triggers function when switch is flipped
$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".inner-switch" ).text( "OFF" );
    } else {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "ON" );
    }
})

// /* Time of day greeting */
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
