export default function MakeMainPage(){

const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer');

const mainNameContainer = document.createElement('div');
mainNameContainer.setAttribute('id', 'mainNameContainer');
const mainNameText = document.createElement('span');
mainNameText.innerText = "Welcome to Vida Brillante!";
mainNameContainer.append(mainNameText)

const mainPictureContainer = document.createElement('div');
mainPictureContainer.setAttribute('id', 'mainPictureContainer');


const mainDescription = document.createElement('div');
mainDescription.setAttribute('id','mainDescription');
const mainDescriptionText = document.createElement('div');
mainDescription.innerHTML = "<p>"+ "Thank you for choosing Vida Brilliante, your local source for healthy and ethical food since 2015." + "</p>"+"<p>" + "All of our dishes are made fresh daily, with as many locally sourced ingredients as possible!" + "</p>" + "<p>" + "We pride ourselves on the quality of our food, and our service, and we're so excited for you to visit!"+"</p>"
// - mainDescription.append(mainDescriptionText)

mainContainer.append(mainNameContainer, mainPictureContainer, mainDescription)

function postContent(){
    document.getElementById('pageContent').appendChild(mainContainer);
}
return{
    postContent
}
}