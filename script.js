const display = document.getElementById("display");

let second = 0,
  minute = 0,
  hour = 0,
  watchCounterId;

const padding = (num) => {
  if (num <= 9) return String(num).padStart(2, "0");
  else return num;
};

const startWatch = () => {
  watchCounterId = setInterval(() => {
    if (second < 59) {
      second++;
    } else if ( minute >= 59) {
      second = 0;
      hour++;
    } else {
      second = 0;
      minute++;
    }

    display.innerText = `${padding(hour)} : ${padding(minute)} : ${padding(
      second
    )}`;
  }, 1000);
};

const stopWatch = () => {
  clearInterval(watchCounterId);
};

const restWatch = () => {
  clearInterval(watchCounterId);
  second = minute = hour = 0;
  display.innerText = "00 : 00 : 00";
};
