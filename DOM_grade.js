var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var intGradeOption, floatTotalPoints, floatHomeworkPoints, floatMidtermPoints, floatFinalPoints, stringFinalGrade;

    floatHomeworkPoints = parseFloat($("hw_pts").value);
    floatMidtermPoints = parseFloat($("mid_pts").value);
    floatFinalPoints = parseFloat($("fin_pts").value);
    floatTotalPoints = (floatHomeworkPoints + floatMidtermPoints + floatFinalPoints);
    intGradeOption = parseInt($("grade_option").value);
   
   if (intGradeOption===1)
{
    if(floatTotalPoints >= 80) {
        stringFinalGrade = "Pass";
    }
        else {
            stringFinalGrade = "Fail";
        }
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
    $("final_grade").value = stringFinalGrade;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};