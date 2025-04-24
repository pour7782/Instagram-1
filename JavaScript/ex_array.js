// 배열(Array)
// 비어있는 배열 만드는 법
let arr = new Array(3); // 어떤 데이터가 들어올 지 타입을 정할 수 없음
//index가 존재함
arr[0] = 10;
arr[1] = 3.15;
arr[2] = '홍길';

// ` -> 백팁
// ${} -> 보간 표현식 : 백틱으로 감싼 문자열 내부에서
// 자바스크립드 표현식(변수, 식, 함수 호출 등)의 결과를 문자열에 삽입한다.
console.log(`arr[3] : ${arr[3]}`) //없는 인덱스를 사용하면 방을 늘려버린다.

let student = [{name : '홍길', age : 30}, {name : '밥', age : 50}];
student[0] // 객체
student[0].name; // '홍길'

let fArr = [function(){return '일반함수'}]

// 배열에 들어가 있는 함수의 호출
console.log(`fArr 호출 : ${fArr[0]}`)

fArr[1] = function(){return '함수 대입하기'}

console.log(`fArr[1] : ${fArr[1]}`);

let odj = [{name : '홍', greeting : function(){
    return 'hi'
}}]

console.log(odj[0].greeting());

// 1. 객체 리터럴
// 가장 간단하고 직관적인 방법
const person = {
    neme :'홍길동',
    age : 30,
    greeting : function(){
        console.log(`안녕 나는 ${this.name}야`)
        // 객체의 이름을 불러오고 싶으면 this를 써야함
    },

    sayBy(){
        console.log('잘가라');
    }
}

console.log(person.name)
console.log(person.age)
person.greeting()
person.sayBy()

// 2. new Object 생성자 사용하기
// js의 내장 생성자인 Object를 호출해 빈 객체를 만든 뒤 프로퍼티를 추가하는 방식
const obj = new Object();
obj.x = 10; // 프로퍼티를 추가
obj.y = 20;

// 3. 생성자(constructor Function)
function User(name, age){
    this.name = name;
    this.age = age
}

const u1 = new User('Bob', 25);
