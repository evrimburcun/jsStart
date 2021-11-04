function addToCart(quantity,productName="Elma") {
  console.log("Sepete Eklendi : ürün : " + productName +
   " adet : " + quantity)
}

// addToCart()
addToCart("10")
// addToCart(15)

let sayHello = () => {
  console.log("Hello World")
}

sayHello()

let sayHello2=function () {
  console.log("Hello World 2")
}

sayHello2();




let product1 = {productName:"Elma",unitprice:10,quantity:5}
function addToCart3 (product) {
  console.log("Ürün : " + product.productName)
  console.log("Adet : " + product.quantity)
  console.log("Fiyat : " + product.unitprice)
}


addToCart3(product1)

let product2 = {productName:"Elma",unitprice:10,quantity:5}
let product3 = {productName:"Elma",unitprice:10,quantity:5}

product2=product3
product2.productName = "KARPUZ"

console.log(product3.productName)

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)


function addToCart4(x) {
    console.log(products)
}

let products = [
  {productName:"Elma",unitprice:10,quantity:5},
  {productName:"Armut",unitprice:10,quantity:5},
  {productName:"Karpuz",unitprice:10,quantity:5}
]

addToCart4(products)

function add(birsey,...numbers) { //... rest operatörüdür array yapar
    let total=0;
  for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i]
      
    }
    console.log(total)
    console.log(birsey)
}

add(20,30)
// add(20,30,40)
// add(20,30,40,50)


let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
  {name:"İç Anadolu", population:"20M"},
  {name:"Marmara", population:"30M"},
  {name:"Karaddeniz", population:"10M"},
  [
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"],

  ]
]

console.log(icAnadolu)
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName, newUnitprice, newQuantity
({productName:newProductName, unitPrice:newUnitprice, quantity:newQuantity} = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitprice)
console.log(newQuantity)

