// 함수
// 자주 사용하는 코드를 하나로 모아서 언제든 호출할 수 있도록 만들어 놓은것

// 기본모양
// function 함수명(매개변수){
//     기능

//     return 반환값
// }

// 함수의 선언
// 메모리에 square 함수를 올리겠다.
// 매개변수 : 함수 외부와 내부를 연결하는 변수
// 함수를 호출하면서 전달 받은 값을 함수 내부로 전달
//             x = 3;
function square(x){
    // 실행될 때 메모리에 올라감
    let result = x * x;

    return result;
    // return이 있어야 함수 밖으로 결과를 빼서 확인할 수 있다.
}
// 함수의 호출
 square(3); // 9

// 배열을 매개변수로 받는 경우
function sum(arr){
    let total = 0;
    
    for(const num of arr){
        total += num;
    }
    return total;
}
const nums = [1,2,3,4,5]
console.log(sum(nums));

// 구조분해 할당으로 나눠서 받기
// [a,b,c,d,e] = nums
function apart([a, b, c, d, e]){
    console.log('첫째 : ', a)
    console.log('둘째 : ', b)
    console.log('셋째 : ', c)
    console.log('넷째 : ', d)
    console.log('다섯째 : ', e)
}
apart(nums);

// 객체를 배개변수로 받기

// let{name, age} = user;
function introduce({name, age}){
    console.log(`안녕 나는 ${name} 이고, 나이는 ${age}다.`)
}

const namee = {name : '홍길동', age: 25}

introduce(user);

// let name = user.name;
// let age = user.age;

// 객체의 구조분해 할당

let{name, age} = user;
console.log(name, age);

// props react에서 제공하는 객체
// 컴포넌트에서 전달받은 내용을 프로퍼티로 저장한다.
// function f(props){
//     props.name;
// }
// <Greeting name="John" />

// 배열 메서드
// 배열의 순환, 변환, 집계, 변경 등 다양한 목적의 내장 메서드가 있다.
// 순회(Iteration)
const obj2 = {factor : 10}
// 화살표 함수와 this
// 화살표 함수는 (() => {})는 자신의 this를 갖지 않고 선언 된 외부의 this를 그대로 사용한다.
[1,2,3].forEach(x => {
    console.log(x * this.factor, obj2)
}) // thisAge가 있어도 this는 외부의 this를 가르키기 때문메 에러가 난다.

[1,2,3].forEach(function (x) {
    console.log(x * this.factor)
}, obj2)

// forEach(callback[,thisArg])
// callback : 각 요소에 대해 실행할 함수
// [,thisArg] : callback을 실행할 때 this로 사용할 값
// 배열의 각 요소에 대해 콜백함수를 실행한다. (화살표 함수가 아닐 때 의미가 있음)

// 변환(Transformation)
// map(callback[,thisArg])
// 각 요소를 콜백 함수로 반환한 새 배열을 반환

const num = [1,2,3];
const doubled = num.map(x => x * 2);
console.log(doubled);

// falt([depth])
// 중첩 배열을 주어진 빞이 만큼 평탄화
const nestde = [1,[2,[3,4]]]
console.log(nestde.flat());

// 필터링(filtering)
// filter (callback)
// 결과가 true인 요소만 모아 새 배열로 반환
const evens = num.fill(n => n % 2 == 0)
console.log(evens);

// 집계
// reduce(callback, initialvalue)
// 배열은 순회하며 누적 결과를 생성한다.
const iArr = [1,2,3,4,5]
const total = iArr.reduce((acc, cur) => acc + aur);
console.log(total);
