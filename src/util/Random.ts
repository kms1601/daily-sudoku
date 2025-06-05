import XorShift from "./XorShift.ts";

class Random {
  private random: XorShift;

  public constructor(seed: number) {
    this.random = new XorShift(seed);
  }

  public nextRange(from: number, to: number): number {
    let num = Math.abs(this.random.next());
    num %= to - from + 1;
    return num + from;
  }

  public shuffle(arr: number[] | number[][]) {
    for (let i = 0; i < arr.length - 1; i++) {
      const j = this.nextRange(i, arr.length - 1);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

export default Random;