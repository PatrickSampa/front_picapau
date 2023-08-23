
const email = document.getElementById("email_login")
const pwd = document.getElementById("pwd")
const chk = document.getElementById("chk");
const botao_login = document.getElementById("loginForm");
const urlLogin = "http://localhost:3009/auth/login"

chk.onchange = function(e){
         pwd.type = chk.checked ? "text" : "password";
}


botao_login.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        email: email.value,
        password: pwd.value
    }
    /* const cpfIsValid = verificarCpf(cpf.value)
    if(!cpfIsValid){
        //mensagem de erro. cpf não é valido
    } */
    
    try{
        const result = await axios.post(urlLogin, data)
        window.location.href = "../../MenuPrincipal.html"
    }catch(e){
        console.log(e)
        const userIsNotAuthorizedString = e.response.statusText
        const userIsNotAuthorizedStatusCode = e.response.status
        
        if(userIsNotAuthorizedString == "Unauthorized" && userIsNotAuthorizedStatusCode == 401){
            console.log("PASSOU")
        }
        console.log("NÃO PASSOU")
    }
    
    
    /* console.log("result: " + JSON.stringify(result)) */
})





 /* function verificarCpf(cpf){
    return /^[0-9]*$/.test(cpf)
} */