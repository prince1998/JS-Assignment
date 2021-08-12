class Queens {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  checkAttack() {
    if (
      this.p1[0] == this.p2[0] ||
      this.p1[1] == this.p2[1] ||
      Math.abs(this.p1[0] - this.p2[0]) == Math.abs(this.p1[1] - this.p2[1])
    ) {
      console.log("Queen can attack");
    } else {
      console.log("Queen cannot attack");
    }
  }
}

const p1 = [1, 5];
const p2 = [3, 2];

const result = new Queens(p1, p2);
result.checkAttack();
