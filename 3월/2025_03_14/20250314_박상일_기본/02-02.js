let msg = "GLOBAL";
function outer() {
    let msg = "OUTER";
    console.log(msg);
    if (true) {
        let msg = "BLOCK";
        console.log(msg);
    }
}
outer()
/* 실행 결과 
OUTER
BLOCK
*/