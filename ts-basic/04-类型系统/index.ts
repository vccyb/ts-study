{
  const x: boolean = true;
  const y: string = "123";
  const z: string = `${x} world`;
  const a: number = 123;
  const b: bigint = 123n;
  const c: symbol = Symbol("foo");
  const d: object = { foo: 123 };
  const e: undefined = undefined;
  const f: null = null;
  let test = undefined;
}

{
  const s = new String("hello");

  const s1: String = "hello"; // 正确
  const s2: String = new String("hello"); // 正确

  const s3: string = "hello"; // 正确
  // const s4: string = new String("hello"); // 报错
}

{
  // let obj: Object;
  // let obj1: {};

  let obj: object;
  // obj = true;s
}

{
  // let x: "hello";
  // const x = "https";
  // const y: string = "https";
  // let x: 5 = 5;
  // let y: number = 4 + 1;
  // x = y;
  // y = x;
  // 父 子类型，子类型在下，更加的严格，所以可以作为等号的右边，
}

{
  let x: string | number;
  x = 123;
  x = "abc";
}

{
  let x: number & string;

  let obj: { foo: string } & { bar: string };
  obj = {
    foo: "abc",
    bar: "def",
  };

  type A = {
    foo: number;
  };

  type B = A & { bar: string };
}

{
  type Age = number;
  let age: Age = 12;
}

{
  // typeof undefined; // "undefined"
  // typeof true; // "boolean"
  // typeof 1337; // "number"
  // typeof "foo"; // "string"
  // typeof {}; // "object"
  // typeof parseInt; // "function"
  // typeof Symbol(); // "symbol"
  // typeof 127n; // "bigint"

  const a = { x: 0 };

  type T0 = typeof a; // { x: number }
  type T1 = typeof a.x; // number

  let aa = 123;
  type Age = typeof aa;
}

{
  type T = number | string;
  let a: number = 1;
  let b: T = a;

  // 凡是用父类型的都可以用子类型，因为子类型更加的严格
  // number 是 number | string 的子类型
}
