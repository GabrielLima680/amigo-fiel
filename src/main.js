const app = document.querySelector('#app')

app.innerHTML = `
  <div style="font-family: Arial; max-width: 900px; margin: 0 auto; padding: 20px; text-align: center;">
    <h1 style="color: #ff6b35;">🐾 Amigo Fiel 🐾</h1>
    <p style="color: #666; font-size: 18px;">Adote um amigo em Paraguaçu Paulista!</p>
    <div id="lista" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
      <p>Carregando pets...</p>
    </div>
  </div>
`

fetch('/api/pets')
  .then(r => r.json())
  .then(pets => {
    const lista = document.querySelector('#lista')
    lista.innerHTML = pets.map(pet => `
      <div style="background: white; border: 2px solid #ffe0d0; border-radius: 16px; padding: 20px; width: 220px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <div style="font-size: 60px;">${pet.tipo === 'Gata' ? '🐱' : '🐶'}</div>
        <h2 style="margin: 10px 0 5px;">${pet.nome}</h2>
        <p style="margin: 5px 0; color: #555;">${pet.tipo} • ${pet.idade}</p>
        <p style="margin: 5px 0; color: #888;">📍 ${pet.cidade}</p>
        <button style="background: #ff6b35; color: white; border: none; padding: 10px 20px; border-radius: 20px; margin-top: 10px; font-size: 16px; cursor: pointer;">Quero Adotar ❤️</button>
      </div>
    `).join('')
  })