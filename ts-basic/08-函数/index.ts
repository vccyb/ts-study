{
  const hello = function (text: string) {
    console.log(text);
  };

  type MyFunc = (txt: string, age: number) => number;
  const hello2: MyFunc = function (text, age) {
    return 1;
  };

  function add(x: number, y: number) {
    return x + y;
  }

  const myAdd: typeof add = function (x, y) {
    return x + y;
  };
}

// 函数的对象写法
{
  let add: {
    (x: number, y: number): number;
  };
  add = function (x, y) {
    return x + y;
  };

  function f(x: number) {
    console.log(x);
  }

  f.version = "10";

  let foo: {
    (x: number): void;
    version: string;
  } = f;
}

// Function
{
  function doSometiong(f: Function) {
    return f(1, 2);
  }

  type Person = { name: string };
  const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));
}

{
  function fs(x?: number) {
    return 1;
  }
}

{
  function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
  }
}

{
  function f1([x, y]: [number, number]) {
    return x + y;
  }

  function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
  }

  type ABC = { a: number; b: number; c: number };
}

{
  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }

  function repeat(...[str, times]: [string, number]) {
    return str.repeat(times);
  }
}

{
  function arraySum(arr: readonly number[]) {
    // arr[0] = 0;
  }
}

{
  function ff(): void {
    console.log("hello");
    // return null;
    // return undefined;
  }
}

{
  function fail(msg: string): never {
    throw new Error(msg);
  }
}

{
  function reverse(str: string): string;
  function reverse(arr: any[]): any[];
  function reverse(stringOrArray: string | any[]): string | any[] {
    if (typeof stringOrArray === "string")
      return stringOrArray.split("").reverse().join("");
    else return stringOrArray.slice().reverse();
  }
}

{
  function add1(x: number, y: number): number;
  function add1(x: any[], y: any[]): any[];
  function add1(x: number | any[], y: number | any[]): number | any[] {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else if (Array.isArray(x) && Array.isArray(y)) {
      return [...x, ...y];
    }

    throw new Error("wrong parameters");
  }
}

{
  class Animal {
    numLegs: number = 4;
  }
  type AnimalConstructor = new () => Animal;
}

type F = {
  new (s: string): object;
};
