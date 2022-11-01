export function arrayFromLenghts(number) {
    return Array.from({length: number}, (_, i) => i + 1)
}


export function binarySearchTF(value, list){
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  
            last = middle - 1;
        } else { 
            first = middle + 1;
        }
    }
    if(position == -1){
        return false;
    }
    else {return true;}
}