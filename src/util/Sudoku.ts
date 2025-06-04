import NumberSet from "./NumberSet.ts";

class Sudoku {
  public readonly grid: number[][];
  private readonly rowSet: NumberSet[];
  private readonly colSet: NumberSet[];
  private readonly boxSet: NumberSet[];

  public constructor() {
    this.grid = Array.from<number[], number[]>({length: 9}, () => new Array(9).fill(0));
    this.rowSet = Array.from<NumberSet[], NumberSet>({length: 9}, () => new NumberSet());
    this.colSet = Array.from<NumberSet[], NumberSet>({length: 9}, () => new NumberSet());
    this.boxSet = Array.from<NumberSet[], NumberSet>({length: 9}, () => new NumberSet());
  }

  public occupied(r: number, c: number) {
    return this.grid[r][c] !== 0;
  }

  public containsNum(num: number, r: number, c: number): boolean {
    return this.rowSet[r].contains(num) ||
      this.colSet[c].contains(num) ||
      this.boxSet[this.toBoxIndex(r, c)].contains(num);
  }

  public addNum(num: number, r: number, c: number) {
    this.grid[r][c] = num;
    this.rowSet[r].add(num);
    this.colSet[c].add(num);
    this.boxSet[this.toBoxIndex(r, c)].add(num);
  }

  public removeNum(num: number, r: number, c: number) {
    this.grid[r][c] = 0;
    this.rowSet[r].remove(num);
    this.colSet[c].remove(num);
    this.boxSet[this.toBoxIndex(r, c)].remove(num);
  }

  public copyTo(to: Sudoku) {
    to.clear();
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        to.addNum(this.grid[r][c], r, c);
      }
    }
  }

  private clear() {
    for (let i = 0; i < 9; i++) {
      this.grid[i].fill(0);
      this.rowSet[i].clear();
      this.colSet[i].clear();
      this.boxSet[i].clear();
    }
  }

  private toBoxIndex(r: number, c: number) {
    return Math.floor(r / 3) * 3 + Math.floor(c / 3) % 3;
  }
}

export default Sudoku;