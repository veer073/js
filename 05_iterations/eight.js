//Reduce

const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,curval){
    console.log(`acc: ${acc} and curval:${curval}`);
    return acc+curval
},0)

console.log(myTotal);


//Arrow function of upper function

const myTotals=myNums.reduce((acc,curval)=>acc+curval,0)

console.log(myTotals);


const shoppingCart=[
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"python Course",
        price:999
    },
    {
        itemName:"Mobile Dev Course",
        price:5999
    },
    {
        itemName:"data science Course",
        price:12999
    }
]

const total=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(total);