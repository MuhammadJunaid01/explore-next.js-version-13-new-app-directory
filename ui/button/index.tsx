import { ButtonProps } from "@/lib/interfaces";
const Button = (props: ButtonProps) => {
  const { varient, label, size, bgColor, color } = props;
  console.log(varient);
  const getClass = () => {
    switch (varient) {
      case "primary":
        return "bg-sky-300 text-white";
      case "secondary":
        return "bg-indigo-400 text-black";

      default:
        return "bg-slate-800";
    }
  };
  return (
    <div>
      <button className={`${getClass()}`}>{label}</button>
    </div>
  );
};

export default Button;
