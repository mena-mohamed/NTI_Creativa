// function person(userName , age){
//     if(age >= 18 && age < 60){
//         console.log(` ${userName} can have a drive`)
//     }else if(age <= 18 || age >= 60){
//         console.log(` ${userName} can not a drive`)
//     }else{
//         console.log("errror")
//     }
// }

// person("Menna" , 20)
// person("Farha" , 16)
// person("Mohamed" , 50)

// function calc(length , width){
//     return length * width
// }

// console.log(calc(3,6))

// function Hello(name){
//     return ` Hello ${name}`
// }

// console.log(Hello("Adam"))

// function calc(n1 , n2 , mark){
//     let result = 0;
//     switch(mark){
//         case "+":
//             return `${n1}  + ${n2} = ${n1 + n2}`
//             break;
//         case "-":
//             return `${n1}  - ${n2} = ${n1 - n2}`
//             break;
//         case "*":
//             return `${n1}  * ${n2} = ${n1 * n2}`
//             break;
//         case "/":
//             if(n2 !=0){
//                 return `${n1}  / ${n2} = ${n1 / n2}`
//             }
//             break;
//         default:
//             console.log("not found")
//     }
// }

// console.log(calc(1,2,"+"));
// console.log(calc(4,2,"*"))
// console.log(calc(1,2,"-"))
// console.log(calc(1,2,"/"))

// console.log(AHello("menna"))
// console.log(BHello("menna"))
// console.log(CHello("menna"))


//fun declartion
// function AHello(name){
//     return name
// }
// console.log(AHello("mohamed"))

//fun expression
// let BHello = function(name){
//     return name
// }
// console.log(BHello("mohamed"))


//Arrow fun
// let CHello = (name) =>{
//     return name
// }
// console.log(CHello("mohamed"))



// var x = 4
// var x = 10
// console.log(x)




// let x=6;
// let y=3;

// if(true){
//     let y = 40;
//     console.log(x);
//     if(true){
//         let y=50
//         console.log(y)
//     }    
//     if(true){ 
//         console.log(y)
//     }    
// }


// function sayHello(fname , lname){
//     let message = "Hello"

//     function concat(){
//         message = `${message} ${fname} ${fname}`
//     }
//     concat();
//     return message
// }
// console.log(sayHello("Menna" , "Mohamed"))

// let person={
//     "user Name": "Menna",
//     age: 20 ,
//     location: "zag" ,
//     isMarried: false,

//     myJob: "Full Stack" ,
//     skills: ["html", "css", "mvc", "linq"],
//     address: {
//         country:"egypt",
//         city:"abu_hammed"
//     },

//     // personDate: function(){
//     //     return  `${person["user Name"]} is ${person.age} years old, he live in ${person.location} he is ${person.isMarried? "married" : "not married"} your skills are ${person.skills.join(",")}`
//     // },

//     personDate: function() {
//         return  `${this.userName} is ${this.age} years old, he live in ${this.location} he is ${this.isMarried? "married" : "not married"} your skills are ${this.skills.join(",")}`
//     }
// }

// console.log(person.age)
// person.age=21;
// console.log(person.age)

// console.log(person["user Name"])
// console.log(person.personDate())

// let newPerson = Object.create(person)
// console.log(newPerson)

// newPerson.userName = "ali"
// newPerson.age = 44
// newPerson.isMarried = true
// console.log(newPerson.isMarried)
// console.log(newPerson.personDate())

//let num = prompt("enter a number only")
// while(isNaN(num)){
//     num = prompt("try again");
// }
// console.log(`number is ${num}`)


let number
do{
    num = prompt("enter a number only")
}while(isNaN(num))
console.log(`number is ${num}`)

