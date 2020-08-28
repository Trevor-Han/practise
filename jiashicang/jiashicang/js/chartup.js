var num = 67231
var currentNum = 0
var html = document.getElementsByClassName('no-size');
// console.log(html)
var abs = 1500
var interval = null

start()

function start () {
  interval = setInterval(function () {
    currentNum = currentNum + abs
    for (var i = 0; i <= html.length - 1; i++) {
      set(i, currentNum)
    }
    if (currentNum + abs > num) {
      clearInterval(interval)
      for (var j = 0; j <= html.length - 1; j++) {
        set(j, num)
      }
    }
  })
}

function set (index, num) {
  html[index].innerHTML = num.toString()[index] ?? 0
}