(function(){
'use strict'

  function getHours(){
    var h = new Date();
    h.toTimeString();
    return h.getHours();
  }

  function getMinutes(){
    var m = new Date();
    m.toTimeString()
    return m.getMinutes();
  }

  function currentTime() {
    var current = getHours() + "." + getMinutes();
    return current;
  }

  function daytimeSalute() {
    switch (true){
      case (getHours() >= 0 && getHours() < 6):
        return 'Good Night';
        break;
      case (getHours() >= 6 && getHours() < 12):
        return 'Good Morning';
        break;
      case (getHours() >= 12 && getHours() < 14):
        return 'Good Day';
        break;
      case (getHours() >= 14 && getHours() < 18):
        return 'Good Afternoon';
        break;
      case (getHours() >= 18 && getHours() < 22):
        return 'Good Evening';
        break;
      case (getHours() >= 22 && getHours() < 24):
        return 'Good Night';
        break;
      default:
      console.log('Out of time');
      break;
      }
  }

  console.log(
    currentTime(),
    daytimeSalute()
  )

})()