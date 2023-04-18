import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';
import '../css/promises.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  const data = new FormData(e.target);

  generatorPromise(data);
}

function generatorPromise(data) {
  const item = {};
  data.forEach((value, name) => item[name] = Number(value));
  let delay = item.delay;

  for (let i = 1; i <= item.amount; i++) {
    const position = i;

    if (position > 1) delay += item.step;

    createPromise(position, delay).then(onSuccessPromise).catch(onErrorPromise)
  }
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
};

function onSuccessPromise(result) {

  Notify.success(result, {
    timeout: 5000,
    width: '400px',
  });
};

function onErrorPromise(error) {

  Notify.failure(error, {
    timeout: 5000,
    width: '400px',
  });
};
