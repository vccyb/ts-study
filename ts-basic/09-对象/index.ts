{
  const obj: {
    x: number;
    y: number;
  } = {
    x: 1,
    y: 2,
  };

  type MyObj = {
    x: number;
    y: number;
  };

  // console.log(obj.z);

  const obj: {
    x: number;
    y: number;
    add(x: number, y: number): number;
  } = {
    x: 1,
    y: 2,
    add(x, y) {
      return x + y;
    },
  };
}

{
  const obj: {
    x: number;
    y?: number;
  } = {
    x: 1,
  };

  type MyObj = {
    x: number;
    y?: number;
  };

  const obj2: MyObj = { x: 1 };
  obj2.y?.toFixed(2);
}

{
  interface MyInterface {
    readonly prop: number;
  }

  interface Person {
    name: string;
    age: number;
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }

  let w: Person = {
    name: "Vicky",
    age: 22,
  };

  let r: ReadonlyPerson = w;
  w.age = 99999;

  const myUser = {
    name: "Vicky",
    age: 22,
  } as const;
}

{
  type MyObj = {
    [property: string]: string;
  };

  const obj: MyObj = {
    foo: "a",
    bar: "b",
  };

  type T1 = {
    [property: number]: string;
  };

  type T2 = {
    [property: symbol]: string;
  };
}

{
  const obj = {};
  // obj.prop = 123;
  obj.toString();

  const pt0 = {};
  const pt1 = { x: 1 };
  const pt2 = { y: 1, z: 2 };
  const pt = {
    ...pt0,
    ...pt1,
    ...pt2,
  };
}
