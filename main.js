let beers = ["erdinger", "corona", "delirium"];
let wines = ["chardonnay", "merlot", "cabernet"];

const alcholilcDrinks = beers.concat(wines);

showDom("array1", beers);
showDom("array2", alcholilcDrinks);

function show(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";

    for(let i = 0; i < arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}</div>`
    }
}