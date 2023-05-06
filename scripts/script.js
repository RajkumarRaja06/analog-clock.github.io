"use strict";

const secondEl = document.querySelector(".second");
const minuteEl = document.querySelector(".minute");
const hourEL = document.querySelector(".hour");
const dateEl = document.querySelector(".date");
const dayEl = document.querySelector(".day");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const setTime = () => {
  setInterval(() => {
    const time = new Date();

    const second = time.getSeconds();
    const secondDegree = (second / 60) * 360 - 90;
    secondEl.style.rotate = `${secondDegree}deg`;

    const minute = time.getMinutes();
    const minuteDegree = (minute / 60) * 360 - 90;
    minuteEl.style.rotate = `${minuteDegree}deg`;

    const hour = time.getHours();
    const hourDegree = (hour / 12) * 360 - 90;
    hourEL.style.rotate = `${hourDegree}deg`;

    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    dateEl.innerText = `${date}/${month}/${year}`;

    const day = time.getDay();
    dayEl.innerText = `${days[day]}`;
  }, 1000);
};

setTime();
