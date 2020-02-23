let myPenguin = {
    name : "Whiteblack",
    origin : "Whiteblack the Penguin Sees the World",
    author : "H. A. Rey and Margret Rey",
};
myPenguin.favoriteFoods = ["fish", "mosses", "planktoon"];
console.log( myPenguin.favoriteFoods[1] );

let firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("squid");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = "pineapples";

let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];

for(let i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
}