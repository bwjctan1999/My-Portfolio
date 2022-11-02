import "../CardStack.css";
import IconJava from "../../../assets/icons/IconJava";

export default function JavaCard() {
  return (
    <div 
    className="text-sm lg:text-lg card p-4 text-white bg-red-600 flex flex-col justify-between items-center bg-cover shadow-md">
      <p className=" w-full">JAVA</p>
      <IconJava />
      <p className="w-full rotate-180">JAVA</p>
    </div>
  );
}
