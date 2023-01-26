// Q1 - Return Name of student in capital
const names = students.map((student) => {
    return student.name.toUpperCase();
})
console.log(names);
// Output - [ 'SAM', 'MOHIT', 'SAPNA', 'TIM' ]


// Q2 - Return students with more than 60 marks
const filteredStudents = students.filter((student) => {
    return student.marks > 60
})
console.log(filteredStudents);
// Output - [
//   { name: 'Sam', rollNumber: 17, marks: 80 },
//   { name: 'Mohit', rollNumber: 35, marks: 69 }
// ]


// Q3 - Return students with more than 60 marks & roll number less than 20 
const filteredStudents = students.filter((student) => {
    return student.marks > 60 && student.rollNumber < 20;
})
console.log(filteredStudents);
// Output - [ { name: 'Sam', rollNumber: 17, marks: 80 } ]


// Q4 - Return total marks of all students
const totalMarks = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0)
console.log(totalMarks);
// Output - 239


// Q5 - Return student names with more than 60 marks
const filteredStudents = students.filter((student) => {
    return student.marks > 60
}).map((student) => {
    return student.name
})
console.log(filteredStudents);
// Output - [ 'Sam', 'Mohit' ]









