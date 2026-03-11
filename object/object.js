// Create an object for a student with name, age, and course.

let users = {
  name: "suchitra",
  age: 24,
  course: "javascript",
};

console.log(users);

// Print all keys of an object.

let result = Object.keys(users);

console.log(result);

//Print all values of an object.

let result2 = Object.values(users);
console.log(result2);

// Add a new property to an object.

users.city = "cuttack";

console.log(users);

// Delete a property from an object
delete users.age;

console.log(users);

// Update the age in a student object

let user = {
  name: "suchitra",
  city: "bangalore",
};

user.city = "cuttack ";

console.log(user);

// Convert an object into an array of keys.


let userss = {
    name:"mona",
    city: "cuttack"
}

let convertArray = []

let key = Object.keys(userss)
let count =0


for (i=0; i<key.length; i++){
    count++
    convertArray.push(key[i])
}

console.log(convertArray)

// Count how many properties an object has.
console.log(count)


let names = {
    name : "suchitra",
    city : "bangalore"
}

let result1 = Object.keys(names)
 let isthere = false 



for (let i=0; i<Object.keys(names).length; i++){
    
   
    if(result1[i] === "name"){
           isthere = true  
           break
    }
    

    
}

console.log(isthere);




// Check if two objects are equal.
let data1 = {
  nam: "suchitra",
  age : 24
}


let data2 = {
  nam: "suchitra",
  age : 24
}


 let isTrue = false


let result3 = Object.keys(data1)


for (i=0; i<result3.length ; i++){
  let value  = result3[i]
 if(data1[value] !== data2[value]){
     isTrue = true
     break
 }
  
 
}
console.log(isTrue)
// Freeze an object so it cannot change. 

let data4 = {
  name: "suchitra",
  age: 24
}

Object.freeze(data4)

data4.name = "mita"

console.log(data4)


// Loop through an object and print key + value.


let data5 = {
    
    name: "suchitra",
    age:24
}


let result6 = Object.keys(data5)

for (let i=0; i<result6.length; i++){
    console.log(result6[i] + " + " + data5[result6[i]])
}


console.log(result6)


//Merge two objects. - 


let user1 = {
    "user name":"suchitra",
    id:2
    
}

// console.log(user1["user name"])

let user = {
  name: "Suchitra",
  age: 22,
  city: "Bangalore"
};

let Merge = {}

for (let key in user) {
Merge[key] = user[key]
 
}




for (let key in user1) {
Merge[key] = user1[key]
 
}


console.log(Merge)




//Create a function that prints all object values.



function prints(user){
    for (let key in user){
        (key,user[key] )
    }
    
    return user
}


let user = {
    name:"suchi",
     age:24
 }


let data = prints(user)

console.log(data)