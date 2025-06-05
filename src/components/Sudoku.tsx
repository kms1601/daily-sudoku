import styled from "styled-components";
import {useLayoutEffect, useState, ReactNode} from "react";
import SudokuSolver from "../utils/SudokuSolver.ts";
import Title from "./Title.tsx";
import {d, m, y} from "../utils/today.ts";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: flex;
  justify-content: center;
  flex-direction: column;
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

  //&:hover {
  //  background-color: #e1e1e1;
  //}
`

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`

const Btn = styled.button`
  margin-top: 16px;
  padding: 10px;
  width: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
  }

  &:active {
    background-color: #cccccc;
  }
`

const Sudoku = () => {
  const [show, setShow] = useState<boolean>(false);
  const [sudokuSolver, setSudokuSolver] = useState<SudokuSolver>(null);

  useLayoutEffect(() => {
    setSudokuSolver(new SudokuSolver(Number(y + "" + m + "" + d)));
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Div>
      <Title></Title>
      {
        (sudokuSolver
          ?
          <>
            <Table>
              <tbody>
              {
                show
                  ?
                  <>
                    {sudokuSolver.answer.grid.map((row, index) => (
                      <Tr key={row + "" + index}>{row.map((col, index) => {
                        return (
                          <Td key={col + "" + index}>{col === 0 ? "" : col}</Td>
                        ) as ReactNode
                      })}</Tr>
                    ))}
                  </>
                  :
                  <>
                    {sudokuSolver.sudoku.grid.map((row, index) => (
                      <Tr key={row + "" + index}>{row.map((col, index) => {
                        return (
                          <Td key={col + "" + index}>{col === 0 ? "" : col}</Td>
                        ) as ReactNode
                      })}</Tr>
                    ))}
                  </>
              }
              </tbody>
            </Table>
            <BtnDiv>
              <Btn onClick={handleShow}>{show ? "Hide solution" : "Solution"}</Btn>
            </BtnDiv>
          </>
          : <></>) as ReactNode
      }
    </Div>
  );
};

export default Sudoku;