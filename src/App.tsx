import Sudoku from "./components/Sudoku.tsx";
import styled from "styled-components";
import Github from "./components/Github.tsx";

const Div = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;

const App = () => {
  return (
    <>
      <Div>
        <Sudoku></Sudoku>
      </Div>
      <Github></Github>
    </>

  );
};

export default App;
