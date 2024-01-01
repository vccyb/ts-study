{
  enum Color {
    Red,
    Green,
    Blue,
  }

  let c: Color = Color.Green;
}

const enum Color {
  Red = 90,
  Green = 0.5,
  Blue = 100,
  x = 1 << 1,
}

{
  enum Direction {
    Up = "UP",
    Down = "DOWN",
  }
}

{
  const enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml",
  }

  fetch("localhost", {
    headers: {
      Accept: MediaTypes.JSON,
    },
  }).then((reponse) => {});
}

{
  enum MyEnum {
    A = "a",
    B = "b",
  }

  type Foo = keyof typeof MyEnum;

  type Foo2 = { [key in MyEnum]: any };
}

{
  enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Weekdays[3]); // Wednesday
}


{
  interface myPartial<T> {
    [K in keyof T]: T[K]
  }
}
