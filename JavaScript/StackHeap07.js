let userOne={
    name: "Sahil",
    gf:"Chahat",
    address: "Jiar"
}

let userTwo=userOne;
userOne.gf="Nritika";

console.log(userOne.gf);
console.log(userTwo.gf); //isme aisa hai ki instead of copy dusre variable mein b reference jata insetad of copy, so jab me ek ka reference update  krunga to dono ka hp jaega