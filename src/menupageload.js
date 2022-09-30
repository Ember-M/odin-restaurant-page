let menuArray = [];

function MakeMenuItem(name,description,price){
    return{
        name:name,
        description:description,
        price,
    }
}
menuArray.push(MakeMenuItem('Agedashi Tofu',"A plate of delicious fried tofu, garnished with a soy and ginger sauce.", "$5.50"));
menuArray.push(MakeMenuItem('Soba Noodles', "Cold noodles served with a rich and tangy vegan soba sauce.","$7.50"))
menuArray.push(MakeMenuItem('Ramen',"A warm and filling bowl of soy-miso broth with all the fixin's.","$10.00"))
menuArray.push(MakeMenuItem('Kimchi',"House-made vegan kimchi from fresh, local-grown Napa cabbage.","$4.50"))
menuArray.push(MakeMenuItem("Eggplant Izakaya","Skewers of charcoal-grilled Eggplant, marinated with a tart rice vinegar sauce.", "$5.50"))
menuArray.push(MakeMenuItem("Bibimbap","A filling rice and seasoned vegetable dish, served in a stone bowl, with a side of banchan.","$11.00"))



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
        let menuItemPrice = document.createElement('div');
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItemName.className = "menu-item-name"
        menuItemDescription.className = "menu-item-description";
        menuItemPrice.className = "menu-item-price";
        menuItemName.innerText = element.name;
        menuItemDescription.innerText = element.description;
        menuItemPrice.innerText = element.price;
        menuItem.append(menuItemName,menuItemDescription,menuItemPrice);
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