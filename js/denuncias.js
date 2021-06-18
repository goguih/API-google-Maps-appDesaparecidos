    function inserirDesaparecido(){
    let listDenuncia = JSON.parse(localStorage.getItem('listDenuncia') || '[]')
    let denunciaValid = {
        nome: "",
        nomeMãe: "",
        nomePai: "",
        sexo: "",
        idade: "",
        dataNascimento: "",
        dataDesaparecimento: "",
        naturalidade: "",
        uf: "",
        altura: "",
        olhos: "",
        pele: "",
        cabelos: "",
    }
    
    listDenuncia.push(
      {
        nome: nome.value,
        nomeMae: nomeMae.value,
        nomePai: nomePai.value,
        sexo: sexo.value,
        idade: idade.value,
        dataNascimento: dataNascimento.value,
        dataDesaparecimento: dataDesaparecimento.value,
        naturalidade: naturalidade.value,
        altura: altura.value,
        olhos: olhos.value,
        pele: pele.value,
        cabelos: cabelos.value
      }
    )
    localStorage.setItem('listDenuncia', JSON.stringify(listDenuncia))
    
    listaDenunciaSave = JSON.parse(localStorage.getItem('listDenuncia'))
    
    listaDenunciaSave.forEach((item) => {
    
        denunciaValid = {
        nome: item.nome,
        nomeMae: item.nomeMae,
        nomePai: item.nomePai,
        sexo: item.sexo,
        idade: item.idade,
        dataNascimento: item.dataNascimento,
        dataDesaparecimento: item.dataDesaparecimento,
        naturalidade: item.naturalidade,
        altura: item.altura,
        olhos: item.olhos,
        pele: item.pele,
        cabelos: item.cabelos
        }
      }
    )
    
    localStorage.setItem('denunciaSave', JSON.stringify(denunciaValid))
    alert("Solicitação de desaparecido efetuada")
    
    }
    
    function clickVoltarIndex(){
        window.location.href = "./indexLogado.html";
    }
    const voltar = document.querySelector('.btn-secondary');
    voltar.addEventListener('click', () => clickVoltarIndex("./indexLogado.html"))
    
    const enviar = document.querySelector('.btn-primary');
    enviar.addEventListener('click', () => inserirDesaparecido())
    
    if(localStorage.getItem('token') == null){
      alert("Necessário estar logado!");
      window.location.href = "./index.html"
    }