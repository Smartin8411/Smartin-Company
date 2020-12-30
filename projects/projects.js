//JS Home Page Clock
setInterval(currentTime, 1000)//represents milliseconds for each second

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function currentTime() {
  const time = new Date()
  const seconds = time.getSeconds() / 60
  const minutes = (seconds + time.getMinutes()) / 60
  const hours = (minutes + time.getHours()) / 12
  setupRotation(secondHand, seconds);
  setupRotation(minuteHand, minutes);
  setupRotation(hourHand, hours);
}

function setupRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

currentTime();