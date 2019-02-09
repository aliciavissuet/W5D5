class Clock {
  constructor() {
    this.date = new Date ();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    this.seconds += 1;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.minutes = 0;
      this.hours = 0;
      this.seconds = 0;
    }

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    
    
    window.setInterval(this.printTime.bind(this), 1000);
  }
}
const clock = new Clock();

