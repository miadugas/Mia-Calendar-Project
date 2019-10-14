//think i have moment figured out; testing...
$("#currentDaT").text(moment().format("MMMM Do, h:mm a"));
var hour = moment().format("h");
var amPm = moment().format("a");
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
onLoad();

//functions 
function onLoad() {
if(amPm === "pm"){
    hour = parseInt(hour) + 12;
}

for (var i = 0; i < timeArray.length; i++) {
    if (timeArray[i] > hour) {
    $("#text" + timeArray[i]).attr(
        
    );
    } else {
    $("#text" + timeArray[i]).attr(
        " "
    );
    }
}

for (var i = 0; i < timeArray.length; i++) {
    if (hour === timeArray[i]) {
    }
}
for (var i = 0; i < timeArray.length; i++) {
    var z = JSON.parse(localStorage.getItem(timeArray[i]));
    $("#text" + timeArray[i]).text(z);
}
}

//event listeners for on click 
$(".lock").on("click", function() {
var n = $(this).attr("lock");
var x = $(this).attr("number");
if (n === "open") {
    $(this).attr("src", "./assets/Images/red-icon.png");
    var y = document.getElementById("text" + x).value;
    localStorage.setItem(x, JSON.stringify(y));
    document.getElementById("text" + x).readOnly = true;
    $(this).attr("lock", "closed");
} else {
    $(this).attr("src", "./assets/Images/green-button.png");
    $(this).attr("lock", "open");
    document.getElementById("text" + x).readOnly = false;
}
});
//all lock event listener
$("#all-lock").on("click", function() {
$(".lock").attr("src", "./assets/Images/red-icon.png");
$(".lock").attr("lock", "closed");
for (var i = 0; i < timeArray.length; i++) {
    document.getElementById("text" + timeArray[i]).readOnly = true;
    var y = document.getElementById("text" + timeArray[i]).value;
    localStorage.setItem(timeArray[i], JSON.stringify(y));
}
});
//all unlock event listener
$("#all-unlock").on("click", function() {
$(".lock").attr("src", "./assets/Images/green-button.png");
$(".lock").attr("lock", "open");
for (var i = 0; i < timeArray.length; i++) {
    document.getElementById("text" + timeArray[i]).readOnly = false;
}
});
//reset all event listener
$("#reset").on("click", function() {
for (var i = 0; i < timeArray.length; i++) {
    localStorage.clear();
    document.getElementById("text" + timeArray[i]).value = "";
}
})

// Dark Mode Switch
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
// Time of Day Greeting
var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning');
	var afternoon = ('Good Afternoon');
	var evening = ('Good Evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 
	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;
	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);







;
