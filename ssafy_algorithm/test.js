//2

a2 = (arr1,arr2) =>{
    arr1.sort();
    arr2.sort();
    
    win = 0;
    for(i=0;arr1.length>i;i++){
      if(arr1[i]>arr2[i]){
          win++;
      }
      else{
          arr2[arr2.length-1-i+win]=arr2[i];
      }
    console.log(arr2);
    }
    return win;
}
arr1 =[83,24,75,97,11,46];
arr2 =[96,33,43,69,44,64];
console.log(`${a2(arr1,arr2)}`);

//3 

