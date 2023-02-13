function stopwatch (epoch) {
  
  let hours = '00'
  let minutes = '00'
  let seconds = '00'
  
stopwatch
  hours = Math.floor(epoch/3600)
  let remainingTime = epoch -(hours*3600)
  minutes = Math.floor(remainingTime/60)
  remainingTime = remainingTime -(minutes*60)
  seconds = remainingTime

  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

let answerArray = [hours,minutes,seconds]
let answer = answerArray.join(':')

  return answer;
}

module.exports = stopwatch;