import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function CounterUp({ endValue = 0, sectionId }) {
  const [showCount, setShowCountValue] = useState(false);
  useEffect(() => {
    const rec = document.getElementById(sectionId);
    if (rec) {
      const currentPosition = rec.offsetTop - document.body.scrollTop;
      if (currentPosition < window.innerHeight) {
        setShowCountValue(true);
      } else {
        window.addEventListener("scroll", () => {
          const currentScrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
          if (currentScrollPosition + 500 > currentPosition) {
            setShowCountValue(true);
          }
        });
      }
    }
  }, [endValue, sectionId, showCount]);
  return (
    <>{showCount ? <CountUp delay={0} duration={3} end={endValue} /> : 0}</>
  );
}

export default CounterUp;
