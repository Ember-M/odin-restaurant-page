export default function MakeContactPage() {
  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('id', 'contactContainer');
  const contactLocation = document.createElement('div');
  contactLocation.setAttribute('id', 'contactLocation');
  const contactInfo = document.createElement('div');
  contactInfo.setAttribute('id', 'contactInfo');
  contactInfo.innerHTML = '<p> Come visit us in beautiful Downtown Portland today! </p><p> Address: 5670 E Vida St, Portland OR </p><p> Tel: 555-555-1234 </p><p> Hours of Operation: Mon - Sat 10AM to 8PM. Sun 12AM to 7PM. </p>';
  const contactTitle = document.createElement('div');
  contactTitle.setAttribute('id', 'contactTitle');
  contactTitle.innerText = 'Contact Us!';
  contactContainer.append(contactTitle, contactLocation, contactInfo);
  function postContent() {
    document.getElementById('pageContent').appendChild(contactContainer);
  }
  return {
    postContent,
  };
}
