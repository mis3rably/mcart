// Компонент рейтинга

const starsList = document.querySelectorAll('.star__input');
const formSubmitButton = document.querySelector('.rating__form-button');
const form = document.querySelector('.rating__form');
const ratingData = document.querySelector('.rating__data');

if (starsList.length) {
  starsList.forEach((star, index) => {
    star.addEventListener('click', () => {
      starsList.forEach((star, lowerIndex) => {
        if (index === lowerIndex) {
          star.classList.add('star__input--active');
          star.checked = true;
        } else if (index <= lowerIndex) {
          star.classList.remove('star__input--active');
        } else {
          star.classList.add('star__input--active');
        }
      })
    })
  })
}

if (formSubmitButton) {
  formSubmitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    ratingData.textContent = `Выбранный рейтинг: ${formData.get('rating')}`;
  })
}

// Компонент прогресс-бар

let cur = 0;
let speed = 0;
const progress = document.querySelector('.progress__bar');
const progressButton = document.querySelector('.progress__button');

const startLoading = () => {
  if (progress) {
    let cur = 0;
    let speed = 0;

    const intervalId = setInterval(function() {

      if (progress.style.width !== 0) {
        progress.style.width = 0;
      }

      progress.style.width = cur + '%';

      let sign = Math.random() > 0.5 ? 1 : -1;

      if(speed > 0) speed += sign * Math.random() * 0.2;
      if(speed <= 0) speed = 0.01;

      console.log(cur);
      console.log(speed);

      if(cur > 100) {
        clearInterval(intervalId);
      } else {
        cur += speed;
      }
    }, 10);
  }
}

if (progressButton) {
  progressButton.addEventListener('click', startLoading);
}

// Страница формы

const mainFormSubmitButton = document.querySelector('.main-form__button[type=submit]');
const mainForm = document.querySelector('.main-form');

const onClickSendForm = async (evt) => {
  evt.preventDefault();
  const form = new FormData(mainForm);

  let response = await fetch('https://echo.htmlacademy.ru', {
    method: 'POST',
    body: form,
  });

  response.ok ? window.location.href = "form.html" : null;
}

if (mainFormSubmitButton && mainForm) {
  mainFormSubmitButton.addEventListener('click', onClickSendForm)
}

// Компонент кнопки

const linkButton = document.querySelector('.buttons__list a');

if (linkButton) {
  linkButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert('С включенным js я веду себя как кнопка, но стоит его выключить я всё равно работаю, но уже как ссылка. Прогрессивное улучшение..');
  });
}
