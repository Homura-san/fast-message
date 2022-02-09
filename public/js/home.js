function enviarMsg(){
  var user = {
    conteudo: document.getElementById('insert').value,
    nome: document.getElementById('nome').value
    }
  fetch('/chat', { method: "POST", body: JSON.stringify(user), headers: { "Content-type": "application/json; charset=UTF-8" } }) 
      .then(() => console.log('Mensagem enviada com sucesso.')) 
      .catch(() => alert('Houve um erro!!!!')) 
    
    document.location.reload(true)
  var nome = document.getElementById('nome')
  var msgs = document.getElementById('insert')
  msgs.value = null
  msgs.value = '[' + nome.value + ']'

  }
  
function apagar(){
  fetch('/del', { method: "DELETE"})
    .then(() => console.log('Apagado com sucesso.')) 
    .catch(() => alert('Houve um erro!!!!'))

  document.location.reload(true)
}

function erase(a){
  fetch(`del/${a}`, {method: "DELETE"})
      .then(() => console.log('Excluído!'))
      .catch(() => alert('Opss! Houve um erro!!!'))
    document.location.reload(true)
}

const inputEle = document.getElementById('insert');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    // colocas aqui a tua função a rodar
    enviarMsg()
  }
})

setTimeout(() => {
    document.location.reload(true)
  }, 55000)


var bodyDrop = document.querySelector('.drop')
function drop() {
  var nome = document.getElementById('nome')
  
}

function confNome(){
  var botao = document.querySelector('#conf')
  var nomes = document.getElementById('nome')
  nomes.style.display = 'none'
  botao.style.display = 'none'
}