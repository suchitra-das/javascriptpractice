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