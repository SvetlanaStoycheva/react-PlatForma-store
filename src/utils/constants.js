import React from 'react';
import { GiCherish, GiHexes, GiHouse } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'collection',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCherish />,
    title: 'customer care',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiHexes />,
    title: 'size guide',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiHouse />,
    title: 'shipping and returns',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const products_url =
  'https://sweta-serverless-functions.netlify.app/.netlify/functions/3-airtable';
// 'https://course-api.com/react-store-products';

export const single_product_url =
  'https://sweta-serverless-functions.netlify.app/.netlify/functions/3-product?id=';
// `https://course-api.com/react-store-single-product?id=`;
