{
  const a: [string, number, boolean] = ["hello", 10, true];

  let a1: number[] = [1];
  let a2: [number] = [1];
}

{
  let a: [number, number?] = [1];

  type NamedNums = [string, ...number[]];
  const b: NamedNums = ["hello", 1, 2, 3];
  const c: NamedNums = ["hello", 1];
  const d: NamedNums = ["hello"];
  // const e: NamedNums = [1, 2, 3];s

  type Tuple = [string, number];
  type Age = Tuple[1];
  type Tuple2 = [string, number, Date];
  type TupleE = Tuple2[number];
}

{
  type t = readonly [number, string];

  // 和数组一样，readonly 约束更弱，所以是无法使用readonly替换的
}

{
  function f(point: [number, number?, number?]) {
    if(point.length === 3)
  }
}


{
  const arr: [number, number] = [1, 2];
  function add(x: number, y: number) {
    return x + y;
  }

  add(...arr)

  const arr2 = [1,23] as const
  add(...arr2)
}