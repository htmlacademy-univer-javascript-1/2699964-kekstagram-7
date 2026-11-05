const checkStringLength = (line, lengthLine) => (line.length<=lengthLine);
function isPalindrome(line){
  line = line.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < line.length/2; i++) {
    if(line[i]!==line[line.length-i-1]){return false;}
  }
  return true;
}
function getNumbers(line){
  const safeLine = line.toString();
  let numberInLine = "";
  for(const part of safeLine){
    if(Number.isNaN(parseInt(part))){
      continue;
    }
    numberInLine += part;
  }
  return parseInt(numberInLine);
}
