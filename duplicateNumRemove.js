function removeDuplicateValue(number) {
    let uniqeNum = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        let index = uniqeNum.indexOf(element);
        if (index == -1) {
            uniqeNum.push(element);
        }
    }
    return uniqeNum;
}

const numbers = [2,4,6,8,0,3,5,7,9,2,4,6,8,0];
let uniqeNumbers = removeDuplicateValue(numbers);
console.log('Uniqe Numbers:',uniqeNumbers);