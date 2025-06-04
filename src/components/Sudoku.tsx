import styled from "styled-components";
import {useState} from "react";
import SudokuSolver from "../util/SudokuSolver.ts";
import Title from "./Title.tsx";
import {d, m, y} from "../util/today.ts";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  tr:nth-child(3n) td {
    border-bottom: 3px solid black;
  }
  tr:first-child td {
    border-top: 3px solid black;
  }
  width: 324px;
  max-width: 324px;
  min-width: 324px;
  height: 324px;
  max-height: 324px;
  min-height: 324px;
`

const Tr = styled.tr`
  td:nth-child(3n) {
    border-right: 3px solid black;
  }
  td:first-child {
    border-left: 3px solid black;
  }
`

const Td = styled.td`
  border: 1px solid grey;
  width: 32px;
  height: 32px;
  user-select: none;

  &:hover {
    background-color: #e1e1e1;
  }
`

const Sudoku = () => {
  const [sudokuSolver, setSudokuSolver] = useState<SudokuSolver>(new SudokuSolver(Number(y + "" + m + "" + d)));

  return (
    <Div>
      <Title></Title>
      {
        sudokuSolver ?
          <Table>
            <tbody>
            {sudokuSolver.sudoku.grid.map((row, index) => (
              <Tr key={row + "" + index}>{row.map((col, index) => (
                <Td key={col + "" + index}>{col === 0 ? "" : col}</Td>
              ))}</Tr>
            ))}
            </tbody>
          </Table>
          : <></>
      }
    </Div>
  );
};

export default Sudoku;