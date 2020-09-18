/**This program calculates age in different units **/
var floatAge, floatDays, intWeeks, intFortnights, floatMonths;
    floatAge = parseFloat(prompt("How old are you?"));
    floatDays = parseFloat(floatAge*365); //Calculate floatDays by multiplying floatAge by 365
    intWeeks = parseInt(floatDays/7); //Calculate intWeeks by dividing floatDays by 7
    intFortnights = parseInt(floatDays/14); //Calculate intFortnights by dividing floatDays by 14
    floatMonths = parseFloat(floatAge*12); //Calculate floatMonths by multiplying floatAge by 12
    alert("Your age in years is " + floatAge + '\n' + "Your age in months is " + floatMonths + '\n' + "Your age in fortnights is " + intFortnights + '\n' + "Your age in weeks is " + intWeeks + '\n' + "Your age in days is " + floatDays);