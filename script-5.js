

// page one 
let user = document.querySelector(".urname")
let pass = document.querySelector(".pass")
let btn = document.querySelector(".signbox")
let error = document.querySelector(".error1")
let error2 = document.querySelector(".error2")

btn.addEventListener("click" , (e) => {
let messages = []  ;
if (user.value === '' || user.value == null ) {
     messages.push('<i class="fa-sharp fa-solid fa-circle-exclamation fa-beat-fade"></i> Name is required') ;
     error.style.opacity="1"
     error.style.transition="0.5s"
}else {
    error.style.transition="0.5s"
    error.style.opacity="0"
}
// *******************************************
let messages2 = []  ;
if (pass.value.length <= 5 ) {
    messages2.push('<i class="fa-sharp fa-solid fa-circle-exclamation fa-beat-fade"></i>Password must be longer than 6 Characters ') ;
    error2.style.opacity="1"
    error2.style.transition="0.5s"
}

else if (pass.value.length > 20 ) {
    messages2.push('<i class="fa-sharp fa-solid fa-circle-exclamation fa-beat-fade"></i>Password must be less than 20 Characters ') ;
    error2.style.opacity="1"
    error2.style.transition="0.5s"
}else {
    if(pass.value.length>1) {
        error2.style.opacity="0"
    error2.style.transition="0.5s"

    }
}

// *********************************************

if (messages.length > 0) {
    e.preventDefault()
    error.innerHTML =  messages.join(" ") ;
}
if (messages2.length > 0) {
    e.preventDefault()
    error2.innerHTML =  messages2.join(" ") ;
}
})



// page two

