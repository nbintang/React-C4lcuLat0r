import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const styleName = (btn) => {
  const className = {
    "=": "equals",
    "x": "opt",
    "/": "opt",
    "+": "opt",
    "-": "opt",
  };
  return className[btn];
};

export default function Button({ children }) {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + children : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const numberClick = () => {
    const numberString = children.toString();

    let numberValue;
    if (numberValue === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };


  const equalsClick = () => {
    if( calc.res && calc.num) {
      const math = (a, b,sign) => {
        const result = {
          "+": (a, b) => a+b,
          "-": (a, b) => a-b,
          "x": (a, b) => a*b,
          "/": (a, b) => a/b,
        }
        return result[sign](a,b)
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      })
    }
  }

  const signClick = () => {
    setCalc({
      sign: children,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num : 0
    })
  }

  const percentCLick = () => {
    setCalc({
      num : (calc.num/ 100),
      res : (calc.res/ 100),
      sign: ""
    })
  }

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    })
  }

  const handleClickButton = () => {
    const result = {
      ".": commaClick,
      "C": resetClick,
      "x": signClick,
      "/": signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": percentCLick,
      "+-" : invertClick
    };
    if (result[children]) {
      return result[children]();
    } 
    return numberClick()
    };

  return (
    <button
      onClick={handleClickButton}
      className={` ${styleName(
        children
      )} rounded hover:bg-black shadow-xl active:bg-gray-900 text-4xl border p-3  text-gray-50 font-semibold`}
    >
      {children}
    </button>
  );
}
