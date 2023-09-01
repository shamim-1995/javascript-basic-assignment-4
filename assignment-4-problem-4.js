function findAddress(obj) {
    
    const values = [];
  
    const propertiesToCheck = ["street", "house", "society"];
  
    for (const property of propertiesToCheck) {
      if (obj.hasOwnProperty(property)) {
        values.push(obj[property]);
      } else {
        
        values.push("__");
      }
    }
  
    return values.join(",");
  }
  
  const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
  const output1 = findAddress(input1);
  console.log(output1); 
  
  const input2 = { street: 10, society: "Earth Perfect" };
  const output2 = findAddress(input2);
  console.log(output2); 
  const input3 = { street: 10 };
  const output3 = findAddress(input3);
  console.log(output3);
  