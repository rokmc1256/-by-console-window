let myList = [];
let DoOrder;

while (DoOrder !== '종료') {
    DoOrder = prompt("작업하실 내용을 입력하세요.");

    if (DoOrder === '추가') {
        const addValue = prompt("추가하실 내용을 입력하세요.");
        myList.push(addValue);
        console.log(addValue + ' 이(가) 목록에 추가되었습니다.');
    }

    else if (DoOrder === '목록') {
        let indexValue = 0;
        if (myList.length === 0) {
            console.log("현재 목록이 비어있습니다.");
        }
        else {
            console.log('-------------------');
            for (let showList of Object.values(myList)) {
                console.log(indexValue + ': ' + showList);
                indexValue++;
            }
            console.log('-------------------');
        }
    }

    else if (DoOrder === '삭제') {
        if (myList.length === 0) {
            console.log("삭제하실 내용이 없습니다.");
        }
        if (myList.length < DoOrder) {
            console.log("존재하지 않는 인덱스 입니다.");
        }
        if (myList.length > 0) {
            const delNumber = prompt("삭제하실 인덱스 번호를 입력하세요.");
            const delValue = myList[delNumber];
            myList.splice(delNumber, 1);
            console.log(delValue + ' 이(가) 목록에서 삭제되었습니다.');
        }
    }
}
console.log("프로그램을 종료합니다.");