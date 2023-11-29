const replace_string = (string, pattern) => {
  let stPt = pattern.slice();
  let newStr;
  for (let i = 0; i < string.length; i++){
   switch (string[i]) {
    case stPt[0] || stPt[1]:
        newStr = string.split( string[i]).join('')
      break;
    
      // case stPt[1]:
      //   newStr = string.split( string[i]).join('')
      // break;
    default:
      break;
   }

  }
  return console.log(newStr);
}
replace_string('hello world', ['l', 'd']);
