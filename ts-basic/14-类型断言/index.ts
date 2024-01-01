{
  type T = "a" | "b" | "c";
  let foo = "a";

  let bar: T = foo as T;

  let bar2: T = <T>foo;
  let bar3: T = foo as T;
}

{
  const p0: { x: number } = { x: 0, y: 0 } as { x: number };
  const username = document.getElementById("username");
  if (username) {
    (username as HTMLInputElement).value;
  }

  // expr as unknown as T;
  const n = 1;
  const m: string = n as unknown as string;
}

{
  let s1 = "js";
  const s2 = "js2";
  const a2 = [1, 2, 3] as const;

  const nums = [1, 2] as const;

  function add(x: number, y: number) {
    return x + y;
  }

  add(...nums);
}

{
  enum Foo {
    X,
    Y,
  }

  let e1 = Foo.X;
  let e2 = Foo.Y as const;
}
{
  const root = document.getElementById("root")!;
}
