let count = 0; // 숫자
count += 1;
// count = "문자열"; // 에러

const message: string = "hello world"; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

// messages.push(1); // 에러 ... 문자열 배열에 숫자 추가 불가능

let mightBeUndefined: string | undefined = undefined; // string 또는 undefined
let nullableNumber: number | null = null; // number 또는 null

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow";
// color = "green"; // 에러
