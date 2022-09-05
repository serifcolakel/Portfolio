function CountingMinutesI(str) {
  var times = str.split("-");
  var from = times[0];
  var to = times[1];

  function timer(num) {
    var hrs = num.split(":");
    var mins = hrs[1].slice(0, 2);
    var ampm = hrs[1].slice(2);
    var totalMins = 0;

    if (ampm === "pm") {
      pmMins = 720;
    } else {
      pmMins = 0;
    }

    var totalMins = hrs * 60 + mins + pmMins;
    return totalMins;
  }
  var diff = timer(from) - timer(to);
  return diff;
}

// keep this function call here
CountingMinutesI("12:30pm-12:00am");
