import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

export default function Screen() {
  const { calc } = useContext(CalcContext);
  return (
    <Textfit
      max={70}
      mode="single"
      className="bg-gray-200 shadow pl-2 my-2 rounded h-16 flex items-center font-semibold "
    >
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
}
