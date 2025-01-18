// eslint-disable-next-line react/prop-types
const Button = ({ label, iconURL, variant = "default" }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg 
      ${variant === "default" && "text-white bg-coral-red border-coral-red"}
      ${variant === "outline" && "text-slate-gray bg-white border-2"}
      ${
        variant === "search" &&
        "w-full text-white bg-coral-red border-coral-red"
      }  leading-none  rounded-full`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRightIcon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
