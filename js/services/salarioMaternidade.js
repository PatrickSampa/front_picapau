const test = require('jwt-decode')
let popup = document.getElementById("popup");
    
    let cssElement4 = document.querySelector(".container .button-container div:nth-child(4)");
    let cssElement3 = document.querySelector(".container .button-container div:nth-child(3)");
    let cssElement2 = document.querySelector(".container .button-container div:nth-child(2)");
    let cssElement1 = document.querySelector(".container .button-container div:first-child");
    let elem = cssElement1.parentNode;
    
    console.log(elem)
    function openPopup(){
      popup.classList.add("open-popup")
      
      
    }
    function closePopup(){
      var link = document.getElementById("teste");
      link.click();
    }
    
    const form = document.getElementById('form');
    
    const url = 'http://localhost:3000/samir/getInformationFromSapienForSamirSemIdade'
    const cpf = document.getElementById('CPFSapiens');
    const senha = document.getElementById('passwordSapiens')
    const etiqueta = document.getElementById('EtiquetaSapiens')

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
      
      const token = JSON.parse(localStorage.getItem('access_token'));

      try {
          const decodedToken = jwtDecode(token);
          console.log("Payload do Token:", decodedToken);
      } catch (error) {
          console.error("Erro ao decodificar o token:", error.message);
      }

      e.preventDefault();
      cssElement4.classList.add("testeee");
      cssElement4.style.backgroundImage = "linear-gradient(to top, var(--color6), var(--color4))";
      cssElement3.classList.add("testeeee");
      cssElement3.style.backgroundImage = "linear-gradient(to top, var(--color6), var(--color4))";
      cssElement2.classList.add("testeeeee");
      cssElement2.style.backgroundImage = "linear-gradient(to top, var(--color6), var(--color4))";
      cssElement1.classList.add("testeeeeee");
      cssElement1.style.backgroundImage = "linear-gradient(to top, var(--color6), var(--color4))";
      /* elem.style.boxShadow = "0 0 1rem 0.5rem var(--color4)"; */
      await checkInputs();
    })
        
    async function checkInputs(){
      document.getElementById('erro').innerHTML = "";
      const cpfValue = cpf.value
      const senhaValue = senha.value
      const etiquetaValue = etiqueta.value
      const data = {
            login: {
                cpf: `${cpfValue}`,
                senha: `${senhaValue}`,
            },
            etiqueta: `${etiquetaValue}`,
            //user_id: 
        }  
        console.log(data.login.cpf)
        console.log(data.login.senha)
        console.log(data.etiqueta)
        document.getElementById('triagem').innerHTML = "Triando Processos..."
        await axios.post(url, data).then( data => { document.getElementById('erro').innerHTML = "Fim da Triagem"}).catch(err => {
          const objetoErro = (err.response.data)
          /* console.log((objetoErro.message)); */
          if(objetoErro.message == "Cannot read properties of undefined (reading 'result')"){
            document.getElementById('erro').innerHTML = `Usuário Incorreto`
          }else{
            document.getElementById('erro').innerHTML = `ERRO NO SERVIDOR. \nConsulte o Desenvolvedor`
          }
        } )
        document.getElementById('triagem').innerHTML = "Iniciar Triagem";
        cssElement4.classList.remove("testeee");
        cssElement4.style.backgroundImage = "";
        cssElement3.classList.remove("testeeee");
        cssElement3.style.backgroundImage = "";
        cssElement2.classList.remove("testeeeee");
        cssElement2.style.backgroundImage = "";
        cssElement1.classList.remove("testeeeeee");
        cssElement1.style.backgroundImage = "";
    }