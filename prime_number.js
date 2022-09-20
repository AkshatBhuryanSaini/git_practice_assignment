function prime(num){
var factor=0;

for(var i=1; i<=num; i++){
if(num%i==0){
 factor++;
}
}return factor;



