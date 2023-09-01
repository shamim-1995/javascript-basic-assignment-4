function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return false;
    }
  
    const sum = changeArray.reduce((acc, curr) => acc + curr, 0);
  
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
  
  const input1 = [1, 2, 5];
  const num1 = 10;
  
  const input2 = [1, 5, 5];
  const num2 = 10;
  
  console.log(canPay(input1, num1)); 
  console.log(canPay(input2, num2)); 
  