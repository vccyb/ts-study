{
  // let arr: number = [1, 2, 3];
  let arr: (number | string)[] = [];
  arr.push(1);
  arr.push("1");

  let arr2: any[];
  let arr3: Array<any>;
  let arr4: Array<number | string>;

  type Names = string[];
  type name = Names[number];
}

{
  const arr: any[] = [];
  arr.push(123);
  const arr2 = [123];
}

{
  // const arr = [0, 1] as const;
  // const arr2: readonly number[] = [0, 1];

  // 只读类型 原来的类型
  // 原来的类型更加严格，多了很多别的方法，所以 number[] 是 readonly number[]的子类型

  let a1: number[] = [0, 1];
  let a2: readonly number[] = a1;

  // a1 = a2;

  // 由于只读类型是 原来类型的父亲，导致他无法提单以前的类型

  function getSum(s: number[]) {}
  // getSum(readonly number[]) 报错。 因为readonly更加的不约束，是父类型

  // const arr: readonly Array<number> = [0, 1]; 不能和范型一起写
  // 正确的写法
  const a3: ReadonlyArray<number> = [0, 1];
  const a4: Readonly<Array<number>> = [0, 1];
  const a5 = [0, 1] as const;
}

{
  let multi: number[][] = [
    [1, 23],
    [4, 5],
  ];
}
