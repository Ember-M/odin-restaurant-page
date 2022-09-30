export default function MakeContactPage(){
    
        const contactContainer = document.createElement('div');
        contactContainer.setAttribute('id', 'contactContainer');
        const contactLocation = document.createElement('div');
        contactLocation.setAttribute('id','contactLocation');
        const contactInfo = document.createElement('div');
        contactInfo.setAttribute('id','contactInfo');
        contactContainer.append(contactLocation,contactInfo)
        function postContent(){
            document.getElementById('pageContent').appendChild(contactContainer);
}
    return{
        postContent
    }}
    