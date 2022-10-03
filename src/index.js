// eslint-disable-next-line no-unused-vars
import css from './style.css';
import Main from './mainpageload';
import Menu from './menupageload';
import Contact from './contactpageload';

const menuButton = document.querySelector('#menu');
const mainButton = document.querySelector('#main');
const contactButton = document.querySelector('#contact');
const pageContent = document.querySelector('#pageContent');
Main().postContent();

mainButton.addEventListener('click', () => {
  pageContent.innerHTML = '';
  Main().postContent();
});

menuButton.addEventListener('click', () => {
  pageContent.innerHTML = '';
  Menu().postContent();
});

contactButton.addEventListener('click', () => {
  pageContent.innerHTML = '';
  Contact().postContent();
});
