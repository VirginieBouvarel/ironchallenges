class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilliseconds = 0; //<= BONUS
    this.millisecondsIntervalId = 0;// <= BONUS
  }
  startClick(callback1, callback2) {
   this.intervalId = setInterval(() => {
     this.currentTime ++;
     if (printTime) printTime();
   }, 1000);
   //BONUS =>
   this.millisecondsIntervalId = setInterval( () => {
    if (this.currentMilliseconds === 99) {
      this.currentMilliseconds = 0;
    }
    this.currentMilliseconds ++;
    if (printMilliseconds) printMilliseconds();
  }, 100);
  }
  getMinutes() {
   return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes(this.currentTime) * 60);
  }
  getMilliseconds(){
    return this.currentMilliseconds;
  }
  twoDigitsNumber(value) {
    return value < 10 ? `0${value}`: value += "";
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }
  resetClick() {
   this.currentTime = 0;
   minDec.innerHTML = 0;
   minUni.innerHTML = 0;
   secDec.innerHTML = 0;
   secUni.innerHTML = 0;
   // BONUS =>
   this.currentMilliseconds = 0;
   milDec.innerHTML = 0;
   milUni.innerHTML = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
