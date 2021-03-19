import { v4 as uuidv4 } from 'uuid';
import img1 from '../img/img_1.jpeg';
import img2 from '../img/img_2.jpeg';
import img3 from '../img/img_3.jpeg';
import img4 from '../img/img_4.jpeg';
import img5 from '../img/img_5.jpeg';
import img6 from '../img/img_6.jpeg';

export const products = [
	{ id: uuidv4(), img: img1, name: 'Nike Runner 2000', price: 88 },
	{ id: uuidv4(), img: img2, name: "Puma 80's", price: 109 },
	{ id: uuidv4(), img: img3, name: 'Nike Rev Lite', price: 66 },
	{ id: uuidv4(), img: img4, name: 'Nike Air', price: 129 },
	{ id: uuidv4(), img: img5, name: 'Adidas Run Kit', price: 199 },
	{ id: uuidv4(), img: img6, name: 'Adidas Flyer', price: 59 },
];
