import "./css/styles.css";
import getTemplate from "./temlates/page-layout.hbs";
console.log(getTemplate);
// -----------------------------------------------------------------

class CountdownTimer {
  constructor(selector, targetDate, template) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.template = template
  }

// Переменные;
timerEl = document.querySelector(this.selector);
startdeltaTime = this.targetDate - Date.now();

// Функция добавления "0" в значение счетчика
pad(value, symbolNumbers) {
  return String(value).padStart(symbolNumbers, "0");
};

// Функция создания массива значений счетчика
getDateArrey(deltaTime) {
  return (dates = [
    {
      label: "Дней",
      dataValue: "days",
      value: this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 3),
    },
    {
      label: "Часов",
      dataValue: "hours",
      value: this.pad(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        2
      ),
    },
    {
      label: "Минут",
      dataValue: "mins",
      value: this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)), 2),
    },
    {
      label: "Секунд",
      dataValue: "secs",
      value: this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000), 2),
    },
  ]);
};
// Массив объектов текущей даты
startDates = this.getDateArrey(this.startdeltaTime);

//  Функция наполнения структуры документа
pullStructure = this.timerEl.insertAdjacentHTML("beforeend", template(this.startDates));

// Функция внесения значений таймера
insertTimerValue(dates) {
  for (let i = 0; i < dates.length; i += 1) {
    if (
      dates[i].dataValue ===
      document
        .querySelector(`[data-value="${dates[i].dataValue}"]`)
        .getAttribute("data-value")
    ) {
      document.querySelector(
        `[data-value="${dates[i].dataValue}"]`
      ).textContent = dates[i].value;
    }
  }
}

insertTimerValue(startDates);

setInterval(() {
  currentdeltaTime = this.targetDate - Date.now();
  currentDates = this.getDateArrey(currentdeltaTime);
  this.insertTimerValue(currentDates);
}, 1000)
}

const timer = new CountdownTimer ("#timer-1", new Date("Jan 01, 2021"), getTemplate)
console.log(timer)

// --------------------------------------------------------------------------------

// const timer = {
//   selector: "#timer-1",
//   targetDate: new Date("Jan 01, 2021"),
// };

// // Переменные;
// const timerEl = document.querySelector(timer.selector);
// const startdeltaTime = timer.targetDate - Date.now();
// console.log(timerEl);
// // Функция добавления "0" в значение счетчика
// const pad = function (value, symbolNumbers) {
//   return String(value).padStart(symbolNumbers, "0");
// };

// // Функция создания массива значений счетчика
// const getDateArrey = function (deltaTime) {
//   let dates = [];
//   return (dates = [
//     {
//       label: "Дней",
//       dataValue: "days",
//       value: pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 3),
//     },
//     {
//       label: "Часов",
//       dataValue: "hours",
//       value: pad(
//         Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         2
//       ),
//     },
//     {
//       label: "Минут",
//       dataValue: "mins",
//       value: pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)), 2),
//     },
//     {
//       label: "Секунд",
//       dataValue: "secs",
//       value: pad(Math.floor((deltaTime % (1000 * 60)) / 1000), 2),
//     },
//   ]);
// };
// // Массив объектов текущей даты
// const startDates = getDateArrey(startdeltaTime);
// console.log(startDates);
// //  Функция наполнения структуры документа
// timerEl.insertAdjacentHTML("beforeend", getTemplate(startDates));
// // Функция внесения значений таймера
// const insertTimerValue = function (dates) {
//   for (let i = 0; i < dates.length; i += 1) {
//     if (
//       dates[i].dataValue ===
//       document
//         .querySelector(`[data-value="${dates[i].dataValue}"]`)
//         .getAttribute("data-value")
//     ) {
//       document.querySelector(
//         `[data-value="${dates[i].dataValue}"]`
//       ).textContent = dates[i].value;
//     }
//   }
// };
// insertTimerValue(startDates);

// setInterval(() => {
//   const currentdeltaTime = timer.targetDate - Date.now();
//   const currentDates = getDateArrey(currentdeltaTime);
//   insertTimerValue(currentDates);
// }, 1000);
