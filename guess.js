/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range: "));
while ((isNaN(intMin)) || (intMin < 0))
{
    intMin = parseInt(prompt("Error! Please enter a number greater than or equal to 0: ")); //validates user input; min must be a number and be greater than or equal to zero
}
alert("Your minimum number is " + intMin);


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the maximum number in your guessing range (must be at least 2 more than your min!): "));
while ((isNaN(intMax)) || (intMax < (intMin + 2)))
{
    intMax = parseInt(prompt("Error! Please enter a number that is at least 2 more than your min: ")); // validates the user's input; Max number must be a number and be at least 2 more than the min
}
alert("Your maximum number is " + intMax);


/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */

intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin); // creates a random number between the min and max

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intCount = 1; // sets the counter

intGuess = parseInt(prompt("Please enter your guess: "));

while (isNan(intGuess) || (intGuess > intMax) || (intGuess < intMin)) // guess must be a number and be between the max and min numbers
{
    intGuess = parseInt(prompt("Error! Please enter your guess (must be between the max and min): ")); // validates user's guess
} 

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

while (intGuess != intRandom) // checks user's guess against random number
{
    if (intGuess > intRandom)
    {
        alert("Sorry! Your guess is too high. Try again.");
    }
    else
    {
        alert("Sorry! Your guess is too low. Try again.");
    }
    intCount++; //increments counter
    intGuess = parseInt(prompt("Please enter a guess between " + intMin + "and " + intMax));
    while (isNan(intGuess) || (intGuess > intMax) || (intGuess < intMin))
{
    intGuess = parseInt(prompt("Error! Please enter your guess (must be between the max and min): ")); // validates user input
} 
}
 
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!"); // provides final output upon successful guessing

