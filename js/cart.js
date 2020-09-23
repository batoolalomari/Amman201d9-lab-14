/* global Cart */
'use strict';



   // var address = document.getElementsByClassName("deck col-1");

   
   

function buildForm(){


    var address = document.getElementById('form');
    
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';

    address.appendChild(nameLabel);
    var name = document.createElement('input');
    address.appendChild(name);


    var br = document.createElement('br');
    address.appendChild(br);



    var streetLabel = document.createElement('label');
    streetLabel.textContent = 'Street';
    address.appendChild(streetLabel);
    

    var streetInput = document.createElement('input');
    address.appendChild(streetInput);

    br = document.createElement('br');
    address.appendChild(br);


    var cityLabel = document.createElement('label');
    cityLabel.textContent = 'City';
    address.appendChild(cityLabel);
    

    var cityInput = document.createElement('input');
    address.appendChild(cityInput);

    br = document.createElement('br');
    address.appendChild(br);


    var stateLabel = document.createElement('label');
    stateLabel.textContent = 'State';
    address.appendChild(stateLabel);

    var stateInput = document.createElement('input');
    address.appendChild(stateInput);

    br = document.createElement('br');
    address.appendChild(br);


    var zipLabel = document.createElement('label');
    zipLabel.textContent = 'Zip Code';
    address.appendChild(zipLabel);

    var zipInput = document.createElement('input');
    address.appendChild(zipInput);

    br = document.createElement('br');
    address.appendChild(br);

    
    var phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone Number';
    address.appendChild(phoneLabel);

    var phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'number');
    address.appendChild(phoneInput);

    br = document.createElement('br');
    address.appendChild(br);

    // 
    var submitBtn = document.createElement('input');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    address.appendChild(submitBtn);

}

buildForm();







// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
let tbodyElm;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart'));
  cart = new Cart(cartItems);
}









// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
tbodyElm=table.getElementsByTagName('tbody');
tbodyElm.innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  tbodyElm = table.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for(var i=0; i<cart.items.length;i++)
  { 
    var product=cart.items[i].product;
    var quantity=cart.items[i].quantity;
    new CartItem (product,quantity);
  
  }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
