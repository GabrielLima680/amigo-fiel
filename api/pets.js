export default function handler(req, res) {
  const pets = [
    { id: 1, nome: 'Thor', tipo: 'Cachorro', idade: '2 anos', cidade: 'Paragominas' },
    { id: 2, nome: 'Mia', tipo: 'Gata', idade: '1 ano', cidade: 'Paragominas' },
    { id: 3, nome: 'Bolt', tipo: 'Cachorro', idade: '3 anos', cidade: 'Paragominas' }
  ];
  res.status(200).json(pets);
}