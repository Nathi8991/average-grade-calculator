// this is the homework that yididiya gave me

let english =parseInt(prompt('Enter your English Grade'))
let math = parseInt(prompt('Enter your Math Grade'))
let physics = parseInt(prompt('Enter your Physics Grade'))
let biology = parseInt(prompt('Enter your Biology Grade'))
let chemistry = parseInt(prompt('Enter your Chemistry Grade'))
let history = parseInt(prompt('Enter your History Grade'))
const average_grade = (english + math + physics + biology + chemistry + history / 6)
if (average_grade > 90){
    alert('Your score is an A! Excellent! ')
}else if (average_grade >80 && average_grade <90){
    alert('Your score is a B! Very Good! ')
}else if (average_grade >70 && average_grade <80){
    alert('Your grade is a C! Good!')
}else if(average_grade <70){
    alert('You got below a C. Please Retake')
}