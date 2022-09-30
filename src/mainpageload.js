export default function MakeMainPage(){

const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer');
const mainName = document.createElement('div');
mainName.setAttribute('id', 'mainName');
const mainPictureContainer = document.createElement('div');
mainPictureContainer.setAttribute('id', 'mainPictureContainer');
const mainDescription = document.createElement('div');
mainDescription.setAttribute('id','mainDescription');
mainContainer.append(mainName, mainPictureContainer, mainDescription)

function postContent(){
    document.getElementById('pageContent').appendChild(mainContainer);
}
return{
    postContent
}
}