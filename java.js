//TASK 1 

const persons = [{
    name:"gunasheelan",
    age:23,
    phone:9348955974,
},
{
    name:"Surya",
    age:13,
    phone:9376575974,
},
{
    name:"Saran raj",
    age:53,
    phone:9782575974,
}];

//For Loop

// for(let d = 0; d <=persons.length;d++) {
//     console.log(persons[d].name);
//     console.log(persons[d].age);
//     console.log(persons[d].phone);
// }

// forof 

// for(let value of persons) {
//     console.log(value.name);
//     console.log(value.age);
//     console.log(value.phone);
// }
 
// foreach

// persons.forEach(function (all) {
//     console.log(all.name)
//     console.log(all.age)
//     console.log(all.phone)
// });

//forin 


// for(d=0;d<persons.length;d++){
// for(var values in persons[d]){
//      console.log(`${values}: ${persons[d][values]}`);
// }
// }


// TASK 2 RESUME

let resume = {
    "details": {
        "Name":  "Gunasheelan A",
        "email": "gunasheelan1624@gmail.com",
        "phone":  9342575974,
        "myLocation": {
            "country":  "India",
            "state":    "tamilnadu",
            "district":  "Coimbatore",
             "address":  "4/44 First Lane lakshmi nagar kinathukadavoo 642109",
    }
    },
    "profiles":[ 
      {
        "twitter":" ",
        "instagram":" ",
        "github":" ",
      }
     ],
    "Education": [ 
      {
        "Kg to 10th":"New Bharath Matric. Hr. Sec. SCHOOL",
        "10 to 12th":"New merit Matric. Hr. Sec. SCHOOL",
        "Collage":"Hindusthan Institute of Technology",
        "department":"Information Technology",
      "Year of study":"2018 to 2022",
        "cgpa":7,
    }
    ],
    "Collage project":[
        {
        "Project name":"Real Time Drowsiness Detection using oper cv",
        }
    ],
    "languages know": [
        {
        "First language":"Tamil",
        "Second language":"English",
    }
    ], 
    "Hobby": [
     {
        "name":"Playing games, reading book, typing programes",
     }
    ]
   }
console.log(resume); 
