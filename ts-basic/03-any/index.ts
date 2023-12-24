{
  let x: any;
  x = 1;
  x = "foo";
  x = true;
  x.xxx = 1;

  function add(x, y) {
    return x + y;
  }

  // any的污染
  let a: any = "hello";
  let b: number;
  b = a;

  b.toFixed();
}

{
  // 它不像any 可以赋给别的类型，它只能赋值给any unknown
  let v: unknown = 123;
  // let v1: number = v;

  // 类型缩小
  let a: unknown = 1;
  if (typeof a === "number") {
    let r = a + 10;
  }
}

{
  let x: never;

  function fn(x: string | number) {
    if (typeof x === "string") {
    } else if (typeof x === "number") {
    } else {
      x;
    }
  }
}
