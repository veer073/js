const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //array inside array counted as single element

// console.log(marvel_heros[3][1]);

const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);


const all_new_heros=[...marvel_heros,...dc_heros] //spread operator
// console.log(all_new_heros);


const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr);



console.log(Array.isArray("Veer"));
console.log(Array.from("Veer"));
console.log(Array.from({name: "Veer"})) //empty array #interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));