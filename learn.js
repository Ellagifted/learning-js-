const studentName ="jacob"
const studentRegNumber = 2022514134
const score =75
let passedScore =score
console.log( typeof studentName)
console.log( typeof studentRegNumber)
console.log( typeof passedScore)
console.log( typeof score )

 const report =`${studentName} with the registration number ${studentRegNumber} scored ${score}`
 console.log(report)
 if(passedScore>=75){
    console.log("A");
 } else if (passedScore>=60){
    console.log("B");
 } else if (passedScore>50){
    console.log("C");
 }else if (passedScore>40){
    console.log("D")
 }else{console.log ("you failed and cannot be promoted u have to resit this exam next year")
 }

 const temperature =5
 if(temperature>=30){
    console.log("the weather is hot today")
 }else if (temperature>=23 && temperature<=27){
    console.log("the weather sis warm today")
 }else if(temperature>=10 && temperature<18){
console.log("the weather is cool")
 }else {
    console.log ("the weather is extermly cold today ")
 }
 let a ="5"
 let b=3
 let c=a+b
 let d= a-b
 console.log(c)
 console.log(d)
 console.log(typeof a)
 console.log(typeof b)
 console.log(typeof c)
console.log(typeof d)

 const nameOfStudents=["joy","hope","micheal","Peace"]
nameOfStudents.push("ella")
nameOfStudents.pop()
nameOfStudents.unshift("love")
nameOfStudents.shift()
nameOfStudents.includes("peace")
 console.log(nameOfStudents.length)
console.log(nameOfStudents.indexOf("joy"))
console.log(nameOfStudents.push("ella"))
console.log(nameOfStudents.unshift("love"))
console.log(nameOfStudents)

const studentscores = [10, 20, 30, 40, 80, 40, 49, 90];
for (let i=0;i<studentscores.length;i++){
    console.log(studentscores[i])
}

for (let index = studentscores.length - 1; index > 0; index--) {
  console.log(studentscores[index]);
}
let regNoforCompSce = 2022514001;
while (regNoforCompSce <= 2022514250 && regNoforCompSce >= 2022514001) {
   console.log(regNoforCompSce);
  regNoforCompSce++;

}
const regNo = 2022514001;
let total = 0;
for (let i = regNo; i <= 2022514250; i++) {
  console.log(i);
}
const peopleName = ["joy", "peace", "mandy", "femi", "kelechi", "ope "];
let total = 0;
for (i = 0; i<peopleName.length; i++){
  if(i===3){
    break
  }
  console.log(peopleName[i])
}

for (const studentName of peopleName) {
  if(studentName==="femi"){
    break
  }
 console.log(studentName)
}
for (const availableStudent of peopleName){
  if(availableStudent==="femi"){
    continue
  }
   console.log(availableStudent)
}

const studentAge =[80, 30, 50,40, 70,12,30]
let highest = studentAge[0]

for (let i=0;i<studentAge.length; i++ ){

}
let result =  Map.studentscore(())

let personName = (inde)=>console.log(`HELLO ${inde}`)
// personName("ade")
let numbr = (a, b) => {
  return a + b;
};
let result = numbr(8, 8);
console.log(result);

let personName = (inde) => `HELLO ${inde}`;

let text = personName("ike");
console.log(text);

let calculateAge = (currentYear, birtYear) => {
  return currentYear - birtYear;
};
let person = calculateAge(2026, 2005);
console.log(person);
let multiplyAge = (a, b) => {
  return a * b;
};
let totalAge = multiplyAge(9, 20);
console.log(totalAge);

let greet = (nam) => `hello ${nam}`;

let greetText = greet("ike");
console.log(greetText);

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let d = 1; d <=40; d *= 2) {
  console.log(d);
}

today 22/09/2026

 for (let p=1; p<=20;p++){
  console.log(`printing from ${p}`)
 }

for ( let k =1; k<=20; k*=2){
console.log(`multiple of 2 ${k}`)
}

for (let o = 1; o <= 20; o++) {
  if (o % 2 == 0) {
    console.log(`even num ${o}`);
  }
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(`odd num ${i}`);
  }
}
let calculatedate = (a, b) => {
  return a + b;
};
let total = calculatedate(3, 8);
console.log(`calculated total ${total}`);
for(let recNo=20 ;recNo>=1 ; recNo--){
    console.log(`counting backwards ${recNo}`)
}
for (let numDivBy3=1;numDivBy3<=20;numDivBy3++){
    if(numDivBy3%3===0){
        console.log(`the num divde by 3 ${numDivBy3}`)
    }
}
for (let wokeInTen=10 ; wokeInTen<=50 ;wokeInTen++){
    if(wokeInTen%5==0)
    {
        console.log(wokeInTen)
    }
}
for (let theSetOfNum=1;theSetOfNum<=40; theSetOfNum++){
    if (theSetOfNum%2==0){
        console.log(`this is an even number${theSetOfNum} `)

    }
    else{
        console.log(`this is an odd number ${theSetOfNum}`)
    }
}
for (let workOnbreak = 1; workOnbreak <= 20; workOnbreak++) {
  if (workOnbreak == 10) {
break
}
console.log(workOnbreak)
}

for (let i=1;i<=20; i++){
    if(i%2==0){
        continue
    }
    console.log(i)
}

let partwork= [ 2, 3, 3,4, 5, 4 ]
let multiplepartwork =partwork.map((iten)=>{
    return iten*2
}) 
console.log(multiplepartwork)


 let namesOfIncomingPeople =["ade","ike","peace","pelumi","joy"]
 let welcomeStudentIndividual = namesOfIncomingPeople.map((item)=>{
    return `hello ${item}`
 })
 console.log(welcomeStudentIndividual)

  let intialPrice =[ 100, 200, 300,400,500]
  let increasePrice= intialPrice.map((item)=>{
    return item+50
  })
  console.log(increasePrice)


   let number = [1,2,3,4,5,6,7,8,9,10,22,12,13,14,15,16,17,18,19,20]
   let detectIfEvenOrOdd=number.map((item)=>{
    if(item%2==0){
        return `even ${item}`
    }
    else{
        return `odd ${item}`
    }
   })
console.log(detectIfEvenOrOdd)