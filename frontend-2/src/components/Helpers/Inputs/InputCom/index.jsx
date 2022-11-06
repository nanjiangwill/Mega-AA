import React from "react";
import Icons from "../../Icons";

export default function InputCom({
  label,
  type,
  name,
  placeholder,
  iconName,
  inputHandler,
  value,
  classes,
  disabled,
}) {
  return (
    <div className={`input-com ${classes.join(" ")}`}>
      {label && (
        <label
          className="input-label text-dark-gray text-xl font-bold block mb-2.5"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="input-wrapper border border-light-purple w-full rounded-[50px] h-[58px] overflow-hidden relative ">
        <input
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={inputHandler}
          className="input-field placeholder:text-base text-bese px-6 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
          type={type}
          id={name}
        />
        {iconName && (
          <div className="absolute right-6 bottom-[19px] z-10">
            <Icons name={iconName} />
          </div>
        )}
      </div>
    </div>
  );
}
