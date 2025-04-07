//정규표현식
//주어진 문자열에서 특정 패턴을 찾거나 검사하거나 대체할 때 사용하는 특수한 문법
//주로 문자열 유효성 검사, 검색, 치환등에 쓰인다.

//정규표현식은 /로 시작해서/로 끝나는 -> /정규표현식/ 의 모양으로 작성한다.
// /^문자열$/ -> 문자열이 정확히 패턴과 일치해야 한다.
// ^ -> 문자열의 시작
 // $ -> 문자열의 끝

 var regex = /abc/; //문자열 안에 abc가 있는지 찾는다.
 regex.test("abc"); //true
 regex.test("123abc456"); //true
 regex.test("ab"); //false c가 없기 떄문에
 //^과$표시가 없는 경우 "abc"가 문자열의 어디든 포함만 되어있으면 true
 
 var regex = /^abc$/;
 regex.test("abc"); //true
 regex.test("123abc456"); //false
 regex.test("ab"); //false 
 //문자열이 정확히 abc인지 판별
 //앞뒤에 다른 글자가 있으면 false

 // . : 아무 문자 한글자
 var regex = /h.t/;
 regex.test("hat"); //true
 regex.test("hit"); //true
 regex.test("hoot"); //false 한글자만 가능 h..t면 hoot은 true

 // * : 바로 앞에 문자가 0번 이상 반복이 되냐
 var regex = /ab*c/;
 regex.test("abc"); //true
 regex.test("abbc"); //true
 regex.test("abbbc"); //true

 // + : 바로 앞에 문자가 1번 이상 반복이 되어야함
 var regex = /ab+c/;
 regex.test("ac"); //false
 regex.test("abc"); //true
 regex.test("abbc"); //true
 regex.test("abbbc"); //true

 // ? : 바로 앞의 문자가 0번 또는 한번만 나와야함
 var regex = /ab?c/;
 regex.test("ac"); //true
 regex.test("abc"); //true
 regex.test("abbc"); //false

 // {n} : 바로 앞에 있는 문자를 정확히 n번 반복
 var regex = /av{3}c/;
 regex.test("abc"); //false
 regex.test("abbc"); //false
 regex.test("abbc"); //true

 // {n,m} : 바로 앞에 있는 문자를 n번이상 m번 이하 반복
 var regex = /av{2,4}c/;
 regex.test("abc"); //false
 regex.test("abbc"); //true
 regex.test("abbbc"); //true 
 regex.test("abbbbc"); //true 
 regex.test("abbbbbc"); //false

 // [문자] : 문자를 포함해야 한다
 // [abc] : 문자열이 a 또는 b 또는 c 를 포함 하고 있으면 된다.
 var regex = /[abc]/;
 regex.test("a"); //true
 regex.test("b"); //true
 regex.test("c"); //true
 regex.test("abd"); //true
 regex.test("efg"); //false

 // [^문자] : 문자를 포함하지 않아야 한다
 // [^abc] : a 또는 b 또는 c가 포함되지 않아야한다.
 regex.test = /[^abc]/;
 regex.test("a"); //false
 regex.test("b"); //false
 regex.test("c"); //false
 regex.test("abd"); //true
 regex.test("efg"); //true

 // [0-9] : 0~9를 포함하고 있는지
 // \d랑 [0-9]는 같은 의미
 var regex = /^[0-9]$/; //== /^\d$/ 

 // [a-z] : 소문자 a 부터 z 까지 포함 
 var regex = /^[a-z]$/;
 regex.test("abc123"); //false
 regex.test("abc"); //false
 regex.test("a"); //true

 // [A-Z] : 대문자 A부터 Z까지
 var regex = /^[A-Z]$/;
 regex.test("ABC123"); //false
 regex.test("ABC"); //false
 regex.test("A"); //true

 // [가-힣] : 한글 가 부터 힣 까지
 var regex = /^[가-힣]$/;
 regex.test("가나다123"); //false
 regex.test("가나다"); //false
 regex.test("가"); //true

 //특수문자는 []에 들어가는거 말고 /  \.   / 이런식으로 써야함

 //1. 한글 이름에 대한 유효성 검사
 //한글로만 이루어진 문자열, 길이는 2~5자
 var regex = /^[가-힣]{2,5}$/;
regex.test("김철수"); //true
regex.test("김영희"); //ture
regex.test("KIM"); //false
regex.test("김철수123"); //false

//2. 영어 소문자, 숫자만 허용하는 아이디
//길이는 4 ~ 12자
var regex = /^[a-z\d]{4,12}$/;
regex.test("abc123"); //true
regex.test("ab1"); //false
regex.test("Abc123"); //false

//3. 이메일 형식 검사
//uername@domain.com 형태
//username은 영문/숫자/./_ 포함 가능
//domain은 영문/숫자
//com은 영문 숫자 .com 또는 .net만 가능
var regex = /^[A-Za-z0-9._]+\@[A-Za-z0-9]+\.(com|net)$/;

//4. 휴대폰 번호 검사
//010으로 시작
//중간, 마지막 자리 숫자는 4자리 여야함
//전체 형식이 010-xxxx-xxxx
var regex = /^010-\d{4}-\d{4}$/;

//그룹화
//[abc] -> a,b,c중 하나
//(abc) -> abc가 한 단어
var regex = /(ha)+/
regex.test("ha"); //true
regex.test("haha"); //true
regex.test("hahaha"); //true
regex.test("haa"); //true
var regex = /h+a+/
regex.test("h"); //false
regex.test("ha"); //true
regex.test("haaa"); //true
regex.test("hhaaa"); //true

// | : or의 의미 그룹화랑 같이 사용
var regex = /I (like|love) you/
regex.test("I love you"); //true

//그룹에서 값을 빼오는것이 가능하다.
//match()
let str = "price : $300";
var result = str.match(/\$(\d+)/);
//result[0] : 정규식에 매칭된 전체 문자열
//result[1] : 첫 번째 그룹에 해당하는 값
