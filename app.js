//FOReACH()

let users = [
    {
        Name: 'User',
        sureName: 'Mtr User',
        age: 14,
    },
    {
        Name: 'User',
        sureName: 'Ms User',
        age: 14,
    },
    {
        Name: 'User',
        sureName: 'Mtr User',
        age: 14,
    },
]

let female = []
let male = [];

users.forEach((item, index, array)=>{
    if (item.sureName.includes('Ms')) {
        female.push(item)
    }else{
        male.push(item)
    }
})

console.log(female);
console.log(male);




// EVERY()

let foo = users.every((item) => item.age < 15)

console.log(foo);

//SOME()

let bar = users.some(function (item){
    return item.age > 19
})

console.log(bar);


//FILTER()

let arr = [2, -1, -5, 56, 990, 0, -34]

console.log(arr);

let ree = arr.filter((item) => {
    if (item < 0) {
        return true;
    }
    return false
})

console.log(ree);


//SORT()

let smth = arr.sort((a, b) => console.log(b,a))
console.log('smth');
let smths = arr.sort((a, b) => console.log(a,b))

let chai = arr.sort((x,y) => x - y)

console.log(chai);


//REVERSE()
//teskarisiga o'girib beradi


let smtht = arr.reverse();

console.log(smtht);