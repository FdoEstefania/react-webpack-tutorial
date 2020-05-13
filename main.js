import React from 'react';
import ReactDOM from 'react-dom';

import DemoComponent from './src/components/demo.component.jsx';

const edad = 40;
var nombre = 'Fdo Lab';
var product = {
    id: '01',
    name: "producto 01",
    photo: "./assets/images/20409451.jpg",
    price: 1500,
    quantity:1
}
var products = [
    {
        id: 'p01',
        name: 'name 1',
        price: 2,
        quantity: 3,
        photo: './assets/images/thumb1.gif'
    },
    {
        id: 'p02',
        name: 'name 2',
        price: 7,
        quantity: 3,
        photo: './assets/images/thumb2.gif'
    },
    {
        id: 'p03',
        name: 'name 3',
        price: 9,
        quantity: 6,
        photo: './assets/images/thumb3.gif'
    }
];
ReactDOM.render(
    < DemoComponent edad={edad} nombre={nombre} product={product} products={products} />, 
    document.getElementById('app')
);
/**
 * ejucutar aplicacion : npm run start
 * 
 * 
 */