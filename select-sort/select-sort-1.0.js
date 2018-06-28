// 简单选择排序实现
let selectSort1 = (array) => {
    let length = array.length;
    let min;
    let minIndex;
    for(let i =0; i < length; i++) {
        min = array[i];
        minIndex = i;
        for(let j = i; j < length; j++) {
            if(min > array[j]) {
                min = array[j];
                minIndex = j;
            }
        }

        array[minIndex] = array[i];
        array[i] = min;
    }

    return array;
};

module.exports = selectSort1;