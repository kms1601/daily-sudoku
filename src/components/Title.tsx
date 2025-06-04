import styled from "styled-components";
import {d, m, y} from "../util/today.ts";

const Div = styled.div`
  text-align: center;
`

const Title = () => {
  return (
    <Div>
      <h1>Daily Sudoku</h1>
      <h2>{y + "/" + m + "/" + d}</h2>
    </Div>
  );
};

export default Title;