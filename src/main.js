const app = document.querySelector('#app')

app.innerHTML = `
  <div style="font-family: Arial; margin: 0; background: #f2fbf4;">
    <div style="background: #2f9e44; color: white; padding: 40px 20px; text-align: center;">
      <h1 style="font-size: 42px; margin: 0;">🐾 Amigo Fiel 🐾</h1>
      <p style="font-size: 20px; margin: 10px 0 0;">Adote um amigo em Paraguaçu Paulista!</p>
      <p style="font-size: 16px; margin: 10px 0 0; opacity: 0.9;">Tem um Thor, uma Mia e um Bolt esperando um lar cheio de amor ❤️</p>
      <div style="background: white; color: #2f9e44; display: inline-block; padding: 8px 16px; border-radius: 20px; margin-top: 15px; font-weight: bold;">
        <span id="status">Status da API: carregando...</span> - <span id="datahora"></span>
      </div>
    </div>

    <div style="max-width: 900px; margin: 0 auto; padding: 20px; text-align: center;">
      <h2 style="color: #333;">🐶🐱 Pets para adoção</h2>
      <div id="lista" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
        <p>Carregando pets...</p>
      </div>

      <div style="background: white; border-radius: 16px; padding: 25px; margin-top: 40px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
        <h2 style="color: #2f9e44; margin-top: 0;">Como adotar? É fácil!</h2>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <div style="width: 220px;"><div style="font-size: 40px;">1️⃣</div><h3>Escolha</h3><p style="color:#666;">Clique em "Quero Adotar" no pet que você amou.</p></div>
          <div style="width: 220px;"><div style="font-size: 40px;">2️⃣</div><h3>Converse</h3><p style="color:#666;">A gente conversa com você sobre o pet e sua casa.</p></div>
          <div style="width: 220px;"><div style="font-size: 40px;">3️⃣</div><h3>Leve pra casa</h3><p style="color:#666;">Busque seu novo melhor amigo e seja feliz!</p></div>
        </div>
      </div>

      <div style="background: #d6f5df; border-radius: 16px; padding: 25px; margin-top: 20px;">
        <h2 style="margin-top:0;">Por que adotar? ❤️</h2>
        <p style="color: #555; font-size: 18px; line-height: 1.6;">Adotar é salvar uma vida e ganhar um amigo fiel para sempre.<br>Todos os pets são dóceis, saudáveis e prontos para amar você!</p>
      </div>
    </div>

    <div style="background: #1e5a33; color: white; text-align: center; padding: 20px; margin-top: 30px;">
      <p style="margin: 0;">🐾 Amigo Fiel - Paraguaçu Paulista</p>
      <p style="margin: 5px 0 0; opacity: 0.7; font-size: 14px;">Feito com ❤️ para ajudar os animais a encontrarem um lar</p>
    </div>
  </div>
`

document.querySelector('#datahora').textContent = new Date().toLocaleString('pt-BR')

fetch('/api/pets')
  .then(r => r.json())
  .then(pets => {
    document.querySelector('#status').textContent = 'Status da API: ok'
    const lista = document.querySelector('#lista')
    lista.innerHTML = pets.map(pet => `
      <div style="background: white; border: 2px solid #d6f5df; border-radius: 16px; padding: 20px; width: 220px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <div style="font-size: 60px;">${pet.tipo === 'Gata' ? '🐱' : '🐶'}</div>
        <h2 style="margin: 10px 0 5px;">${pet.nome}</h2>
        <p style="margin: 5px 0; color: #555;">${pet.tipo} • ${pet.idade}</p>
        <p style="margin: 5px 0; color: #888;">📍 ${pet.cidade}</p>
        <button onclick="alert('Você escolheu o ${pet.nome}! ❤️ Entre em contato para adotar!')" style="background: #2f9e44; color: white; border: none; padding: 10px 20px; border-radius: 20px; margin-top: 10px; font-size: 16px; cursor: pointer;">Quero Adotar ❤️</button>
      </div>
    `).join('')
  })