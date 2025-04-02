//  화살표 함수 this 는 바깥 함수 this를 그대로 상속 받음 
// 주의 하자 


let obj = { result: 0 };

obj.add = function (x, y) {
    const inner = () => {
        this.result = x + y;
    }
    inner();
}

obj.add(3, 4);

console.log(obj);