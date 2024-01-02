{
  type A = Awaited<Promise<string>>;

  type B = Awaited<Promise<Promise<number>>>;

  type C = Awaited<boolean | Promise<number>>;
}

{
  type T1 = ConstructorParameters<new (x: string, y: string) => object>;
}

{
  type T1 = Exclude<"a" | "b" | "c", "a">;
  type T2 = Exclude<"a" | "b" | "c", "a" | "b">;
  type T3 = Exclude<string | (() => void), Function>;
  type T4 = Exclude<string | string[], any[]>;
  type T5 = Exclude<(() => void) | null, Function>;
}

{
  type T1 = Extract<"a" | "b" | "c", "a">;
  type T2 = Extract<"a" | "b" | "c", "a" | "b">;
  type T3 = Extract<"a" | "b" | "c", "a" | "d">;
  type T5 = Extract<(() => void) | null, Function>;
  type T6 = Extract<200 | 400, 200 | 201>;
}

{
  type T = InstanceType<new () => object>;

  class C {
    x = 0;
    y = 0;
  }

  type T1 = InstanceType<typeof C>;
}

{
  type T1 = NonNullable<string | number | undefined>;
  type T2 = NonNullable<string[] | null | undefined>;
  type T3 = NonNullable<boolean>;
  type T4 = NonNullable<number | null>; // number
  type T5 = NonNullable<string | undefined>; // string
  type T6 = NonNullable<null | undefined>; // never
  type T7 = NonNullable<undefined>; // never
}
