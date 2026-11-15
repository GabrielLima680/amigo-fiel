export default function handler(req, res) {
  const pets = [
    { id: 1, nome: 'Thor', tipo: 'Cachorro', idade: '2 anos', cidade: 'Paraguaçu Paulista' },
    { id: 2, nome: 'Mia', tipo: 'Gata', idade: '1 ano', cidade: 'Paraguaçu Paulista' },
    { id: 3, nome: 'Bolt', tipo: 'Cachorro', idade: '3 anos', cidade: 'Paraguaçu Paulista' }
  ];
  res.status(200).json(pets);
}