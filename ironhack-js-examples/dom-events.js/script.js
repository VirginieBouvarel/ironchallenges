const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Ajouter un évènement clic au bouton
let counter = 5;
$('#add-item-button').onclick = () => {
    counter++;
    const li = document.createElement('li');
    li.textContent = `Item number ${counter}`;
    $('#items-list').appendChild(li);
}

//Récupérer la valeur d'un input au clic sur le bouton
let sendBtn = $('#send-btn');
sendBtn.onclick = function(){
  let input = $$('input')[0]; 
  console.log(input.value);
}

//Sur quel élément suis-je?
let liTags = $$('li');
for(let i=0; i < liTags.length; i++){
  liTags[i].onclick = e => console.log(e.currentTarget.innerHTML);
}

//Suppression au clic sur l'élément
//pour chaque li enfant du noeud ".list"
const list = $('.list');
list.childNodes.forEach(li => {
    li.onclick = () =>{
        li.remove();
    }
})
