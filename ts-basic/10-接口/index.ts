{
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }

  const p: Person = {
    firstName: "张",
    lastName: "三",
    age: 30,
  };

  interface Foo {
    a: string;
  }

  type A = Foo["a"]; // string

  interface Point {
    x: number;
    y?: number;
  }

  interface B {
    // readonly a: string;
    [prop: string]: number;
  }
}

{
  interface A {
    f(x: boolean): string;
  }

  interface B {
    f: (x: boolean) => string;
  }

  interface C {
    f: { (x: boolean): string };
  }
}

{
  interface Shape {
    name: string;
  }

  interface Circle extends Shape {
    radius: number;
  }

  let c: Circle = {
    name: "circle",
    radius: 10,
  };
}

{
  type Country = {
    name: string;
    capital: string;
  };

  interface CountryWithPop extends Country {
    population: number;
  }

  class A {
    x: string = "";
    y(): boolean {
      return true;
    }
  }

  interface B extends A {
    z: number;
  }
}

{
  interface Box {
    height: number;
    width: number;
  }

  interface Box {
    length: number;
  }

  interface Document {
    foo: string;
  }

  // document.foo = "hello";
}
