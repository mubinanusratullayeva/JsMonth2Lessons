// // import calculator from "./calculator.js";
// import { calculator } from "./calculator.js";
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
        age: 11,
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
console.log('EVERY()');
let foo = users.every((item) => item.age < 15)

console.log(foo);

//SOME()
console.log('SOME()');
let bar = users.some(function (item){
    return item.age > 13
})

console.log(bar);


//FILTER()
console.log('FILTER()');
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
console.log('SORT()');
arr.sort();
console.log(arr);
let smth = arr.sort((a, b) => console.log(b,a))
let smths = arr.sort((a, b) => console.log(a,b))

let chai = arr.sort((x,y) => x - y)

console.log(chai);


//REVERSE()
//teskarisiga o'girib beradi

console.log('REVERSE()');
let smtht = arr.reverse();

console.log(smtht);


//FIND & FINDiNDEX
//birinchi shartga tushganini oladi va to'xtaydi

let array = [1,2,3,4,5,6,7,8,9]
console.log('FIND()');
let found = array.find(function(element){
    if (element > 2) {
        return true
    }
})

console.log(found);



console.log('FINDINDEX()');
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
console.log('SLICE()');
let resulty = array.slice(2, 7)

console.log(resulty);

console.log('SPLICE()');
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
    console.log(`acynchrone number: ${2}`);
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
.catch(err => console.log(err))


//FETCH
console.log('FETCH');

// let baseUrl = "https://jsonplaceholder.typicode.com";

// let objectUl = document.querySelector('.object')

// fetch(`${baseUrl}/posts`)
// .then(res => res.json())
// .then((data) => {
//     data.forEach(item => {
//         let childLi = document.createElement('li')
//         childLi.textContent = item.body
//         childLi.style.padding = '10px'
//         childLi.style.border = '1px solid brown'
//         objectUl.append(childLi)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

//async await
//promise hell ni oldini oladi
//async asynchrone function ga aylandi
//JSONplaceholder is a server
console.log('ASYNC & AWAIT');
// async function getPosts(){
//     let response = await fetch(`${baseUrl}/posts`);
//     let data = await response.json();
//     console.log(data);
// }

// getPosts();

//SETTIMEOUT

// console.log('setTimeout()');

// setTimeout(function(){
//     console.log('Hello World');
// }, 3000)

// //SETINTERVAL

// let buz = 0

// setInterval(() => {
//     // buz++
//     // console.log(buz);
// }, 1000)

// //clearTimeout()
// //setTimeout ni o'chirish uchun ishlatiladi
// console.log('clearTimeout()');

// let setKey = setTimeout(() => {'clear string'}, 1000)

// clearTimeout(setKey)

// //clearInterval()

// console.log('clearInterval()');

// let numb = 0;

// let setKeyInter = setInterval(() => {
//     numb--
//     console.log(numb);
// }, 1000)

// setTimeout(() => {
//     clearInterval(setKeyInter)
// }, 5000)



//destructuring
console.log('DESTRUCTURING');
let person = {
    firstName: 'Falonchi',
    lastName: 'Fallonchiyev',
    age: 100,
    address: {
        city: 'Tashkent',
        postCode: '101011',
        age: 200,
        country: null
    }
}

const {
    age,
    lastName,
    address: {city, postCode, age: cityAge, country = 'Uzbekistan'}
} = person

console.log(country);


//rest(function) = operaton
//ma'lumotlarni yig'ish uchun ishlatiladi

console.log("rest(function) = operaton");
function sumOfNumber(first, second, ...third) {
    console.log(third);
    // return first + second
}

console.log(sumOfNumber(1, 2,3,5,6,7));

//EXAMPLE
console.log('example of rest function');
function name(param, params, ...paramt) {
    return param + params + paramt.reduce((accumlator, item) => accumlator + item)
}

console.log(name(1,2,3,4,5,6,7,8,9,0,12));

//spread
//ma'lumotlarni yoyish uchun ishlatiladi
//faqat object bn array ga ishlaydi
console.log('spread');
let numbers = [1,2,3,4,[89,43,543],5,6,7,8]

console.log(numbers);
console.log(...numbers);

let [
    first,
    second,
    ...nums
] = numbers
console.log();

// console.log(...person);




//OPTIONAL CHAINING
console.log('optional chaining');
let people = [
    {
        firstName: 'Bob',
        lastName: 'Brown',
        hobbies: [
            {
                name: 'Football',
                id: 1,
            },
            {
                name: 'Karate',
                id: 2,
            }
        ]
    },
    {
        firstName: 'Tom',
        lastName: 'Brown',
        hobbies: [
            {
                name: 'Running',
                id: 2,
            }
        ]
    },
    {
        firstName: 'Daniel',
        lastName: 'Brown',
        hobbies: []
    },
]

people.forEach(user => {
    console.log(user.hobbies?.[0]?.name);
})

//Object keys()
//       values
//       entertainment()
console.log('OBJECT.KEYS()');

let car = {
    name: 'BMW',
    year: 2020,
    price: '1500000$',
    color: 'black',
    model: 'X7',
    number: '01|z777zz'
}

let carKey = Object.keys(car);
console.log(carKey);


console.log('OBJECT.VALUES()');

let carValues = Object.values(car)
console.log(carValues);


console.log('OBJECT.ENTERIES()');

let carProperties = Object.entries(car)
console.log(carProperties);



//MODULE 
// console.log('MODULE');

// console.log(calculator(1,2));


//CRUD
let mainUrl = 'https://jsonplaceholder.typicode.com';

