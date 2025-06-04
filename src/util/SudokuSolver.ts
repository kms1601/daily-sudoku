import Random from "./Random.ts";
import Sudoku from "./Sudoku.ts";

class SudokuSolver {
  sudoku: Sudoku;
  answer: Sudoku;
  random: Random;

  constructor(seed: number) {
    this.sudoku = new Sudoku();
    this.answer = new Sudoku();
    this.random = new Random(seed);

    this.fillRandomly(this.answer);
    this.answer.copyTo(this.sudoku);

    const max = this.random.nextRange(17, 50);
    this.createSudoku(max);
  }

  public fillRandomly(sudoku: Sudoku): boolean {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (!this.answer.occupied(r, c)) {
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          this.random.shuffle(nums);
          for (const num of nums) {
            if (!sudoku.containsNum(num, r, c)) {
              this.answer.addNum(num, r, c);
              if (this.fillRandomly(sudoku)) return true;
              this.answer.removeNum(num, r, c);
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  private createSudoku(max: number) {
    let count = 81;
    const rowCol: number[][] = [];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        rowCol.push([r, c]);
      }
    }
    this.random.shuffle(rowCol);
    let tn = 0;
    const temp = new Sudoku();
    while (max < count && rowCol.length > 0) {
      const cur = rowCol.pop();
      if (!cur) break;
      const r = cur[0], c = cur[1];
      tn = this.sudoku.grid[r][c];
      this.sudoku.removeNum(tn, r, c);
      this.sudoku.copyTo(temp);
      if (this.countSolutions(temp) === 2) {
        this.sudoku.addNum(tn, r, c);
        continue;
      }
      count--;
    }
  }

  private countSolutions(sudoku: Sudoku): number {
    let solutions = 0;

    const solve = () => {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (!sudoku.occupied(r, c)) {
            for (let num = 1; num <= 9; num++) {
              if (!sudoku.containsNum(num, r, c)) {
                sudoku.addNum(num, r, c);
                if (solve()) {
                  if (solutions >= 2) return true;
                }
                sudoku.removeNum(num, r, c);
              }
            }
            return false;
          }
        }
      }
      solutions++;
      return true;
    }
    solve();
    return solutions;
  }

}

export default SudokuSolver;