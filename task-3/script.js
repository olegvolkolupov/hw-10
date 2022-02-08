class Timer {

  #timerId;

  constructor(refs, endDate) {
    this.refs = refs;
    this.endDate = endDate;
  }

  countdown = () => {
    let dist = this.endDate - Date.now();
  
    if (dist <= 0 && this.#timerId) {
      clearInterval(this.#timerId);
      refs.timerRef.classList.add('hide');
      refs.pActionRef.classList.add('hide');
      refs.pFinalRef.classList.remove('hide');
    }
    let tmp = dist / 1000;
    let days = Math.floor(tmp / 60 / 60 / 24);
    let hours = Math.floor((tmp / 60 / 60) % 24);
    let minutes = Math.floor((tmp / 60) % 60);
    let seconds = Math.floor(tmp % 60);
  
    this.refs.daysRef.innerText = days < 10 ? '0' + days : days;
    this.refs.hoursRef.innerText = hours < 10 ? '0' + hours : hours;
    this.refs.minsRef.innerText = minutes < 10 ? '0' + minutes : minutes;
    this.refs.secsRef.innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  init() {
    this.refs.pActionRef.innerText = `Till the ${this.endDate.toLocaleString()} left:`;
    this.#timerId = setInterval(this.countdown, 1000);
  }
}

let refs = {
  timerRef: document.querySelector('.timer'),
  daysRef: document.querySelector('.js-days'),
  hoursRef: document.querySelector('.js-hours'),
  minsRef: document.querySelector('.js-mins'),
  secsRef: document.querySelector('.js-secs'),
  pFinalRef: document.querySelector('.wrap__finaltext'),
  pActionRef: document.querySelector('.wrap_actionname')
};

let endDate = new Date('Feb 8, 2022 1:30:10');
endDate.setMonth(endDate.getMonth() + 1);

let timer = new Timer(refs, endDate);
timer.init();