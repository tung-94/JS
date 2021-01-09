let arr1 = [1, 2, "a"];
let arr2 = [1, 3, "b"];

function findDuplicateItem(arrOrigin, filterCallback = (value) => { return value }) {
    let hashMap = {};
    let arr = [...arrOrigin];
    for (let value of arr) {
        if (!hashMap[filterCallback(value)]) {
            hashMap[filterCallback(value)] = value;
        } else {
            let oValue = {
                ...value,
                isDuplicated: true,
            }
            hashMap[filterCallback(value)] = oValue;
        }
    }
    return hashMap;
}

function findIndividualItemInArr(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    let hashMap = findDuplicateItem(arr);
    for (let prop in hashMap) {
        if (hashMap[prop].isDuplicated) {
            delete hashMap[prop];
        }
    }
    let finalResult = [];
    for (let prop in hashMap) {
        finalResult.push(hashMap[prop]);
    }
    return finalResult;
}

console.log(findIndividualItemInArr(arr1, arr2));
