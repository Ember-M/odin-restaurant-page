export default function MakeMenuPage(){
    let main = document.createElement('div');
    let paragraph = document.createElement('p');
    paragraph.innerText = "SOMETHING ELSE!!"
    main.append(paragraph)
    function postContent(){
        document.getElementById('pageContent').appendChild(main);
    }
    return{
        postContent
    }
    }