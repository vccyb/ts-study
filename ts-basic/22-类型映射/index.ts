{
  type A = {
    foo: number;
    bar: number;
  };

  type B = {
    [prop in keyof A]: string;
  };

  type ToBoolean<Type> = {
    [Property in keyof Type]: boolean;
  };

  type MyObj = {
    [P in 0 | 1 | 2]: string;
  };

  type MyObj2 = {
    0: string;
    1: string;
    2: string;
  };
}

{
  type ToBoolean<Type> = {
    [Property in keyof Type]: boolean;
  };
}

{
  // 添加可选属性
  type Optional<Type> = {
    [Prop in keyof Type]+?: Type[Prop];
  };

  // 移除可选属性
  type Concrete<Type> = {
    [Prop in keyof Type]-?: Type[Prop];
  };

  // 添加 readonly
  type CreateImmutable<Type> = {
    +readonly [Prop in keyof Type]: Type[Prop];
  };

  // 移除 readonly
  type CreateMutable<Type> = {
    -readonly [Prop in keyof Type]: Type[Prop];
  };
}
