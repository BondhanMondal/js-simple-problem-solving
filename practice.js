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
console.log('My Interest: ', myInterest);