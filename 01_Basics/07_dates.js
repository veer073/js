let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate=new Date(2024,0,3)  //months start from 0
console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2024,0,3,5,6)
console.log(myCreatedDate1.toLocaleString());

let myNewDate= new Date("02-14-2024")
console.log(myNewDate.toLocaleString());


let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //many get attributes are present




newDate.toLocaleString('default',{
    weekday: "long",
})