import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.refs = {
      $days: document.querySelector(`${selector} [data-value="days"]`),
      $hours: document.querySelector(`${selector} [data-value="hours"]`),
      $mins: document.querySelector(`${selector} [data-value="mins"]`),
      $secs: document.querySelector(`${selector} [data-value="secs"]`),
      timerFace: document.querySelector('#timer-1'),
    };   
  }

  

  renderTime({ days, hours, mins, secs }) {
    this.refs.$days.innerHTML = days;
    this.refs.$hours.innerHTML = hours;
    this.refs.$mins.innerHTML = mins;
    this.refs.$secs.innerHTML = secs;
  }
}

function parseTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
return String(value).padStart(2, '0');
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

timer.renderCounterOnPage();