import './main.scss';
import url from './assets/killer.png';


const img = document.createElement('img');
img.src = url;
document.body.appendChild(img);

console.log('webpack lv3');

import User from './user.ts';

const user = new User('Tom');

user.sayHi();