'use strict'

const collections = document.querySelectorAll('.book');
const elemsli =[];
const elemsul= document.querySelectorAll('ul');

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const h2 = collections[4].querySelector('h2');
h2.innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"
target="_blank">Книга 3. this и Прототипы Объектов</a>`;


const adv = document.querySelector('.adv');
adv.remove();

for(let i = 0; i<collections.length;i++){
    elemsli[i] = collections[i].querySelectorAll('li');
}


collections[0].before(collections[1]);
collections[5].after(collections[2]);
collections[4].after(collections[3]);

//книгв 2
elemsli[0][3].after(elemsli[0][6]);
elemsli[0][6].after(elemsli[0][8]);
elemsli[0][10].before(elemsli[0][2]);

//книгв 6
const newelemsli = elemsli[2][2].cloneNode();
newelemsli.textContent = 'Глава 8: За пределами ES6';
elemsul[2].append(newelemsli);
elemsli[2][9].before(newelemsli);

//книга 5
elemsli[5][1].after(elemsli[5][9]);
elemsli[5][9].after(elemsli[5][3]); 
elemsli[5][3].after(elemsli[5][4]);
elemsli[5][8].before(elemsli[5][5]);
