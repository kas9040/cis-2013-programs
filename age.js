var floatAge, floatDays, intWeeks, intFortnights, floatMonths;
    floatAge = parseFloat(prompt("How old are you?"));
    floatDays = parseFloat(floatAge*365);
    intWeeks = parseInt(floatDays/7);
    intFortnights = parseInt(floatDays/14);
    floatMonths = parseFloat(floatAge*12);
    alert("Your age in years is " + floatAge + '\n' + "Your age in months is " + floatMonths + '\n' + "Your age in fortnights is " + intFortnights + '\n' + "Your age in weeks is " + intWeeks + '\n' + "Your age in days is " + floatDays);