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

  public shuffle(arr: number[]) {
    for (let i = 0; i < arr.length * 2; i++) {
      const a = this.nextRange(0, arr.length - 1);
      const b = this.nextRange(0, arr.length - 1);
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
  }
}

export default Random;