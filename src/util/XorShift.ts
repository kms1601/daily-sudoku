class XorShift {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
    if (seed === 0) this.seed = 980406;
  }

  public next() {
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >> 7;
    this.seed ^= this.seed << 17;
    return this.seed;
  }
}

export default XorShift;