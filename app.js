//FOReACH()

let users = [
    {
        Name: 'User',
        sureName: 'Mtr User',
        age: 14,
        gender: 'male'
    },
    {
        Name: 'User',
        sureName: 'Ms User',
        age: 14,
        gender: 'female'
    },
    {
        Name: 'User',
        sureName: 'Mtr User',
        age: 14,
        gender: 'male'
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


//FIND & FINDiNDEX
//birinchi shartga tushganini oladi va to'xtaydi

let array = [1,2,3,4,5,6,7,8,9]

let found = array.find(function(element){
    if (element == 7) {
        return true
    }
})

console.log(found);




let result = users.findIndex((item) => {
    if (item.gender === 'male') {
        return true
    }
})

console.log(result);



// EVENTDELEGATION

// let wrapper = document.querySelector('.wrapper')

// wrapper.addEventListener('click', (e) => {
//     let target = e.target;

//     // if (target.tagName == 'LI') {
//     //     // target.style.backgroundColor = 'pink'
//     //     // // console.log('work');
//     //     // // target.remove()
//     // }else{
//     //     console.log('Bu li emas');
//     // }

//     if (target.tagName == 'LI' && target.dataset.elementId === '3') {
//         target.remove()
//     }else{
//         console.log(target);
//     }

//     // if (target.tagName == 'LI') {
//     //     console.log('Bu li');
//     // }else{
//     //     console.log('Bu li emas');
//     // }

// })


//DATASET

const myDiv = document.querySelector('#myDiv');
console.log(myDiv.dataset.name); // John
console.log(myDiv.dataset.age); // 25
console.log(myDiv.dataset.city); // New York



//SLICE(), SPLICE()

let resulty = array.slice(2, 7)

console.log(resulty);

array.splice(3, 2, 23, 45, 23)

console.log(array);



//LOCALSTORAGE

let text = document.querySelector('.text')
let btn = document.querySelector('.btn')

// let count = 0

// text.textContent = count

// btn.addEventListener('click', () => {
//     count++

//     text.textContent = count

// })


let score = localStorage.getItem("number")

// console.log(score);

if(score){
    text.textContent = score
}else{
    text.textContent = 0
}

btn.addEventListener('click', () => {
score++
text.textContent = score

    localStorage.setItem('number', score)
})

console.log(Number(score));


//SYNCHRONOUS & ASYNCHRONOUS
console.log('SYNCHRONOUS & ASYNCHRONOUS');
console.log(1);
let num = setTimeout(()=>{
    console.log(2);
}, 0)
num
console.log(3);
console.log(4);


//callback hell
console.log('callBack hell');
// a(function (resultA) {
//     b(resultA, function (resultB) {
//         c(resultB, function (resultC) {
//             d(resultC, function (resultD) {
//                 console.log(resultD);
//             })
//         })
//     })
// })


function calculator(FirstNum, SecondNum, ThirdFuntion) {
    let result = FirstNum + SecondNum

    ThirdFuntion(result)
}

calculator(2, 3, function(NotClear){
    console.log(NotClear);

    calculator(3, 7, function(SecondNCRes){
        console.log(SecondNCRes);
    })

    calculator(5,6, function (Smth) {
        console.log(Smth);
    })
})


//PROMISE
//type of the promise is a class

console.log('PROMISE');

let resultPromise = new Promise((resolve, reject)=>{
    resolve('everything is ok')
})

resultPromise.then((result)=>{
    console.log(result);
}).catch((err)=> {
    console.log(err);
})


//promise callBack hell ni oldini oladi

let somePromise = new Promise((resolve, reject) => {
    resolve("ok")
})

somePromise
  .then(() => {
    let res;
    calculator(1,2, (result) => {
        res = result
    });
    console.log(res);
    return res
})
.then((data) => {
    let res;
    calculator(data,5, (result) => {
        res = result
    });
    console.log(res);
    return res
})



//FETCH
console.log('FETCH');

let baseUrl = "https://jsonplaceholder.typicode.com";

let objectUl = document.querySelector('.object')

fetch(`${baseUrl}/posts`)
.then(res => res.json())
.then((data) => {
    data.forEach(item => {
        let childLi = document.createElement('li')
        childLi.textContent = item.body
        childLi.style.padding = '10px'
        childLi.style.border = '1px solid brown'
        objectUl.append(childLi)
    })
})
.catch((err)=>{
    console.log(err);
})

//async await
//promise hell ni oldini oladi
//async asynchrone function ga aylandi
//JSONplaceholder is a server

async function getPosts(){
    let response = await fetch(`${baseUrl}/posts`);
    let data = await response.json();
    console.log(data);
}

getPosts();