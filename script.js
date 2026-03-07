let cart=[]
let total=0

function addToCart(name,price){

cart.push({name,price})

total+=price

updateCart()

showPopup()

}

function updateCart(){

let list=document.getElementById("cart-items")

list.innerHTML=""

cart.forEach(item=>{

let li=document.createElement("li")

li.innerText=item.name+" - ₦"+item.price

list.appendChild(li)

})

document.getElementById("total").innerText="Total: ₦"+total

}

function openCart(){

document.getElementById("cart").style.right="0"

}

function closeCart(){

document.getElementById("cart").style.right="-100%"

}

function showPopup(){

let p=document.getElementById("popup")

p.style.display="block"

setTimeout(()=>{p.style.display="none"},1500)

}

function checkout(){

let message="Hello I want to order:%0A"

cart.forEach(item=>{

message+=item.name+" - ₦"+item.price+"%0A"

})

message+="Total: ₦"+total

window.location.href="https://wa.me/2348166511475?text="+message

}
