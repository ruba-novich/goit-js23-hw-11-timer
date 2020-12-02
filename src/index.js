import './styles.css';

 


class CountdownTimer {
  constructor({ selector, targetDate,}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    
    this.refs = {
      $days: document.querySelector(`${selector} [data-value="days"]`),
      $hours: document.querySelector(`${selector} [data-value="hours"]`),
      $mins: document.querySelector(`${selector} [data-value="mins"]`),
      $secs: document.querySelector(`${selector} [data-value="secs"]`),   
  }

    this.start();
      
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface(time);
    },1000);
  }

  
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
  }

  updateClockface({ days, hours, mins, secs }) {
    this.refs.$days.innerHTML = days;
    this.refs.$hours.innerHTML = hours;
    this.refs.$mins.innerHTML = mins;
    this.refs.$secs.innerHTML = secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1', 
  targetDate: new Date('Jan 01, 2021'),
  
});



