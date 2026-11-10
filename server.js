import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

const pets = [
  { id: 1, nome: 'Thor', tipo: 'Cachorro', idade: '2 anos', cidade: 'Paraguacu Paulista' },
  { id: 2, nome: 'Mia', tipo: 'Gata', idade: '1 ano', cidade: 'Paraguacu Paulista' },
  { id: 3, nome: 'Bolt', tipo: 'Cachorro', idade: '3 anos', cidade: 'Paraguacu Paulista' }
];

app.get('/api/health', function(req, res) {
  res.json({ status: 'ok', service: 'amigo-fiel-api' });
});

app.get('/api/pets', function(req, res) {
  res.json(pets);
});

app.listen(3001, function() {
  console.log('API rodando na porta 3001');
});
