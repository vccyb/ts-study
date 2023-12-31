{
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  function map<T, U>(arr: T[], f: (arg: T) => U): U[] {
    return arr.map(f);
  }

  map<string, number>(["1", "2", "3"], (n) => parseInt(n));
}

{
  function id<T>(arg: T): T {
    return arg;
  }

  let myId: <T>(arg: T) => T = id;
  let myId2: { <T>(arg: T): T } = id;
}

{
  interface Box<Type> {
    contents: Type;
  }

  let box: Box<string>;

  interface Comparator<T> {
    compareTo(value: T): number;
  }
}

{
  type Nullable<T> = T | undefined | null;

  type Container<T> = { value: T };
  const a: Container<number> = { value: 10 };
  const b: Container<string> = { value: "1" };

  type Tree<T> = {
    value: T;
    left: Tree<T> | null;
    right: Tree<T> | null;
  };
}

{
  let arr: Array<number> = [1, 2, 3];
}

{
  function comp<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
      return a;
    }
    return b;
  }

  comp([1, 2], [1, 2, 3]); // ok
  comp("10", "20"); //
  // comp(10, "20"); // error

  type Fn<A extends string, B extends string = "world"> = [A, B];

  type Result = Fn<"hello">; // ["hello", "world"]

  function filter<T>(arr: T[], f: (arg: T) => boolean): T[] {
    return arr.filter(f);
  }
}
