let myPenguin = {
    name : "Whiteblack",
    origin : "Whiteblack the Penguin Sees the World",
    author : "H. A. Rey and Margret Rey",
};

myPenguin.outfit = {
    hat : "baseball cap", 
    shirt : "Hawaiian shirt", 
    pants : "cargo shorts", 
    shoes : "flip-flops",
};

let penguinHatType = myPenguin.outfit.hat;

console.log(penguinHatType);

myPenguin.outfit["watch"] = "pocket watch";

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;


for(let prop in myPenguin.outfit)
{
    console.log(`${prop} : ${myPenguin.outfit[prop]}`);
}
