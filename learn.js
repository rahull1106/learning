let fname= document.getElementById('fullname')
let emails= document.getElementById('email')
let phones= document.getElementById('Phone')
let dobs= document.getElementById('DOB')
let languages= document.getElementById('language')
let ind= document.getElementById('Indian')
let bha= document.getElementById('Bhartiya')


function FormInput(){
if (fname.value==""){
    alert("Please Enter your name")
}
function FormInput(){
    if(emails.value==""){
        alert("Please enter your email")
    }
}
function FormInput(){
    if(phones.value==""){
        alert("Enter mobile number")
    }
}
function FormInput(){
    if(dobs.value==""){
        alert("Enter DOB")
    }
}
function FormInput(){
    if(languages.value){
        alert('Enter type')
    }
}
function FormInput(){
    if(ind.value){
        alert('Select')
    }
}
function FormInput(){
    if(bha.value){
        alert('Select')
    }
}
const data ={
    name:fname.value,
    email:emails.value,
    phone:phones.value,
    DOB:dobs.value,
    language:languages.value,
    Indian:ind.value

}
console.log(data)

}




// console.log("hello world")