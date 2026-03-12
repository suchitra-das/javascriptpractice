//One


let cart = [
    {id:1,
        name:"laptop",
        price:250,
        quanity:1
    },
    {id:2,
        name:"mouse",
        price:350,
        quanity:2
    
    },
        
    {
        id:3,
        name:"keybord",
        price: 500,
        quanity:1
    },
]


for(let product of cart){
    console.log(product.name)
}


let total = 0;

for(let product of cart){
    total += product.price*product.quanity
}

console.log(total)


let totals =  cart.reduce((sum,product)=>{
    return  sum+product.price*product.quanity
},0

   
)

console.log(totals)



for (let product of cart){
 if( product.id === 2) {
    product.quanity++
 } 
}

console.log(cart)


for (let i=0; i<cart.length; i++){
    if(cart[i].id === 2){
        cart[i].quanity++
    }
}

console.log(cart)


let cartRemove = cart.filter((item)=>item.id !== 3)

console.log(cartRemove)


cart.push({id:4,name:"apple", price:30000, quanity:1 })

console.log(cart)


let hprice = cart[0];

for (let i=0; i<cart.length; i++){
    if(cart[i].price > hprice.price){
        hprice = cart[i]
    }
}

console.log(hprice)


for (let product of cart){
   if(product.price> hprice.price){
    hprice = product
   } 
}

console.log(hprice)

let lower = cart[0]
for (let product of cart){
   if(product.price< lower.price){
    lower = product
   } 
}

console.log(lower)


let newCart = cart.map((item)=>item.name)
console.log(newCart)


let arrayNew =[]
for(i=0; i<cart.length; i++){
    if(cart[i].name){
        arrayNew.push(cart[i].name)
    }
}

console.log(arrayNew)


let totalQuantity = 0

for(let i=0; i<cart.length; i++){
    totalQuantity += cart[i].quanity
}

console.log(totalQuantity)


for (let product of cart){
    totalQuantity+= product.quanity
}

console.log(totalQuantity)


for (let i=0; i<cart.length; i++){
    cart[i].price =cart[i].price* 0.9
}

console.log(cart)

let isthere = false
for(i=0; i<cart.length; i++){
    if(cart[i].price >100){
        console.log(cart[i])
        isthere= true;
        break
    }
}

console.log(isthere)


let update = cart.map((item)=>{
    if(item.name === "laptop"){
      return  {...item, price:45000}
    }
    return item
})

console.log(update)


for (let i=0; i<cart.length; i++){
    if(cart[i].name === "laptop"){
        cart[i].price = 45000
    }
}

console.log(cart)

let isHere = false;

for(let i=0; i<cart.length; i++){
    if(cart[i].name === "mouse"){
        isHere = true
    }
}

console.log(isHere)



cart.sort((a,b)=> a.price-b.price)
console.log(cart)




let obj ={}

for(let key in cart){
    obj[cart[key].id] = cart[key]
}

console.log(obj)


let obj2 = {}


for(let i=0; i<cart.length; i++){
    let product = cart[i]

obj2[product.id] = product
}

console.log(obj2)


let count = 0;

for(let product of cart){
    count++
}


console.log(count)


for (let i=0; i<cart.length; i++){
    cart[i].inStock=true
    
}

console.log(cart)

  let totalCart = cart.map((item)=>{
    return {
 ...item, inStock:  true
    }

    
})

console.log(totalCart)


for (let i=0; i<cart.length; i++){
    if(cart[i].quanity === 0){
        cart.slice(0,1)
    }
}







// Get last product in cart.


let carts = [{
    name:"laptop",
    id: 1,
    price: 30000
},
{
    name:"car",
    id: 2,
    price: 2000
}


]

let result = []

for (let i=0; i<carts.length; i++){
    
  result.push(carts[carts.length-1])
 

}

console.log(result)


// Remove products with qty = 0.


let lasts = [{
    name:"laptop",
    id: 1,
    price: 30000,
    quantity : 1
},
{
    name:"car",
    id: 2,
    price: 2000,
      quantity : 0
},

{
    name:"car",
    id: 2,
    price: 2000,
      quantity : 2
}


]

let result1 = lasts.filter((item)=> (item.quantity !== 0))

console.log(result1)






// Get last product in cart.


let last = [{
    name:"laptop",
    id: 1,
    price: 30000
},
{
    name:"car",
    id: 2,
    price: 2000
}


]

let results = []

for (let i=0; i<1; i++){
    
  result.push(last[0])
 

}

console.log(results)








// Convert product names to uppercase.


let products = [{
    name:"laptop",
    id: 1,
    price: 30000
},
{
    name:"car",
    id: 2,
    price: 2000
}


]

for (let i=0; i<products.length; i++){
    if(products[i].name.length > 5){
        console.log(products[i].name)
    }
}







// Convert product names to uppercase.


let product = [{
    name:"laptop",
    id: 1,
    price: 30000
},
{
    name:"mouse",
    id: 2,
    price: 2000
}


]


for (let i=0; i<product.length; i++){
    if(product[i].name){
        let result = product[i].name.toUpperCase()
        console.log(result)
    }
}
