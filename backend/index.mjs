
// backend/index.mjs
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')));

const products = [
  {
    title: 'Pulseira Bolinha',
    descript: 'Pulseira de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.',
    type: 'Pulseira',
  },
  {
    title: 'Anel Bolinha',
    descript: 'Anel de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Anel%20de%20Bolinha.',
    type: 'Anel',
  },
  {
    title: 'Colar Bolinha',
    descript: 'Colar de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Colar%20de%20Bolinha.',
    type: 'Colar',
  },
  {
    title: 'Brinco Bolinha',
    descript: 'Brinco de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Brinco%20de%20Bolinha.',
    type: 'Brinco',
  },
  {
    title: 'Pulseira Bolinha',
    descript: 'Pulseira de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.',
    type: 'Pulseira',
  },
  {
    title: 'Anel Bolinha',
    descript: 'Anel de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Anel%20de%20Bolinha.',
    type: 'Anel',
  },
  {
    title: 'Colar Bolinha',
    descript: 'Colar de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Colar%20de%20Bolinha.',
    type: 'Colar',
  },
  {
    title: 'Brinco Bolinha',
    descript: 'Brinco de Prata 925.',
    image: '/static/img/logopratacard.png',
    value: 55,
    imagem: '/static/img/pulseiraa.jpg',
    linkwhats: 'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20no%20Brinco%20de%20Bolinha.',
    type: 'Brinco',
  },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
