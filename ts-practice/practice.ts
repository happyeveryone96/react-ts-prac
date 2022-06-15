// 제너릭(Generics)
// 객체 A와 객체 B를 합쳐주는 merge 함수
// A와 B가 어떤 타입이 올 지 모르기 때문에 제너릭을 사용한다.
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// any라는 타입을 쓸 수도 있지만 타입 유추가 모두 깨진거나 다름 없음
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
