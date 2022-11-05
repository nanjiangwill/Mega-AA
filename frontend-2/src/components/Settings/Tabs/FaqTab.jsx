import React from "react";
import Accordion from "../../Helpers/Accordion";

export default function FaqTab({ datas = [] }) {
  return (
    <div className="faq-tab w-full">
      <div className="accordion-items w-full">
        {datas &&
          datas.length > 0 &&
          datas.map((value) => (
            <Accordion key={value.id + Math.random()} datas={value} />
          ))}
      </div>
    </div>
  );
}
