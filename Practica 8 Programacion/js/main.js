//bubble sort (ordenamiento por burbujas)
//Ejercicio 1
/*function blubleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len -1; j++){
            if(arr[j] > arr[i] + 1){
                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90]
console.log(blubleSort(arr));*/

//Ejercicio 2
/*function blubleSort(arr, prop){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1; j++){
            if(arr[j][prop] > arr[j+1][prop]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [
    {name: 'John', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 20}
];
console.log(blubleSort(arr, "age"));*/

//Ejercicio 3. Selection Sort(Ordenamiento por selección)
/*function SelectionSort(arr){
    let len = arr.length;

    for(let i = 0; i < len - 1; i++){
        let min = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min !== i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr; 
}

let arr = [64, 34, 25, 22, 11, 90];
console.log(SelectionSort(arr));*/

//Ejercicio 2
/*function SelectionSort(arr, prop){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        let min = i;

        for(j = i + 1; j < len; j++){
            if(arr[j][prop] < arr[min][prop]){
                min = j;
            }
        }

        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [
    {name: 'John', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 20}
];
console.log(SelectionSort(arr, "age"));*/


//Ejercicio 4 Insection Sort(Ordenamiento por insercción)

/*function insertionSort(arr){
    let len = arr.length;
    for (let i = 1; i < len; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 & arr[j] > key){
            arr[j + 1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

var arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr));*/

//Ejercicio 5 
function insertionSort(arr, prop){
    let len = arr.length;
    for (let i = 1; i < len; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0  & arr[j][prop] > key[prop]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [
    {name: 'John', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 20}
];
console.log(insertionSort(arr, "age"));