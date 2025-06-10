// 정규표현식
// 주어진 문자열에서 특정 패턴을 찾거나, 검사하거나, 대체할 깨 사용하는 특수한 문자법
// 주로 문자열 유효성 검사, 검색 치환 등

// 정규표현식은 /정규표현식/ 의 모양으로 작성
// /^문자열$/ -> 문자열이 정확히 패턴과 일치해야 한다.
// ^ -> 문자열의 시작
// $ -> 문자열의 끝
// ^, $ 는 없어도 됨

var regex = /abc/ // 문자열 안에 abc가 있는지 찾는다
regex.test("abc"); // true
regex.test("132abc456"); // true
regex.test("ab"); // false
//"abc" 가 문자열의 어디에 있든 포함만 되면 true
// 문자열이 정확히 abc인지 판별
// 앞 뒤에 다른 글자가 있으면 false

// . : 아무 문자 한 글자
// 무조건 한 글자 여야 함
var regex = /h.t/
regex.test("hat"); // true
regex.test("hit"); // true
regex.test("hoot"); // false

// * : 바로 앞에 문자가 0번 이상 반복
var regex = /ab*c/ // 바로 앞의 문자가 여러번 들어와도 된다는 의미
regex.test("abc"); // true
 regex.test("abbc"); // true
 regex.test("abbbc"); // true

        // + : 바로 앞의 문자가 1번 이상 반복
        var regex = /ab+c/
        regex.test("ac"); // false
        regex.test("abbc"); // true
        regex.test("abbbc"); // true

        // ? : 바로 앞의 문자가 0번 또는 1번만
        var regex = /ab?c/
        regex.test("ac"); // true
        regex.test("abc"); // true
        regex.test("abbc"); // false

        //{n} : 바로 앞에 있는 문자를 정확히 n번 반복
        var regex = /ab{3}c/
        regex.test("abc"); // false
        regex.test("abbc"); // false
        regex.test("abbbc"); // true

        // {n,m} : 바로 앞에 있는 문자를 n번이상 m번 이하 반복
        var regex = /ab{2,4}c/
        regex.test("abc"); // false
        regex.test("abbc"); // true
        regex.test("abbbc"); // true
        regex.test("abbbbc"); // true
        regex.test("abbbbbc"); // false

        // [문자] : 문자를 포함해야한다
        // [abc] : 문자열이 a또는 b또는 c를 포함하면 된다
        var regex = /[abc]/
        regex.test("a"); // true
        regex.test("b"); // true
        regex.test("c"); // true
        regex.test("efg"); // false
        
        // [^문자] : 문자를 포함하지 않아야 한다
        // [abc] : 문자열이 a또는 b또는 c를 제외한 문자가 하나라도 있으면 참
        // 문자열 안에 조건에 맞는 문자가 하나라도 있는지 검사
        var regex = /[^abc]/
        regex.test("a"); // false
        regex.test("b"); // false
        regex.test("c"); // false
        regex.test("abd"); // true
        regex.test("efg"); // true

        // [0-9] : 0~9를 포함하고 있는지
        // /d 랑 같은 의미
        var regex = /^[0-9]$/
        var regex = /^\d$/
        regex.test("0"); // true
        regex.test("1"); // true
        regex.test("3"); // true
        regex.test("7"); // true
        regex.test("123abc"); // false
        regex.test("123"); // false

// [a-z] : 소문자 a부터 소문자 z까지 포함
var regex = /[a-z]/
regex.test("a"); // true
regex.test("ab"); // true
regex.test("abc"); // true

var regex = /^[a-z]$/
regex.test("a"); // true
regex.test("abc"); // false
regex.test("abc123"); // false

// A-Z : 대문자 A부터 대문자 Z까지
// \w : 영어 + 숫자 + 빝줄(_);

// 가-힣 : 가 부터 힣 까지

// 특수문자는 []에 들어가는거 말고 /  \.  /

// 1. 한글 이름에 대한 유효성
// 한글로만 이루어진 문자열
// 길이는 2 ~ 5 자

 var regex = /^가-힣{2,5}$/;

// 영어 소문자, 숫자만 허용하는 아이디
// 길이는 4 ~ 12자
var regex = /^[a-z0-9]{4,12}$/;

// 이메일 형식 검사
// username@단어.단어
// username는 영문/숫자/./_ 포함 가능
// doamin은 영문/숫자
// com은 영문/숫자, .com 또는 .net

var regex = /^[\w.]@[a-zA-Z0-9]+\.(com|net)$/;

// 휴대폰 번호 검사
// 010 으로 시작
// 중간,  마지막 자리 숫자는 4자리
// 전체 형식 010-xxxx-xxxx

var regex = /^010-\d{4}-\d{4}$/;

// 그룹화
// [abc] -> a, b, c중 하나
// (abc) -> abc가 한 단어

var regex = /(ha)+/
regex.test("ha") // true
regex.test("haha") // true
regex.test("hahaha") // true

var regex = /h+a+/
regex.test("h") // false
regex.test("ha") // true
regex.test("haaa") // true
regex.test("hahaha") // true

// | : or의 의미 그룹화랑 같이 사용
var regex = /I (like|love) you/
regex.test("I love you") // true

// 그룹에서 값을 빼오는 것도 가능하다
// match()
let str = "price : $300";
var result = str.match(/\$(\d+)/) // (\d+)가 첫 번째 그룹
// result[0] : 정규식에 매칭된 전제 문자열
// result[1] : 첫 번째 그룸에 해당하는 값
console.log(result[1]);



