const starsList=document.querySelectorAll(".star__input"),formSubmitButton=document.querySelector(".rating__form-button"),form=document.querySelector(".rating__form"),ratingData=document.querySelector(".rating__data");starsList.length&&starsList.forEach(((t,e)=>{t.addEventListener("click",(()=>{starsList.forEach(((t,o)=>{e===o?(t.classList.add("star__input--active"),t.checked=!0):e<=o?t.classList.remove("star__input--active"):t.classList.add("star__input--active")}))}))})),formSubmitButton&&formSubmitButton.addEventListener("click",(t=>{t.preventDefault();const e=new FormData(form);ratingData.textContent=`Выбранный рейтинг: ${e.get("rating")}`}));let cur=0,speed=0;const progress=document.querySelector(".progress__bar"),progressButton=document.querySelector(".progress__button"),startLoading=()=>{if(progress){let t=0,e=0;const o=setInterval((function(){0!==progress.style.width&&(progress.style.width=0),progress.style.width=t+"%";let r=Math.random()>.5?1:-1;e>0&&(e+=r*Math.random()*.2),e<=0&&(e=.01),console.log(t),console.log(e),t>100?clearInterval(o):t+=e}),10)}};progressButton&&progressButton.addEventListener("click",startLoading);const mainFormSubmitButton=document.querySelector(".main-form__button[type=submit]"),mainForm=document.querySelector(".main-form"),onClickSendForm=async t=>{t.preventDefault();const e=new FormData(mainForm);(await fetch("https://echo.htmlacademy.ru",{method:"POST",body:e})).ok&&(window.location.href="form.html")};mainFormSubmitButton&&mainForm&&mainFormSubmitButton.addEventListener("click",onClickSendForm);const linkButton=document.querySelector(".buttons__list a");linkButton&&linkButton.addEventListener("click",(t=>{t.preventDefault(),alert("С включенным js я веду себя как кнопка, но стоит его выключить я всё равно работаю, но уже как ссылка. Прогрессивное улучшение..")}));