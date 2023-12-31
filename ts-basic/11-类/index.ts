{
  class Point {
    x: number;
    y: number;
    z = 3;
    readonly a: string = "Hello";
  }

  const point = new Point();
  point.a = "as";
}

{
  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    add(point: Point) {
      return new Point(this.x + point.x, this.y + point.y);
    }
  }
}

{
  class C {
    _name = "";
    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }
  }
}

{
  class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    get(s: string) {
      return this[s] as boolean;
    }
  }
}
