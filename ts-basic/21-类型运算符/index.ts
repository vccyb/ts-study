{
  type MyObj = {
    foo: number;
    bar: string;
  };

  type Keys = keyof MyObj; // "foo" | "bar"

  interface T {
    0: boolean;
    a: string;
    b(): void;
  }

  type KeyT = keyof T; // "0" | "a" | "b"
}

{
  interface T {
    [prop: number]: number;
  }
  type KeyT = keyof T; // "number"

  interface T2 {
    [prop: string]: number;
  }

  type KeyT2 = keyof T2; // "string" | number
}

{
  type Result = keyof ["a", "b", "c"];
  // number | '0' | '1' '2' | 'length' | ...
}

{
  type A = { a: string; z: boolean };
  type B = { b: string; z: boolean };

  type C = A | B;
  let c: C = {
    a: "hello",
    b: "z",
    z: true,
  };
  type KeyT = keyof C; // "z"
}

{
  function prop<Obj, K extends keyof Obj>(obj: Obj, key: K) {
    return obj[key];
  }

  type MyObj<Obj> = {
    [Prop in keyof Obj]: boolean;
  };

  type Multable<Obj> = {
    -readonly [Prop in keyof Obj]: Obj[Prop];
  };
}

{
  type U = "a" | "b" | "c";
  type Foo = {
    [Prop in U]: number;
  };
}

{
  type Person = {
    age: number;
    name: string;
    alive: boolean;
  };

  type Age = Person["age"]; // number
}

{
  type T = 1 extends number ? true : false;
}
