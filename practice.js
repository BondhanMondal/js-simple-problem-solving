//1. farenheight to celcious

function farenheightToCelcious(farenheight){
    let celcious = (farenheight - 32) * (5/9);
    return celcious;
}
const myCelcious = farenheightToCelcious(300);
console.log('my celcious : ', myCelcious);