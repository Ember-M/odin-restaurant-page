import css from './style.css';
import Main from './mainpageload.js';
import Menu from './menupageload.js';
import Contact from './contactpageload.js';
const menuButton = document.querySelector('#menu');
const mainButton = document.querySelector('#main');
const contactButton = document.querySelector('#contact');
const pageContent = document.querySelector("#pageContent");
mainButton.addEventListener('click', ()=>{
    pageContent.innerHTML = "";
    Main().postContent()})

menuButton.addEventListener('click', () => {
    pageContent.innerHTML = ""
    Menu().postContent()});

contactButton.addEventListener('click', () => {
    pageContent.innerHTML = ""
    Contact().postContent()});

console.log("Hello!")
