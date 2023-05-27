const BASE_URL = "https://fakestoreapi.com";

document.querySelector("#register-btn").addEventListener("click", ()=>{
    let name = document.querySelector("#name").value;
    let surName = document.querySelector("#surname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confPass = document.querySelector("#confrim-password").value;
    const data = {
        name,
        surName,
        email,
        password,
        confPass,
    }
    
    axios.post(`${BASE_URL}/products`, data).then((res) => {
        console.log(res);
      });
    
})
