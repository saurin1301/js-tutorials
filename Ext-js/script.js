/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var markVar = [89,1.78];
var johnVar = [75,1.90];

var markBMI = markVar[0] / (markVar[1] * markVar[1]);
console.log(markBMI);

var johnBMI = johnVar[0] / (johnVar[1] * johnVar[1]);
console.log(johnBMI);

var highBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + highBMI);