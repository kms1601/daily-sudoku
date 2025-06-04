import Sudoku from "./components/Sudoku.tsx";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const App = () => {
  return (
    <Div>
      <Sudoku></Sudoku>
    </Div>
  );
};

export default App;
