function enviarMsg() {
  var nome = document.getElementById('nome').value
  var user = {
    conteudo: document.getElementById('insert').value,
    nome: nome
  }

  confNome()
  if (nome === null || nome === '') {
    alert('Por favor, insira seu nome!')
  } else {
    fetch('/chat', { method: "POST", body: JSON.stringify(user), headers: { "Content-type": "application/json; charset=UTF-8" } })
      .then((msg) => msg.text())
      .then(res => {
        if (res) throw res
        var msgs = document.getElementById('insert')
        msgs.value = null
        document.location.reload(true)
      })
      .catch((err) => alert(err))
  }
}

// function apagar(){
//   fetch('/del', { method: "DELETE"})
//     .then(() => console.log('Apagado com sucesso.')) 
//     .catch((err) => /*alert('Houve um erro! - apagar()')*/ console.log())

//   document.location.reload(true)

// }

function erase(a) {
  fetch(`del/${a}`, { method: "DELETE" })
    .then(() => console.log('Excluído!'))
    .catch((err) => /*alert('Opss! Houve um erro! - erase(a)')*/ console.log(err))
  document.location.reload(true)
}

const inputEle = document.getElementById('insert');
inputEle.addEventListener('keyup', function(e) {
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

function confNome() {
  var botao = document.querySelector('#conf')
  var nomes = document.getElementById('nome')
  // botao.style.display = 'none'

  //Adicionar ao localStorage
  let username = { nome: nomes.value }
  let user = JSON.stringify(username)

  localStorage.setItem('usuario', user)
}

function getName() {
  return JSON.parse(localStorage.getItem('usuario'))
}

function loadName() {
  var nomes = document.getElementById('nome')
  nomes.value = !getName() ? null : getName().nome
}
loadName()