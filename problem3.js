var divisor = 2;
var number = 600851475143;
while(number > 1){
    if(number % divisor === 0){ 
        number = number / divisor;
    } else {
        divisor++;
    }
}