import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';
import '../css/timer.css';
import '../css/button.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] - currentDate > 1000) {
      refs.btnStartDateTimer.disabled = false;
    } else {
      refs.btnStartDateTimer.disabled = true;
      Notify.failure('Please choose a date in the future', {
        timeout: 3000,
        width: '400px',
      });
    }
  },

};

const refs = {
  inputDateTimer: document.querySelector('#datetime-picker'),
  btnStartDateTimer: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const fp = flatpickr(refs.inputDateTimer, options);
refs.btnStartDateTimer.addEventListener('click', handleStartDateTimer);
refs.btnStartDateTimer.disabled = true;

function handleStartDateTimer(e) {
  const selectedDates = fp.selectedDates[0].getTime();
  refs.btnStartDateTimer.disabled = true;
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedDates - currentTime;
    const convertTimer = convertMs(deltaTime);
    updateDateTimer(convertTimer);
    if (selectedDates - Date.now() < 1000) {
      clearInterval(timerId);
      const convertTimer = convertMs(0);
      updateDateTimer(convertTimer);
      Notify.success('The countdown timer is complete', {
        timeout: 5000,
        width: '400px',
      });
    }
  }, 1000);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function updateDateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};
