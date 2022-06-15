// Shape라는 interface를 선언
interface Shape {
  getArea(): number;
}
// Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며
// 해당 함수의 반환값은 숫자입니다.

// class Circle implements Shape {
//   // `implements` 키워드를 사용하여 해당 클래스가
//   // Shape interface 의 조건을 충족하겠다는 것을 명시

//   radius: number; // 멤버 변수 radius 값을 설정

//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   // 너비를 가져오는 함수
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// public 또는 private accessor를 사용하면
// 멤버 변수를 선언한 후 constructor에서
// 해당 값들을 설정하는 과정을 생략할 수 있다.
// public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며
// private으로 선언된 값은 클래스 내부에서만 조회 할 수 있음

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

// class Rectangle implements Shape {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width);
// 에러 ...rectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없음

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
