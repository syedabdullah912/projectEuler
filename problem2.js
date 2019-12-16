var abc = [1,2];
var i = 0;
var sum = 0;
while (abc[0] + abc[1] < 4000000){
    i = abc[0] + abc[1];
    console.log(i);
    abc[0] = abc[1];
   abc[1] = i;

    if (i % 2 === 0){
        sum += i;
    }
}