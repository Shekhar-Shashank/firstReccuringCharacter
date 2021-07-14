let userArray = [2,5,1,2,3,5,1,2,4];  //should return 2
let arrayexample2 = [2,1,1,2,3,5,1,2,4]; //should return 1
let arrayexample3 = [2,3,4,5];  //should return undefinded

let newObj = {};

for(let i=0; i<userArray.length;i++){
  newObj[arrayexample2[i]]=0;
}
//console.log([...newMap.entries()]);

for(let j of arrayexample2){  // change the array here

  if(j){
    newObj[j] += 1;
  }
  if(newObj[j]>1){
    console.log(j);
    break;
  }}
  console.log(undefined);
 
  
