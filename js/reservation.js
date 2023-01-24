// Counter //

let minBtn = document.getElementById('count-down');
let count = document.getElementById('counter');
let plusBtn = document.getElementById('count-up');

let countGuest = 0;

minBtn.addEventListener("click", () => {
  if (countGuest > 0) {
    countGuest--;
    count.innerHTML = countGuest;
  }
});

plusBtn.addEventListener("click", () => {
  countGuest++;
  count.innerHTML = countGuest;  
});


// Validation // 

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("name"),
    email = id("email"),
    form = id("form"),    
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");    
    

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validation(fname, 0, "Name cannot be blank");
  validation(email, 1, "Email cannot be blank");  
});


let validation = (id, serial, message) => {
  if(id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.borderBottom = "1px solid red";


    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.borderBottom = "1px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

