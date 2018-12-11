// Constructor
function Chronometer() {
  const self = this;
  self.currentTime = 0;
  self.intervalId = null;
}

Chronometer.prototype.startClick = function () {
  const self = this;
  self.intervalId = setInterval( () => {
    self.currentTime++;
    self.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  const self = this;
  return parseInt(self.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  const self = this;
  return self.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return value < 10 ? '0' + value : value.toString();
};

Chronometer.prototype.setTime = function () {
  const self = this;
  self.minutes = self.twoDigitsNumber(self.setMinutes());
  self.seconds = self.twoDigitsNumber(self.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  const self = this;
  clearInterval(self.intervalId);
};

Chronometer.prototype.resetClick = function () {
  const self = this;
  self.currentTime = 0;
  self.minutes = '00';
  self.seconds = '00';
};

Chronometer.prototype.splitClick = function () {
  const self = this;
  return `${self.minutes}:${self.seconds}`;
};
