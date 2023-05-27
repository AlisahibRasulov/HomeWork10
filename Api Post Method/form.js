// const registerBtn = document.querySelector("#register-btn");


document.querySelector("#register-btn").addEventListener('click',()=>{
    let name = document.querySelector("#name");
    let surName = document.querySelector("#surname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confPass = document.querySelector("#confrim-password");
    // let errorMessageAll = document.querySelector("#error-message-all");
    let errorMessageName = document.querySelector("#error-message-name");
    let errorMessageSurname = document.querySelector("#error-message-surname");
    let errorMessageEmail = document.querySelector("#error-message-email");
    let errorMessagePass = document.querySelector("#error-message-password");
    let errorMessageConfPass = document.querySelector("#error-message-confrim-password");
    let emailRegex  = /^(.+)@(.+)$/;
    let pswRegex  = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;



    
    if(name.value.trim().length == 0||surName.value.trim().length == 0||email.value.trim().length == 0||password.value.trim().length == 0||confPass.value.trim().length == 0){

        checkErrorMessage1(
            errorMessageName,
            "Xanaları boş saxlamayın",
            "error-message"
        )
        checkErrorMessage2(
            errorMessageSurname,
            "Xanaları boş saxlamayın",
            "error-message"
        )
        checkErrorMessage3(
            errorMessageEmail,
            "Xanaları boş saxlamayın",
            "error-message"
        )
        checkErrorMessage4(
            errorMessagePass,
            "Xanaları boş saxlamayın",
            "error-message"
        )
        checkErrorMessage5(
            errorMessageConfPass,
            "Xanaları boş saxlamayın",
            "error-message"
        )
        name.style.borderColor="red"; //name.value="";name.style.borderWidth="3px";
        surName.style.borderColor="red"; //surName.value=""; surName.style.borderWidth="3px";
        email.style.borderColor="red"; //email.value=""; email.style.borderWidth="3px";
        password.style.borderColor="red"; //password.value=""; password.style.borderWidth="3px";
        confPass.style.borderColor="red"; // confPass.value=""; confPass.style.borderWidth="3px";
     } 


   else if(!emailRegex.test(email.value)){
        checkErrorMessage3(
            errorMessageEmail,
            "@ və . simvolu olmalıdır",
            "error-message"
        );
        email.style.borderColor="red"; //email.style.borderWidth="3px"; email.value=""; 
    }
   else if(!pswRegex.test(password.value)){
    checkErrorMessage4(
        errorMessagePass,
        "Rəqəm və xüsusi xarakter ehtiva etməlidir",
        "error-message"
    );
    password.style.borderColor="red"; //password.style.borderWidth="3px";password.value="";
   }
   else if(!pswRegex.test(confPass.value)){
    checkErrorMessage5(
        errorMessageConfPass,
        "Rəqəm və xüsusi xarakter ehtiva etməlidir",
        "error-message"
    );
    confPass.style.borderColor="red"; //confPass.style.borderWidth="3px"; confPass.value="";  
}
// else if(!(localSetPsw = localGetPsw)){
//     checkErrorMessage4(
//         errorMessagePass,
//         "Rəqəm və xüsusi xarakter ehtiva etməlidir",
//         "error-message"
//     );
//     password.style.borderColor="red"; //password.style.borderWidth="3px";password.value="";
//    }


   else{
    swal("Good job!", "You clicked the button!", "success");
    // errorMessageAll.classList.remove("error-message");
    // errorMessageAll.innerHTML="";
    password.style.borderColor="green"; email.style.borderColor="green"; confPass.style.borderColor="green";
    name.value=""; surName.value=""; email.value=""; password.value=""; confPass.value="";
   }

})

document.querySelector("#name").addEventListener("keyup",(e)=>{
    if(e.target.value.trim().length < 8 || e.target.value.trim().length >= 20){
        document.querySelector("#error-message-name").classList.remove("error-message");
        document.querySelector("#error-message-name").innerHTML = "";
        e.target.style.borderColor = "green";
        e.target.style.outline = "green";
       }
})

document.querySelector("#surname").addEventListener("keyup",(e)=>{
    if(e.target.value.trim().length){
        document.querySelector("#error-message-surname").classList.remove("error-message");
        document.querySelector("#error-message-surname").innerHTML = "";
        e.target.style.borderColor = "green";
        e.target.style.outline = "green";
       }
})

document.querySelector("#email").addEventListener("keyup",(e)=>{
    let emailRegex  = /^(.+)@(.+)$/;
    let errorMessageEmail = document.querySelector("#error-message-email");
    if(!emailRegex.test(email.value)){
        checkErrorMessage3(
            errorMessageEmail,
            "@ və . simvolu olmalıdır",
            "error-message"
        );
        e.target.style.borderColor = "red";
        e.target.style.outline = "red";
       }
       else{
        document.querySelector("#error-message-email").classList.remove("error-message");
        document.querySelector("#error-message-email").innerHTML = "";
        e.target.style.borderColor = "green";
        e.target.style.outline = "green";
       }
})

document.querySelector("#password").addEventListener("keyup",(e)=>{
    let pswRegex  = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    let errorMessagePass = document.querySelector("#error-message-password");
    if(e.target.value.trim().length < 8 || e.target.value.trim().length >= 20){
        checkErrorMessage4(
            errorMessagePass,
            "Uzunluq 8 simvoldan çox və 20 simvoldan az olmalıdır",
            "error-message"
        );
        e.target.style.borderColor = "red";
        e.target.style.outline = "red";
       }
       else if(!pswRegex.test(e.target.value)){
        checkErrorMessage4(
            errorMessagePass,
            "Rəqəm və xüsusi xarakter ehtiva etməlidir",
            "error-message"
        );
        password.style.borderColor="red"; //password.style.borderWidth="3px"; password.value="";  
    }
      else{
        document.querySelector("#error-message-password").classList.remove("error-message");
        document.querySelector("#error-message-password").innerHTML = "";
        e.target.style.borderColor = "green";
        e.target.style.outline = "green";
       }
})

document.querySelector("#confrim-password").addEventListener("keyup",(e)=>{
    let pswRegex  = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    let errorMessageConfPass = document.querySelector("#error-message-confrim-password");
    if(e.target.value.trim().length < 8 || e.target.value.trim().length >= 20){
        checkErrorMessage5(
            errorMessageConfPass,
            "Uzunluq 8 simvoldan çox və 20 simvoldan az olmalıdır",
            "error-message"
        );
        e.target.style.borderColor = "red";
        e.target.style.outline = "red";
       }
       else if(!pswRegex.test(e.target.value)){
        checkErrorMessage5(
            errorMessageConfPass,
            "Rəqəm və xüsusi xarakter ehtiva etməlidir",
            "error-message"
        );
        confPass.style.borderColor="red"; //confPass.style.borderWidth="3px"; confPass.value="";  
       }    
      else{
        document.querySelector("#error-message-confrim-password").classList.remove("error-message");
        document.querySelector("#error-message-confrim-password").innerHTML = "";
        e.target.style.borderColor = "green";
        e.target.style.outline = "green";
       }
})

const checkErrorMessage1 = (element, message, className) => {
    element.innerHTML = `${message}`;
    element.classList.add(`${className}`); 
  };
  
  const checkErrorMessage2 = (element, message, className) => {
    element.innerHTML = `${message}`;
    element.classList.add(`${className}`); 
  };
  const checkErrorMessage3 = (element, message, className) => {
    element.innerHTML = `${message}`;
    element.classList.add(`${className}`); 
  };
  
  const checkErrorMessage4 = (element, message, className) => {
    element.innerHTML = `${message}`;
    element.classList.add(`${className}`); 
  };
  const checkErrorMessage5 = (element, message, className) => {
    element.innerHTML = `${message}`;
    element.classList.add(`${className}`); 
  };
  

// document.querySelector("#eye-Psw").addEventListener("click", ()=>{
//     var visible = false;
//     let password = document.querySelector("#password");
    
//     if(visible){
//                 password.type = "password";
//                 visible = false;
//                 eye.style.color = "#999"
//              } else{
//                 password.type = "text";
//                 visible = true;
//                 eye.style.color = "black";
//              }
//   })

var visible = false;
let confPass = document.querySelector("#confrim-password");
let eyeConfPsw = document.querySelector("#eye-ConfPsw");
let password = document.querySelector("#password");
let eyePsw = document.querySelector("#eye-Psw");

  function showPsw() {
    if(visible){
        password.type = "password";
        visible = false;
        eyePsw.style.color = "#999"
    } else{
        password.type = "text";
        visible = true;
        eyePsw.style.color = "black"
    }
} 

function showConfPsw() {
    if(visible){
        confPass.type = "password";
        visible = false;
        eyeConfPsw.style.color = "#999"
    } else{
        confPass.type = "text";
        visible = true;
        eyeConfPsw.style.color = "black"
    }
} 
