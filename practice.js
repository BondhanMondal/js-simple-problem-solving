//1. farenheight to celcious

function farenheightToCelcious(farenheight){
    let celcious = (farenheight - 32) * (5/9);
    return celcious;
}
const myCelcious = farenheightToCelcious(300);
console.log('my celcious : ', myCelcious);

//2. Celcious to Farenheight

function celciousToFarenheight(celcious){
    let farenheight = (celcious * (9 / 5)) + 32;
    return farenheight; 
}

const myFarenheight = celciousToFarenheight(500);
console.log('my farenheight: ', myFarenheight);