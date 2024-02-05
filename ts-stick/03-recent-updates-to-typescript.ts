enum Sandwich {
  Hamburger,
  veggieBurger,
  GrilledCheese,
}

type SandwichOrder = [number, Sandwich, ...string[]];

const order1: SandwichOrder = [12.99, Sandwich.Hamburger, "sss"];
const order2: SandwichOrder = [12.99, Sandwich.Hamburger, "sss", "ssss2"];

// const order3: SandwichOrder = [12.99, "123", Sandwich.Hamburger, "sss"];

// type MyTuple<T> = [number, ...T[]];
// const x1: MyTuple<string> = [4, "sss", "ss2"];
// const x2: MyTuple<number> = [4, 123, 123];
// const x3: MyTuple<boolean> = [4, true, true];

// ts4.0支持

// [number, ...T];

type MyTuple = [...[number, number], ...[string, string, string]];

const x1: MyTuple = [1, 2, "sss", "ss2", "ss3"];

// 1. 构造函数推断类属性
class Color {
  red;
  green;
  blue;
  constructor(c: [number, number, number]) {
    this.red = c[0];
    this.green = c[1];
    this.blue = c[2];
  }
}

try {
  //fn()
} catch (err: unknown) {
  if (err instanceof Error) throw err;
  else throw new Error(`Unknown error: ${err}`);
}

let winFns: Extract<keyof Window, `set${any}`> = "" as any;
