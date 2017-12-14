/* */ 
"format cjs";
export class SplitValueConverter {
  arr = [];
  fromView(str, token = ' ') {
    this.arr.length = 0;
    var strings = str.toString().split(token);
    while (strings.length) {
      this.arr.push(strings.pop());
    }
    return this.arr;
  }
  toView(array, token = ' ') {
    if (array instanceof Array) {
      this.arr = array;
    } else {
      this.arr.length = 0;
      this.arr.push(array);
    }
    return this.arr.join(token);
  }
}