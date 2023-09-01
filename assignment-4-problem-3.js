function sortMaker(arr) {
    
    if (arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
      return "Invalid Input";
    }
    
    if (arr[0] === arr[1]) {
      return "equal";
    }
    
    arr.sort(function(a, b) {
      return a - b;
    });
    
    return arr;
  }
  
  console.log(sortMaker([2, 3]));    
  console.log(sortMaker([4, 2]));    
  console.log(sortMaker([4, 4]));    
  console.log(sortMaker([1, 2]));    
  console.log(sortMaker([4, -2]));   
  