let FormVal = document.querySelector('.pForm')
let elinput = document.querySelector('.pForm__elInput')
let deskMenu = document.querySelector('.desk')

//GET
async function getData() {
 try{
    let response = await fetch(`${mainUrl}/users`)
    let data = await response.json();
    deskMenu.innerHTML = ''
    data.reverse().forEach(item => {
        let deskMenuItem = document.createElement('li')
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deskMenuItem.textContent = item.name
        deskMenuItem.setAttribute('data-id', item.id)
        deskMenuItem.append(deleteBtn)
        deskMenu.append(deskMenuItem)

        //DELETE
        deleteBtn.addEventListener('click', async () => {
            let response = await fetch(`${mainUrl}/users/${deskMenuItem.dataset.id}`, {
               method: 'DELETE',
            })
             if (response.status === 200) {
                getData();
             }else{
                alert(response.statusText)
             }
        })
    })
 }catch(err){
    console.log(err);
 }
}

getData();


//POST
FormVal.addEventListener('submit',async (e)=> {
    e.preventDefault();

let info = {
  name: elinput.value
};

let response = await fetch(`${mainUrl}/users`, {
  headers: {
      'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify(info)
});

if(response.status === 201) {
  getData()
  FormVal.reset();
}else {
  alert(response.statusText);
}
})



//PROMISE

let makePromise = new Promise(function (resolve, reject){
    resolve("vada bajarildi")
    // reject("vada bajarilmadi")
})

makePromise
.then((res) => {
    console.log(res);
})
.catch(error => console.log(error))
.finally(() => {
    console.log("Promise ishini tugatdi");
})


//XMLHTTPRequest(open, onload, response, finally)
let baseUrl = 'https://jsonplaceholder.typicode.com'

let myRequest = new XMLHttpRequest();

myRequest.open('GET', `${baseUrl}/users`);

myRequest.send();

myRequest.onload = function() {
    console.log(JSON.parse(myRequest.response));
}

myRequest.onerror = function() {
    console.error(myRequest.response);
}



//CLASS
console.log("CLASS");

class Animal {
    constructor(name, age, hasTail, isMale) {
        this.animalName = name;
        this.animalAge = age;
        this.animalHasTail = hasTail;
        this.animalIsMale = isMale;
    }

    //(static) otasidagi methodni o'chirib qo'yish
   static voice() {
        console.log("This is animal voice");
    }

}

// Cat Animal dan meros oladi (extends)
class Cat extends Animal {
    constructor(name, age, hasTail, isMale, eyeColor) {
        super(name, age, hasTail, isMale, eyeColor);

        this.eyeColor = eyeColor
    }

    voice() {
        console.log("Meow Meow");
    }

        //GETTER, SETTER
        get getCatEyeColor() {
            console.log(this.eyeColor);
      }

      set changeName(animalAnotherName) {
        this.animalName = animalAnotherName;
      }

}

// class Dog extends Animal {
//   voice() {
//     console.log("Wow Wow");
//   }
// }


// const dog = new Dog("Puppy", 2, true)
const cat = new Cat("Kitty", 1, true, false, "blue");

// console.log(dog);
// dog.voice()

cat.voice()

console.log(cat);

cat.changeName = "Tommy"

console.log(cat);

cat.animalName = "Muwucha"

console.log(cat);

console.log(cat.getCatEyeColor)


//CLASS TASK
console.log("class task");
class Vehicle {
    constructor(color, weight, speed, carName) {
        this.color = color;
        this.weight = weight;
        this.speed = speed;
        this.carName = carName;
    }

    #volume(carModel) {
        console.log(`Vehicle volume...=> ${carModel}`);
    }

    getVehicleVolume(argu) {
        return this.#volume(argu)
    }
}

class Sedan extends Vehicle {
    constructor(color, weight, speed, height, carName) {
        super(color, weight, speed, carName);

        this.height = height;
    }
}

class Gruzavoy extends Vehicle {
        constructor(color, weight, speed, loadSize, carName) {
            super(color, weight, speed, carName);

            this.loadSize = loadSize
        }
}

let lacetti = new Sedan("red", 200, 220, 180, "Lacetti")
let malibu = new Sedan("red", 200, 220, 180, "Malibu")
let kamaz = new Gruzavoy("white", 300, 140, 2000, "Kamaz")

console.log(lacetti);
console.log(malibu);
console.log(kamaz);

malibu.getVehicleVolume("Malibu")

//CLASS TASK BY FUNCTION() =^

// function vehicle(color, weight, speed, carName) {
//     this.color = color;
//     this.weight = weight;
//     this.speed = speed;
//     this.carName = carName;

//     function volume(carModel) {
//         console.log(`Vehicle volume...=> ${carModel}`);
//     }

//     this.getVehicleVolume = function(argu) {
//         return volume(argu)
//     }
// }

// function sedan(color, weight, speed, height, carName) {
//     vehicle.call(this, color, weight, speed, carName);

//     this.height = height;
// }

// function gruzavoy(color, weight, speed, loadSize, carName) {
//     vehicle.call(this, color, weight, speed, carName);

//     this.loadSize = loadSize
// }

// let lacetti = new sedan("red", 200, 220, 180, "Lacetti")
// let malibu = new sedan("red", 200, 220, 180, "Malibu")
// let kamaz = new gruzavoy("white", 300, 140, 2000, "Kamaz")

// console.log(lacetti);
// console.log(malibu);
// console.log(kamaz);

// malibu.getVehicleVolume("Malibu")



