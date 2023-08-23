console.log("teste script")
//items de cadastro
const nome_cadastro = document.getElementById("nome_cad");
const email_cadastro = document.getElementById("email_cad");
const password_cadastro = document.getElementById("senha_cad");
const botao_cadastro = document.getElementById("cadastroForm");
const urlCadastro = 'http://localhost:3009/auth/create/user';

//items de login
const email = document.getElementById("email_login")
const password = document.getElementById("pwd");
const check_button_password = document.getElementById("chk");
const botao_login = document.getElementById("loginForm");
const urlLogin = "http://localhost:3009/auth/login";

check_button_password.onchange = function(e){
         password.type = check_button_password.checked ? "text" : "password";
}


botao_cadastro.addEventListener("submit", async (e) =>{
    e.preventDefault();


    const data = {
        email: email_cadastro.value,
        password: password_cadastro.value,
        name : nome_cadastro.value
    }

    try{
        const result = await axios.post(urlCadastro, data);
        // localStorage.setItem(JSON.stringify(result));
        window.location.href = "../login.html";
    }catch(e){
        console.log(e)
        const userIsNotAuthorizedString = e.response.statusText
        const userIsNotAuthorizedStatusCode = e.response.status
        
        if(userIsNotAuthorizedString == "Unauthorized" && userIsNotAuthorizedStatusCode == 401){
            console.log("PASSOU")
        }
        console.log("NÃO PASSOU")
    }

});

botao_login.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        email: email.value,
        password: password.value
    }
    /* const cpfIsValid = verificarCpf(cpf.value)
    if(!cpfIsValid){
        //mensagem de erro. cpf não é valido
    } */
    
    try{
        const result = await axios.post(urlLogin, data)
        localStorage.setItem('token',JSON.stringify(result));
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