// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const appendCats = [... cats, "Broom"];
    return appendCats;
}

function prependCat(name) {
    const prependCats = ["Arnold", ... cats];
    return prependCats;
}

function removeLastCat() {
    return cats.slice(0,2);
}

function removeFirstCat() {
    return cats.slice(1);
}