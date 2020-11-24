import "./css/styles.css";
import getTemplate from "./temlates/page-layout.hbs";

const timer = {
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2019")
  },

//  переменные;
const timerEl = document.querySelector(timer.selector);
const startdeltaTime = timer.targetDate - Date.now();
const startDates = getDateArrey(startdeltaTime);
 // Функция добавления "0" в значение счетчика
 const pad = function (value, symbolNumbers) {
    return String(value).padStart(symbolNumbers, "0");
  };


  // Функция создания массива значений счетчика
  const getDateArrey = function (deltaTime) {
    let dates = [];
    return (dates = [
      {
        label: "Days",
        dataValue: "days",
        value: pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 3),
      },
      {
        label: "Hours",
        dataValue: "hours",
        value: pad(
          Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          2
        ),
      },
      {
        label: "Minutes",
        dataValue: "mins",
        value: pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)), 2),
      },
      {
        label: "Seconds",
        dataValue: "secs",
        value: pad(Math.floor((deltaTime % (1000 * 60)) / 1000), 2),
      },
    ]);
  };
  //  Функция наполнения структуры документа
 
    timerEl.insertAdjacentHTML("afterbegin", timer.template(startDates));
  
  // Функция внесения значений таймера
insertTimerValue = function (dates) {
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
};
insertTimerValue(startDates);

  const currentdeltaTime = timer.targetDate - Date.now();
  const currentDates = getDateArrey(currentdeltaTime);
  insertTimerValue(currentDates);

  

// class CountdownTimer {
//   constructor({ selector, targetDate }, template) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.template = template
//   }
// // переменные;
// timerEl = document.querySelector(this.selector);
// startdeltaTime = this.targetDate - Date.now();
// startDates = getDateArrey(startdeltaTime);

//   // Функция добавления "0" в значение счетчика
//   pad = function (value, symbolNumbers) {
//     return String(value).padStart(symbolNumbers, "0");
//   };
//   // ФУнкция создания массива значений счетчика
//   getDateArrey = function (deltaTime) {
//     let dates = [];
//     return (dates = [
//       {
//         label: "Days",
//         dataValue: "days",
//         value: pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 3),
//       },
//       {
//         label: "Hours",
//         dataValue: "hours",
//         value: pad(
//           Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           2
//         ),
//       },
//       {
//         label: "Minutes",
//         dataValue: "mins",
//         value: pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)), 2),
//       },
//       {
//         label: "Seconds",
//         dataValue: "secs",
//         value: pad(Math.floor((deltaTime % (1000 * 60)) / 1000), 2),
//       },
//     ]);
//   };
//   //  Функция наполнения структуры документа
//   layoutMaker = function () {
//     timerEl.insertAdjacentHTML("afterbegin", this.template(startDates));
//   };
//   // layoutMaker();
//   // Функция внесения значений таймера
// insertTimerValue = function (dates) {
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
// timerStep = function () {
//   const currentdeltaTime = this.targetDate - Date.now();
//   const currentDates = getDateArrey(currentdeltaTime);
//   insertTimerValue(currentDates);
// }
// makeTimerStep = function () {setInterval(timerStep (), 1000)};
// makeTimerStep ()
// }

// // Создаем новый объект с помощью конструктора

// const timer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// }, template: getTemplate);

