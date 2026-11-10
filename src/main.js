import './style.css'

fetch('/api/health')
  .then(function(r) { return r.json() })
  .then(function(saude) {
    var status = 'API: offline'
    if (saude.status === 'ok') {
      status = 'API: online'
    }

    return fetch('/api/pets')
      .then(function(r) { return r.json() })
      .then(function(pets) {
        var html = '<h1>Amigo Fiel</h1><p>Adote um amigo!</p><p>' + status + '</p>'

        pets.forEach(function(p) {
          html += '<div class="card"><h2>' + p.nome + '</h2><p>' + p.tipo + '</p><p>' + p.idade + '</p><p>' + p.cidade + '</p><button>Quero Adotar</button></div>'
        })

        document.querySelector('#app').innerHTML = html
        document.querySelectorAll('button').forEach(function(b,i) {
  b.addEventListener('click', function() {
    alert('Voce quer adotar o ' + pets[i].nome + '! A ONG Amigo Fiel vai entrar em contato com voce!')  })
})
      })
  })