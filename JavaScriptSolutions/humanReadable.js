// converts seconds to 'HH:MM:SS'
function humanReadable (seconds) {
  // if seconds is equal to 0
  if (Number(seconds) == 0) {
    return '00:00:00';
  } else if (Number(seconds) <= 59) { // if seconds < 59, under a minute
    // Add 0 to seconds if it is under 10
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return '00:00:' + seconds;
  } else if (Number(seconds) <= 3599) { // if seconds < 3599, under 59 mins
    // Pull out as many minutes as possible from seconds
    var mins = Math.floor(Number(seconds) / 60);
    // Set seconds to the remainder after pulling out minutes
    seconds =  Math.floor(Number(seconds) % 60);
    // Add 0 to values if they are under 10
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `00:${mins}:${seconds}`;
  } else { // if seconds >= 1 hour
    // Pull out as many hours as possible from seconds
    var hours = Math.floor(Number(seconds) / 3600);
    // Set seconds to the remainder after pulling out hours
    seconds = Math.floor(Number(seconds) % 3600);
    // Pull out as many minutes as possible from seconds
    var mins = Math.floor(Number(seconds) / 60);
    // Set seconds to the remainder after pulling out minutes
    seconds = Math.floor(Number(seconds) % 60);
    // Add 0 to values if they are under 10
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${hours}:${mins}:${seconds}`;
  }
}
