



let btn = document.querySelector(".signbox")
let pass = document.querySelector(".pass")

btn.addEventListener("click" , (e) => {
    // *******************************************
    let messages2 = []  ;

    if (pass.value.length <= 5 ) {
        messages2.push('<i class="fa-sharp fa-solid fa-circle-exclamation fa-beat-fade"></i> Password must be longer than 6 Characters ') ;
        error2.style.opacity="1"
        error2.style.transition="0.5s"
    }
    
    else if (pass.value.length > 20 ) {
        messages2.push('<i class="fa-sharp fa-solid fa-circle-exclamation fa-beat-fade"></i> Password must be less than 20 Characters ') ;
        error2.style.opacity="1"
        error2.style.transition="0.5s"
    }else {
            error2.style.opacity="0"
        error2.style.transition="0.5s"
    }
    
    // *********************************************
    
    if (messages2.length > 0) {
        e.preventDefault()
        error2.innerHTML =  messages2.join(" ") ;
    }
    

    // name 











})
    
    