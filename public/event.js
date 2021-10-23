let userDataBase = [];
let userData = {};

//collecting data from form
const signupForm = document.querySelector('#form');
let userName = signupForm.username;
let email = signupForm.email;
let password = signupForm.password;
let showPassword = signupForm.showPassword;

signupForm.addEventListener('submit', e =>{
    e.preventDefault(); //prevents submitting to another page
    userData.username = userName.value;
    userData.email = email.value;
    userData.password = password.value; //object we can push into empty object
    
    //save user data to temporary database
    userDataBase.push(userData);
    console.log(userDataBase);

    //clear the form 
    signupForm.reset();
})

showPassword.addEventListener('change', e => {
    e.preventDefault();
    if (showPassword.checked) {
        password.type ='text'
    } else {
        password.type = 'password'
    }
}) //make password visible

const MAXIMUM_LENGTH = 8;

password.addEventListener('input', e => {
    e.preventDefault();
    let value = e.target.value;
    let left = MAXIMUM_LENGTH - value.length;
    const span = document.querySelector('#span')
    span.textContent = `${left} characters left.` //to see how many characters left

    if (left ==0) {
        password.disabled = true; 
    } //to prevent user from adding more characters if reaches MAXIMUM_LENGTH
}) 


