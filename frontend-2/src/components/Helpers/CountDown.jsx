/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";

function CountDown({ lastDate = "" }) {
  //   const [showDate, setDate] = useState(0);
  const [showHour, setHour] = useState(0);
  const [showMinute, setMinute] = useState(0);
  const [showSecound, setDateSecound] = useState(0);
  // count Down
  const provideDate = new Date(lastDate);
  // format date
  const year = provideDate.getFullYear();
  const month = provideDate.getMonth();
  //   console.log(month);
  const date = provideDate.getDate();
  //   console.log(date);
  const hours = provideDate.getHours();
  //   console.log(hours);
  const minutes = provideDate.getMinutes();
  //   console.log(minutes);
  const seconds = provideDate.getSeconds();
  //   console.log(seconds);

  // date calculation logic
  const _seconds = 1000;
  const _minutes = _seconds * 60;
  const _hours = _minutes * 60;
  const _date = _hours * 24;

  // interval function
  const startInterval = () => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance =
        new Date(year, month, date, hours, minutes, seconds).getTime() -
        now.getTime();
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      //   setDate(Math.floor(distance / _date));
      setMinute(Math.floor((distance % _hours) / _minutes));
      setHour(Math.floor((distance % _date) / _hours));
      setDateSecound(Math.floor((distance % _minutes) / _seconds));
    }, 1000);
  };

  // effect
  useEffect(() => {
    if (lastDate !== "") {
      startInterval();
    }
  });
  return (
    <span>
      {showHour} : {showMinute} : {showSecound}
    </span>
  );
}

export default CountDown;
