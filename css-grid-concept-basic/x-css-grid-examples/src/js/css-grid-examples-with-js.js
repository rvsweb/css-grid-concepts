/* 
 Created on : 29-oct-2019, 14:49:40
 Author     : Raul Vela
 */

const main = document.getElementsByTagName('main')[0];

/*
 * 
 */
document.getElementById('add-item').addEventListener('click', () => {
  const item = document.createElement('div');
  item.classList.add('item');
  main.appendChild(item);
});