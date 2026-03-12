// Print all user names.


let datas = [
   {name:"suchitra",
    id:1
   },
   {name:"shivani",
    id:2
   },
   {
    name:"ashish",
    id:3
   }
]

for (let i=0; i<datas.length ; i++){
    console.log(datas[i].name)
}



// Find user with id = 2.


for (let i=0; i<datas.length; i++){
    if(datas[i].id === 2){
         console.log(datas[i].id)
     }
}


//Add a new user to the array.


let users =[
    {name: "suchi",
        
        age: 24
    },
    
    {name: "sivani",
        
        age: 27
    }
    
    ]
    
    
    
let newUser = {name:"arjun",
age:24}
    
    users.push(newUser)
    
 console.log(users); 


//  Get all users older than 25.  -


let userName =[
    {name: "suchi",
        
        age: 24
    },
    
    {name: "sivani",
        
        age: 27
    },
    {name:"arjun",
age:24}
    
    ]
    
    
    
for (let user of userName){
    if(user.age  > 25 ){
       console.log( user.age)
    }
}

//    Remove a user with id = 3. 

let removeUser =[
    {   id:1,
        name: "suchi",
         age: 24
    },
    
    {   id:2,
        name:"sivani",
        age: 27
    },
    {   id:3,
        name:"arjun",
        age:24
        
    }
    
    ]
    
    
    let remove  = removeUser.filter((item) => item.id !== 3 )
    
    
    console.log(remove)





let userName1 =[
    {   id:1,
        name: "suchi",
         age: 24
    },
    
    {   id:2,
        name:"sivani",
        age: 27
    },
    {   id:3,
        name:"arjun",
        age:24
        
    }
    
    ]
    
   
   for (let i=0; i<userName1.length; i++){
       
       
       if(userName1[i].id === 1){
           userName1[i].age = 35
           
       }
   }
   
   console.log(userName1)


// Check if a user named "Sara" exists.

    let usersSara = [{
        name: "suchi",
        id: 1
    },
    
    {
       name:"sara" ,
       id: 2 
    }]
    
    
  let isHere = false
    
    
    for (let i=0; i<usersSara.length; i++){
        if(usersSara[i].name === "sara"){
            isHere = true
        }
    }
    
console.log(isHere)
// Create a new array containing only user names.

let empty = []
    
    
    for (let i=0; i<usersSara.length; i++){
      empty.push(usersSara[i].name)
    }


// Sort users by age.


 let sortName = [{
        name: "suchi",
       age: 50
    },
    
    {
       name:"sara" ,
       age : 49
    }]
    
    

    
    
    for (let i=0; i<sortName.length; i++){
      sortName.sort((a,b)=>{
         return  a.age -b.age 
      })
    }
    
    console.log(sortName)



    // Find the youngest user. 


    let yUser = [{
        name: "suchi",
       age: 50
    },
    
    {
       name:"sara" ,
       age : 49
    }]
    
    
let  youngest =yUser[0] 
    
    
    for (let i=0; i<yUser.length; i++){
      if(yUser[i].age < youngest.age){
          youngest = yUser[i]
      }
    }
    
    console.log(youngest)

// Count total users. 

    let caount = 0  
    
    
    for (let i=0; i<sortName.length; i++){
      caount++
    }
    
    console.log(caount)


// Find average age of users


let totalAge = 0;

for (let i = 0; i < usersSara.length; i++) {
  totalAge += usersSara[i].age;
}

console.log(totalAge)
let averageAge = totalAge / usersSara.length;

console.log(averageAge);



// Get users whose age is between 20–30.  



let usersAge =[
    {name: "riya",
        age: 24
    },
     {name: "lopa",
        age: 20
    }
    ,
     {name: "siya",
        age: 34
    },
    
    {name: "rink",
        age: 25
    },
    
    
    ]
    
    
    for (let user of usersAge ){
        if(user.age > 20 && user.age < 30){
            console.log(user)
        }
    }

 // Add a new property isActive:true to each user. 

for (let i=0; i< users.length; i++){
  users[i].isActive = true 
}

console.log(users)


//// Remove users younger than 23. -Done


    let  youngerUser= [
        {name:"suchi",
        age: 24},
        
         {name:"shivani",
        age: 22}
        
        
 ]
        
        let younger = youngerUser.filter((item)=>(item.age >=23 ))

console.log(younger)

///Update name "John" → "Johnny".


    let usersUpdate = [
        {name:"John",
        age: 24},
        
         {name:"shivani",
        age: 22}
        
        
        ]
        
        

for(let user of usersUpdate ){
    if(user.name === "John"){
       user.name = "Johnny"
    }
}

console.log(usersUpdate)

// Find index of user with id 2.

let FindUser = [
    { id:1,
    name:"siva",
    
        
    },
    
   {
       id:2,
    name:"alu" 
       
   } 
   ]

for (let i=0; i<FindUser.length; i++){
    if(FindUser[i].id === 2){
        console.log(FindUser[i])
    }
}


// Check if any user age is greater than 40.

let greaterUser = [
    { id:1,
    name:"siva",
    age:30
    
        
    },
    
   {
       id:2,
    name:"alu" ,
       age:40  
   } ,
   
      {
       id:2,
    name:"alu" ,
       age:50  ,
   } 
   ]
   
   for (i=0; i<greaterUser.length; i++){
      if(greaterUser[i].age > 40){
           console.log(greaterUser[i])
       }
   }

  


   // Get first two users.

let firstUser = [
    { id:1,
    name:"siva",
    age:12
    
        
    },
    
   {
       id:2,
    name:"alu" ,
       age:40  
   } ,
   
      {
       id:2,
    name:"alu" ,
       age:50  ,
   } 
   ]
   
   let result = []
   
   for (i=0; i<2; i++){
      result.push(firstUser[i])
   }
   
   console.log(result)

   //


   // Find user whose name starts with "S".

let StratUser = [
    { id:1,
    name:"siva",
    age:12
    
        
    },
    
   {
       id:2,
    name:"ashish" ,
       age:40  
   } ,
   
      {
       id:3,
    name:"suchi" ,
       age:50  ,
   } 
   ]
   
 let take = []
   
   for (i=0; i<StratUser.length; i++){
     if(StratUser[i].name[0] === "s"){
         take.push(StratUser[i])
     }
   }
   
   console.log(take)