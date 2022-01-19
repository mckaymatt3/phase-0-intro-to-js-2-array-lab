// Write your solution here!
const cats = [
    "Milo","Otis","Garfield"
]

function destructivelyAppendCat(name){
    cats.push(name)
        return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
        return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
        return cats
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
        return cats
}

function appendCat(name){
    var newArray = cats.slice();
        newArray.push(name)
            return newArray
}

function prependCat(name){
    var newArray1 = cats.slice();
        newArray1.unshift(name)
            return newArray1
}

function removeLastCat(name){
    var newArray2 = cats.slice();
        newArray2.pop(name)
            return newArray2
}

function removeFirstCat(name){
    var newArray3 = cats.slice();
        newArray3.shift(name)
            return newArray3
}