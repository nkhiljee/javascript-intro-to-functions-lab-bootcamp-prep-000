var index = require("./root.js")
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
 console.log(string.toUpperCase())
}

function logWhisper(string) {
 console.log(string.toLowerCase())
}


var uppercase = "HELLO"
var lowercase = "hello"
function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return "I Can't Hear You!"
  }
  else if(string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if(string === "I Love you, Grandma")
    return ""
}