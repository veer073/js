const myObject={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}

//for in loop

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for array

const programming=["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map);

for (const key in map) {
    console.log(key);
}
//not iteratable


