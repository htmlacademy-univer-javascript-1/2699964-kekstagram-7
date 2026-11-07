// eslint-disable-next-line no-unused-vars
const checkStringLength = (line, lengthLine) => (line.length<=lengthLine);
// eslint-disable-next-line no-unused-vars
function isPalindrome(line){
  line = line.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < line.length/2; i++) {
    if(line[i]!==line[line.length-i-1]){return false;}
  }
  return true;
}
// eslint-disable-next-line no-unused-vars
function getNumbers(line){
  const safeLine = line.toString();
  let numberInLine = '';
  for(const part of safeLine){
    if(Number.isNaN(parseInt(part, 10))){
      continue;
    }
    numberInLine += part;
  }
  return parseInt(numberInLine,10);
}

const convertTimeToMinutes = function(inputTime) {
  if (typeof inputTime !== 'string') {
    throw new Error('Время должно быть строкой');
  }

  const parts = inputTime.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  if (
    parts.length !== 2 ||
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    hours < 0 ||
    hours > 24 ||
    minutes < 0 ||
    minutes > 59 ||
    (hours === 24 && minutes > 0)
  ) {
    throw new Error(`Вы ввели неверное значение: ${inputTime}`);
  }

  return hours * 60 + minutes;
};
// eslint-disable-next-line no-unused-vars
const isWorkTimeValid = function(startWorkday, endWorkday, startMeeting, durationMeeting){
  startWorkday = convertTimeToMinutes(startWorkday);
  endWorkday = convertTimeToMinutes(endWorkday);
  startMeeting = convertTimeToMinutes(startMeeting);
  return startWorkday<=startMeeting && endWorkday>=(startMeeting+durationMeeting);
};

// console.log(isWorkTimeValid('08:00', '17:30', '14:00', 90));
// console.log(isWorkTimeValid('8:0', '10:0', '8:0', 120));
// console.log(isWorkTimeValid('08:00', '14:30', '14:00', 90));
// console.log(isWorkTimeValid('14:00', '17:30', '08:0', 90));
// console.log(isWorkTimeValid('8:00', '17:30', '08:00', 900));
