export class Controller {
  constructor() {
    this.count = 1;
    this.arr = [];
    this.default = {
      active: false,
      num: null,
      id: null
    };
    this.randNums = [this.randomWithRange(0, 15), this.randomWithRange(0, 15)];
  }
  get create() {
    if (this.randNums[0] == this.randNums[1]) {
      this.randNums[1] = this.randomWithRange(0, 15);
    }
    while (this.count <= 16) {
      this.arr = [
        ...this.arr,
        {
          ...this.default,
          id: this.count
        }
      ];
      this.count++;
    }
    this.randNums.map((num, i) => {
      this.arr[num] = {
        ...this.default,
        active: true,
        num: this.generate2or4(),
        id: this.arr[this.randNums[i]].id
      };
    });
    return this.arr;
  }
  generate2or4() {
    if (this.arr.find(item => item.num == 4)) {
      return 2;
    } else {
      return Math.random() > 0.85 ? 4 : 2;
    }
  }
  newItem() {
    let newItemKey = this.randomWithRange(0, 15);
    if (this.arr[newItemKey].active == false) {
      this.arr[newItemKey].num = this.generate2or4();
    }
  }
  randomWithRange(max, min) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
  }
}

export class Player {
  constructor(state, dir, key) {
    this.dir = dir;
    this.arr = state;
    this.key = key;
    this.horzontal = [];
    this.vertical = [];
  }
  get play() {
    switch (this.dir) {
      case 'horizontal':
        this.createHorizontalArr();
        console.log(this.horzontal);
        if (this.key == 37) {
          this.horzontal.map((arr, i) => {
            let filterd = arr.filter(item => item.active);
            if (filterd.length >= 2) {
            }
          });
        } else {
        }
        break;
      case 'vertical':
        this.createVerticalArr();
        console.log(this.vertical);
        break;
      default:
        break;
    }
  }
  createHorizontalArr() {
    for (let c = 0; c < 4; c++) {
      let addingArr = [];
      this.arr.map((el, i) => {
        if (c == 0 && i < 4) {
          addingArr = [...addingArr, el];
        } else if (c == 1 && i >= 4 && i < 8) {
          addingArr = [...addingArr, el];
        } else if (c == 2 && i >= 8 && i < 12) {
          addingArr = [...addingArr, el];
        } else if (c == 3 && i >= 12 && i < 16) {
          addingArr = [...addingArr, el];
        }
      });
      this.horzontal = [...this.horzontal, addingArr];
    }
  }
  createVerticalArr() {
    for (let c = 0; c < 4; c++) {
      let addingArr = [];
      this.arr.map((el, i) => {
        if (c == 0 && this.col.indexOf(el.id) != -1) {
          addingArr = [...addingArr, el];
        }
      });
      this.vertical = [...this.vertical, addingArr];
    }
  }
}
