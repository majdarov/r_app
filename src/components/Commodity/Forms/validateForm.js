export const arrCompare = (arr1=[], arr2=[]) => {
    
    let resArr = arr1.map(item => {
        if (arr2.includes(item)) return;
        return item;
    });
    return resArr;
};

