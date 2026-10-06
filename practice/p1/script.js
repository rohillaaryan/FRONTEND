const products = [
    { name: "Mouse", price: 800, category: "accessories", inStock: true },
    { name: "Keyboard", price: 1500, category: "accessories", inStock: false },
    { name: "Monitor", price: 9000, category: "electronics", inStock: true },
    { name: "Webcam", price: 2500, category: "electronics", inStock: true },
    { name: "Headphones", price: 3000, category: "electronics", inStock: false }
];
//1
function getStatus(product){
    let save = products.filter(num => num. name === product)
    if (save[0].inStock === true) return "Available"
    else return "Out of stock"
}
stat = getStatus("Monitor")

//2 i cannot decide what the input should be, like will the user give us price and then we tell weather it is budget or premium or mid range
// function getPriceMessage(price){
//     let pr = products.filter(nn => )
// }

//3
let arr = products.filter(product => product.inStock === true && product.price < 5000).map(nami => nami.name)
console.log(arr)

//4
let productListo = document.getElementById("productList")
    products.forEach(list => {
    let li = document.createElement("li")
    li.classList.add("li")
    li.textContent = list
    document.querySelector().appendChild(li)
})