var userArray = [2,5,1,2,3,5,1,2,4];  //should return 2
var arrayexample2 = [2,1,1,2,3,5,1,2,4]; //should return 1
var arrayexample3 = [2,3,4,5];  //should return undefinded

let newObj = {};

for(let i=0; i<userArray.length;i++){
  newObj[arrayexample2[i]]=0
}
//newObj['2'] = 0;
//console.log([...newMap.entries()]);

for(let j of arrayexample3){
  //console.log(j);
  if(j){
    newObj[j] = newObj[j]+1
  }
  //console.log(newObj)
   if(newObj[j]>1){
    console.log(j);
    break;
  }
 
  }
  console.log(undefined)
 
  //console.log(newObj[userArray[i]])
  
