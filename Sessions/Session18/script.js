// let arr1 = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     arr1.push(i * 2);
//   } else {
//     arr1.push(i);
//   }
// }
// console.log(arr1);
// map()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.map( ( value  )=> {
//     console.log(value)
//     // console.log(i)
//     // console.log(array)
// });
// let newArr = arr.map((value) => {
//   if (value % 2 == 0) {
//     return value * 2;
//   } else {
//     return value;
//   }
// });
// console.log(newArr)
// let fun = (num1,num2)=>{
//     return num1 *num2
// }
// let fun =function(num1,num2){
//     return  num1 *num2
// }
// console.log(fun(16,4))
// console.log(  5%2    )
// console.log(  6%2    )
// console.log(  7%2    )
// console.log(  8%2    )
// let product = [
//   { name: "laptop", price: 1000 },
//   { name: "phone", price: 950 },
//   { name: "tablet", price: 800 },
//   { name: "Ipad", price: 500 },
// ];
// let result = product.map((pro) => {
//   let disconut = pro.price * 0.9;
//   return ` ${pro.name} ${disconut} `;
// }).join("-");
// console.log(result);
// console.log(product)
// console.log(100*0.9)
// console.log(600*0.9)
// console.log(8800*0.9)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// let newArr = arr
//   .map(function (item) {
//     return item % 2 == 0 ? "" : item;
//   })
//   .join("   ");
// console.log(newArr);
// let text = "WeB DesiGn";
// let result = text
//   .split("")
//   .map((item) => {
//     if (item === item.toUpperCase()) {
//       return item.toLowerCase();
//     } else {
//       return item.toUpperCase();
//     }
//   })
//   .join("");
// console.log(result);
// let arr = [-1, 2, 3, -4, 5, 6, 7, -8, 9, -10];
// let result =arr.map((item)=>{
// return    item*-1
// return item ===-item?item:-item
// })
// console.log(result)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// let newArr= arr.filter((item)=>{
//     return  item %2===1
// })
// console.log(newArr)
// let fruit = ["apple", "orange", "banana", "mango", "avocado"];
// let result = fruit.filter((item) => {
//   return item.length > 5;
// });
// let result2 = fruit.find((item) => {
//   return item.length > 5;
// });
// console.log(result);
// let arr = [1, 2, 3, 4, 5,6];
// let arr = ["W","e","b"];
// let result = arr.reduce((acc, curr, CurrI, array) => {
// //   console.log(`acc  ${acc}`);
// //   console.log(`current value ${curr}    `);
// //   console.log(`acc +curr ${acc + curr}`);
// //   console.log(`current index ${CurrI} `);
// //   console.log(`ARRAY ${array}`);
//   return acc + curr;
// });
// console.log(result)
// let box = document.getElementById("box");
// let box2 = document.getElementById("box2");
// let boxId = document.querySelector("#box");
// let myPar = document.getElementsByClassName("myPar")[1];
// let myParClaas = document.querySelectorAll(".myPar");
// let myTagName = document.getElementsByTagName("p")[0];
// let tagName = document.querySelectorAll("li")[2];
// // console.log( document.querySelectorAll("#box"))
// console.log(document.querySelectorAll(".myPar")[2]);
// console.log(box);
// console.log(myPar);
// console.log(myTagName);
// box.style.backgroundColor = "red";
// box2.style.backgroundColor = "green";
// box.innerHTML=" <b>hello ahmed</b>"
// box2.textContent="<b>hello ahmed</b>"
// box2.textContent="hello ahmed"
// box.style.fontSize = "40px";
// console.log(tagName);
// let ul =document.createElement("ul")
// let li =document.createElement("li")
// let text1=document.createTextNode("home")
// ul.appendChild(li)
// li.appendChild(text)
// document.body.appendChild(ul)
// let ul = document.createElement("ul");
// function createListItem(text) {
//   let listText = document.createTextNode(text);
//   let li = document.createElement("li");
//   ul.appendChild(li);
//   li.appendChild(listText);
// }
// document.body.appendChild(ul);
// createListItem("home");
// createListItem("about");
// createListItem("contact");
// createListItem("services");
// let ul =document.querySelector("ul")
// let myDiv=document.getElementById("myDiv")
// let li3 =document.querySelectorAll("li")[2]
// console.log(ul)
// console.log(ul.children[1])
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// console.log(li3.parentElement)
// console.log(li3.nextSibling)
// console.log(li3.previousSibling)
// let btn = document.getElementById("btn");

// function myclick(){
//     // console.log("hello")
//         alert("hello User")
// }
// // btn.onclick =function(){
// //     console.log("Hello")
// // }
// // btn.onclick =function(){
// // }
// btn.addEventListener("click", () => console.log("Hello"));
// btn.addEventListener("click",  myclick);

// let box =document.getElementById("box")

// console.log(box.classList)
// box.classList.add("item")
// box.classList.remove("parent")
// console.log(box.classList.contains("parent"))

// box.onclick=function(){
//     box.classList.toggle("content")

// }

function toggleMode() {
  document.body.classList.toggle("dark");
  let icon = document.getElementById("icon");

  document.body.classList.contains("dark")
    ? (icon.innerHTML = `<i class="fa-solid fa-sun"></i>`)
    : (icon.innerHTML = `<i class="fa-solid fa-moon"></i>`);
}
