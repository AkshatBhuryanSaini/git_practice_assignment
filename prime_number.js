
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


var res=prime(7);

if(res==true){
console.log("Yes, it is a Prime Number");
}else{
console.log("No, it is not a prime number");
}


