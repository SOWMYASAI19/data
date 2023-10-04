let data=[
    {id:1,name:'abc',courses:['math','bio','chemistry'],cgpa:3.6},
    {id:2,name:'def',courses:['math','bio','Physics'],cgpa:3.6},
    {id:3,name:'ghi',courses:['chemistry','bio','geometry'],cgpa:3.6},
    {id:4,name:'jkl',courses:['social','bio','chemistry'],cgpa:3.6},

]

//length,push,findIndex,forEach,map,filter,flatmap
let st={id:5,name:'mno',courses:[],cgpa:0};
console.log('no of students',data.length);
data.push(st)

//length is used the number of elements in the array
console.log('no of students',data.length);
console.log(data)
console.log('no of students', data.length);

data.forEach(x=>console.log(x.name,'--->',x.cgpa));

//data.forEach(x=>console.log(x.courses))

//It is used to add one or more elements to the end of an array .
 data.forEach(x=>x.courses.push('alg'))

console.log(data)
let unq_courses=[]
//FindIndex is used for the index of the array.
//The flatMap method is used to extract all of the classes in the data array from each student and generate a flattened array of unique courses.
let all_courses=data.flatMap(x=>x.courses)
//forEach method is used to loop through the data array and display the name and CGPA of each student to the console.
all_courses.forEach(x=>{
    if(!unq_courses.includes(x)){
        unq_courses.push(x)
    }
})
console.log(unq_courses);
//console.log(all_courses)

//let search='alg'
unq_courses.forEach(y=>{

    //The filter() method is used to filter and return a new array of objects with a particular property value.
    console.log(y,data.filter(x=>x.courses.includes(y)).length)
})
//console.log(data.filter(x=>x.courses.includes(search)).length)

//The map() function is used to extract the cgpa property of each object in the data array and create a new array having only these cgpa values.
let all_cgpa=data.map(x=>x.cgpa)
console.log(all_cgpa)
//console.log(data.map(x=>x.courses).flatMap(x=>x))
//console.log(data.map(x=>x.courses))
//console.log(data.flatMap(x=>x.courses))
