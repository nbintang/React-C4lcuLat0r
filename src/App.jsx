import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";
import CalcProvider from "./context/CalcContext";

const ButtonType = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <>
      <CalcProvider>
        <h1 className="text-3xl font-semibold mb-1 text-gray-50 text-center">React-C4lculat0r</h1>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {ButtonType.flat().map((num, i) => {
              return <Button children={num} key={i} />;
            })}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </>
  );
}

export default App;
