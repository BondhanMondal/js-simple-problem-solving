//1. farenheight to celcious

function farenheightToCelcious(farenheight){
    let celcious = (farenheight - 32) * (5/9);
    return celcious;
}
const myCelcious = farenheightToCelcious(300);
// console.log('my celcious : ', myCelcious);

//2. Celcious to Farenheight

function celciousToFarenheight(celcious){
    let farenheight = (celcious * (9 / 5)) + 32;
    return farenheight; 
}

const myFarenheight = celciousToFarenheight(500);
// console.log('my farenheight: ', myFarenheight);

//3. Grading System

function getGrade(marks){
    if (marks >= 80 && marks <= 100) {
        console.log('You Got A+');
    }
    else if (marks >= 70 && marks <= 79) {
        console.log('You Got B+');
    }
    else if (marks >= 60 && marks <= 69) {
        console.log('You Got C+');
    }
    else if (marks >= 50 && marks <= 59) {
        console.log('You Got D+');
    }
    else if (marks >= 101) {
        console.log('Nice Try!! Height mark is 100.');
    }
    else{
        console.log('You are Failed!!!');
    }
}

// const myGrade = getGrade(49);

//4. Simple Interest Calculation

function getInterest(initialBalance, interestRate, year){
    let finalAmount = initialBalance * (1 + ((interestRate/100) * year));
    return finalAmount;
}

const myInterest = getInterest(10000, 5, 10);
// console.log('My Interest: ', myInterest);

//5. 1 to 100 print

// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }


//6. odd numbers between 50 to 80

// for(let i = 50; i <= 80; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }

//7. function for adding three number

function addThreeNumber(num1, num2, num3){
    let total = num1 + num2 + num3;
    return total;
}
const addition = addThreeNumber(5,5,5);
// console.log('Addition: ',addition);

//8. Leap Year Check

function isLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0)){
        console.log('Leap Year');
    }
    else{
        console.log('Not Leap Year');
    }
    
}

// isLeapYear(2100);

//9. Odd Even Check

function isOddEven(age){
    if (age % 2 == 0){
        console.log('Your Age is Even Number');
    }
    else{
        console.log('Your Age is odd number');
    }
}

// isOddEven(101);

//10. Hour To minute

function hourToMinute(hour){
    let minute = hour * 60;
    return minute;
}

const myMinute = hourToMinute(4);
console.log(myMinute);