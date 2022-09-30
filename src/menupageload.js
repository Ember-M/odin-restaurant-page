let menuArray = [];

function MakeMenuItem(name,description){
    return{
        name:name,
        description:description,
    }
}
menuArray.push(MakeMenuItem('Agedashi Tofu',"A plate of delicious fried tofu, garnished with a soy and ginger sauce."));
menuArray.push(MakeMenuItem('Soba Noodles', "Cold noodles served with a rich and tangy vegan soba sauce."))
menuArray.push(MakeMenuItem('Ramen',"A warm and filling bowl of soy-miso broth with all the fixin's."))
menuArray.push(MakeMenuItem('Kimchi',"House-made vegan kimchi from fresh, local-grown Napa cabbage."))



export default function MakeMenuPage(){
    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', "menuContainer")
    let menuNameContainer = document.createElement('div');
    menuNameContainer.setAttribute('id', "menuNameContainer");
    let menuName = document.createElement('span');
    menuName.setAttribute('id','menuName');
    menuName.innerText = "Our Fresh Menu!"
    menuNameContainer.append(menuName)
    let menuItems = document.createElement('div');
    menuItems.setAttribute('id', 'menuItems');
    menuArray.forEach(element => {
        let menuItemName = document.createElement('div')
        let menuItemDescription = document.createElement('div');
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItemName.innerText = element.name;
        menuItemDescription.innerText = element.description;
        menuItem.append(menuItemName,menuItemDescription);
        menuItems.append(menuItem)
    })

    menuContainer.append(menuNameContainer, menuItems)

    function postContent(){
        document.getElementById('pageContent').appendChild(menuContainer);
    }
    return{
        postContent
    }
    }