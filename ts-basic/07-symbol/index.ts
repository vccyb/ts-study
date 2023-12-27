{
  let x: symbol = Symbol();
  let y: symbol = Symbol();
  x === y;
}

{
  const x: unique symbol = Symbol();
  const y: unique symbol = Symbol();
  // x === y;
  // unique symbol 有点像字面量类型，是symbol的子类型，更严格
}

{
  const x: unique symbol = Symbol();
  const y = Symbol();

  interface Foo {
    [x]: string;
    [y]: string;
  }
}
