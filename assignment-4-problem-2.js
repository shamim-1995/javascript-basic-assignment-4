function matchFinder(string1,string2) {
    
    if (typeof string1 !== 'string' || string1.length === 0) {
      return "Invalid input";
    }
  
    const parts1 = string1.split(',');
  
    if (parts1.length !== 2) {
      return "Invalid input";
    }
    const str1 = parts1[0].trim();
    const str2 = parts1[1].trim();
    
  
    if (str1.includes(str2)) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(matchFinder("John Doe,ohn"));           
  console.log(matchFinder("JavaScript,Code"));        
  console.log(matchFinder("Peter Parker,Pen"));       
  console.log(matchFinder("Peter Parker,pet"));       
  