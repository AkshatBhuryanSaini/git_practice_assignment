
//Code for Prime Number

function prime(num){
if(num<=1 || num==undefined){
return false;
}

for(var i=2; i<Math.sqrt(num); i++){

if(num%i==0){
 return true;
}
return false;
}

var answer=prime(7);

if(answer==true){
console.log("Prime Number");
}else{
console.log("not a prime number");
}
