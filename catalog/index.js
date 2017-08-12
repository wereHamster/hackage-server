import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

const pages = [
  {path: '/', title: 'Welcome', component: require('./WELCOME.md')},
  {path: '/theme', title: 'Theme', pages: [
    {path: '/theme/colors', title: 'Colors', component: require('./Theme/Colors.md')},
    {path: '/theme/typography', title: 'Typography', component: require('./Theme/Typography.md')},
  ]},
  {path: '/components', title: 'Components', pages: [
    {path: '/components/header', title: 'Header', component: require('./Components/Header.md')},
  ]},
];

ReactDOM.render(
  <Catalog title='Haddock' pages={pages} />,
  document.getElementById('catalog')
);
