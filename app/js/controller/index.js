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
    this.col = [];
  }
  get play() {
    switch (this.dir) {
      case 'horizontal':
        this.createHorizontalArr();
        if (this.key == 37) {
          this.leftPlay();
        } else if (this.key == 39) {
          this.rightPLay();
        }
        return this.arr;
      case 'vertical':
        this.createVerticalArr();
        return this.arr;
      default:
        break;
    }
  }
  leftPlay() {
    let horizontalCopy = this.horzontal;
    this.horzontal.map((arr, i) => {
      let find = arr.filter(item => item.active);
      let filter = arr.filter(item => !item.active);
      horizontalCopy[i] = [...find, ...filter];
      this.sumSameNums(horizontalCopy);
      this.horzontal = [...horizontalCopy];
    });
    let mainArrCopy = [];
    horizontalCopy.map(a => {
      mainArrCopy = [...mainArrCopy, ...a];
    });
    this.arr = [...horizontalCopy.reduce((a, b) => {
      return a.concat(b);
    }, [])];
    return horizontalCopy;
  }
  rightPLay() {
    let nArr = this.leftPlay()
      .map(item => {
        return item.reverse();
      })
      .reduce((a, b) => {
        return a.concat(b);
      }, []);
    this.arr = [...nArr];
  }
  sumSameNums(param) {
    // param.map(item => {
    //   let active = item.filter(i => i.active);
    //   if (active.length >= 2) {
    //     console.log(active)
    //     active.map(num => {})
    //   }
    // });
    return param;
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
    this.columnArrGen();
    for (let c = 0; c < 4; c++) {
      let addingArr = [];
      this.arr.map((el, i) => {
        if (this.col[c].indexOf(el.id) != -1) {
          addingArr = [...addingArr, el];
        }
      });
      this.vertical = [...this.vertical, addingArr];
    }
  }
  columnArrGen() {
    for (let c = 0; c < 4; c++) {
      let addingArr = [];
      let g = 0;
      for (let f = 1; f < 5; f++) {
        addingArr = [...addingArr, f + c + g];
        g += 3;
      }
      this.col = [...this.col, addingArr];
    }
  }
}
