// var : no reason to use var ----
// let : allow it to reassign
// const: do not allow it to reassign


// const এর মান চেঙ্গ করা জায়না-----
const money = 25;
//  money = 50;
const rich = money + 25;
// console.log(rich);


const ricePrice = 35;
// ricePrice = 34;
const beefPrice = 40;
const totalPrice = ricePrice + beefPrice;
// console.log(totalPrice);



//  let এর মান change kora jay 
let phonePrice = 123;
phonePrice = 120;
let headPhonePrice = 45;
let backCaverPrice = 23;

const allPrice = phonePrice + headPhonePrice + backCaverPrice;
// console.log(allPrice);






let count = 0;
count = count + 10;
// console.log(count)




// const দিয়ে variable declayer করলে re-asine সম্ভবনা , তবে তুমি চাইলে ভিতরে change করতে পার । 


const numaricNumber = [12, 34, 53, 54, 65];
// const এর মদ্দে add করা যাবে না ।
// numaricNumber = [4, 5, 64,];

// console.log(numaricNumber);


let newNumbers = [43, 534, 5432, 75];
newNumbers = [44, 3, 2];
newNumbers.push(8, 9, 10);
newNumbers[2] = 122222;
// console.log(newNumbers);






const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7];
numbers[1] = 55;
numbers.push(8, 9, 65);

// console.log(numbers);


// object

const newStudent = {
    name: 'sayem',
    class: 11
    
}
newStudent.name = 'kolilkonthi',

console.log(newStudent);



// object 
const student = {
    name: 'moyna pakhi',
    class: 12
}

// student = {name:'kokil konthi'}
student.name = 'moyur konthi';
// console.log(student);

// loop
let sum = 0;
for(let i = 0; i <10; i++){
    const num = i;
    sum = sum + num;
}
// console.log(sum);