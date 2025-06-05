class NumberSet {
  private readonly set: boolean[];

  public constructor() {
    this.set = new Array(10).fill(false);
  }

  public add(num: number): void {
    this.set[num] = true;
  }

  public remove(num: number): void {
    this.set[num] = false;
  }

  public contains(num: number): boolean {
    return this.set[num];
  }

  public clear() {
    this.set.fill(false);
  }
}

export default NumberSet;