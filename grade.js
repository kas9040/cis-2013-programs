//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPoints, floatHomeworkPoints, floatMidtermPoints, floatFinalPoints, stringFinalGrade;
 
    floatHomeworkPoints = parseFloat(prompt("Please enter total homework points (0-30): "));

    floatMidtermPoints = parseFloat(prompt("Please enter Midterm points(0-35): "));

    floatFinalPoints = parseFloat(prompt("Please enter Final points (0-35): "));

    floatTotalPoints = floatHomeworkPoints + floatMidtermPoints + floatFinalPoints;

    intGradeOption = parseInt(prompt("Is your course pass/fail (1) or letter grade (2)?: "));

if (intGradeOption===1)

    if(floatTotalPoints >= 80) {
        stringFinalGrade = "Pass";
    }
        else {
            stringFinalGrade = "Fail";
        }
        
    else if(intGradeOption===2)
    
        if (floatTotalPoints >= 90) {
            stringFinalGrade = "A";
        }
            else if (floatTotalPoints >= 80 && floatTotalPoints < 90) {
                stringFinalGrade = "B";
            }
                else if (floatTotalPoints >= 70 && floatTotalPoints < 80) {
                    stringFinalGrade = "C";
                }
                    else if (floatTotalPoints >= 60 && floatTotalPoints <70) {
                        stringFinalGrade = "D";
                    }
                        else {
                            stringFinalGrade = "F";
                        }

alert("Your final grade is: " + stringFinalGrade);                        