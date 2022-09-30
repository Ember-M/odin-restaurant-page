export default function MakeContactPage(){
    
    let main = document.createElement('div');
    let paragraph = document.createElement('p');
    paragraph.innerText = "SOMETHING I GUESS!!"
    main.append(paragraph)
    function postContent(){
        document.getElementById('pageContent').appendChild(main);
    }
    return{
        postContent
    }
    }