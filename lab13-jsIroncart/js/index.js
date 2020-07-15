// ITERATION 1: Calculer le sous-total

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;//On récupère le prix
  const quantity = product.querySelector('.quantity input').value;//On récupère la quantité
  const result = parseInt(price) * parseInt(quantity);//On fait le calcul
  const subTotal = product.querySelector('.subtotal span');//On récupère la case sous-Total
  subTotal.innerHTML = result;//On met result dans la case sous-total
  return result;//on retourne result pour le réutiliser ailleurs
}

function calculateAll() {
  // ITERATION 2 : Calculer le sous-total de chaque produit
  const products = document.querySelectorAll('.product');//On récupère tous les produits
  let total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);//On calcule le sous-total de chaque produit et on l'ajoute au total
  });
  
  // ITERATION 3: Calculer le prix total
  const totalPrice = document.querySelector('#total-value span');//On récupère la case total
  totalPrice.innerHTML = total;//On lui assigne la valeur de total
}

// ITERATION 4 : Supprimer un produit au clic sur le bouton remove

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();//On accède au noeud "product" parent de CE bouton: tr.product>td.action>button.btn-remove
}

// ITERATION 5: Ajouter un nouveau produit

function createProduct() {
  console.log('A new product has been created!');
  //On récupère les données saisies
  const productToCreate = document.querySelector('.create-product');
  let name = productToCreate.querySelector('.name');
  let unitPrice = productToCreate.querySelector('.unit-price');
  //On crée un noeud html contenant les infos du nouveau produit
  const tr = document.createElement('tr');
  tr.className = "product";
  tr.innerHTML = `
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${unitPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  //On ajoute le noeud dans le DOM (à la fin de tbody)
  const cart = document.querySelector('#cart tbody');
  cart.append(tr);
  //Ajout d'un écouteur d'évènement sur le nouveau bouton
  tr.querySelector('.btn-remove').addEventListener("click", removeProduct);

  //On vide le formulaire de création de produit
  name.value = "";
  unitPrice.value = 0;
 
}

//Ecouteurs d'évènements
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener("click", removeProduct);
  })

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener("click", createProduct);
});
