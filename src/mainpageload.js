export default function MakeMainPage(){

let main = document.createElement('div');
let paragraph = document.createElement('p');
paragraph.innerText = "SOMETHING NEW!!"
main.append(paragraph)
function postContent(){
    document.getElementById('pageContent').appendChild(main);
}
return{
    postContent
}
}