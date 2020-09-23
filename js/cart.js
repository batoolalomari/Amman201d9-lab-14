/* global Cart */
'use strict';
var section=document.getElementsByClassName("deck col-1");

var busMAll = ['bag', 'banana','bathroom','boots','breakfast', 'bubblegum', 'chair', 'cthulhu',
  'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','shark','sweep', 'tauntaun',
  'unicorn', 'usb', 'water-can','wine-glass'];


//var body=document.getElementById("deck col-2");

option =document.createElement("option");

for(var i=0;i<busMAll.length;i++)
{
 option=document.createElement("option");
  option.textContent=busMAll[i];
 

}

section.appendChild(option);

/*var form=document.createElement("form");
//form.setAttribute(id="form");

var label = document.createElement("label");
var input  = document.createElement("input");
label.setAttribute("Name", "text");
input.setAttribute("State", "text");

form.appenChild(label);
form.appendChild(input);
//form.appendChild(x);


section.appenChild(form);*/








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
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
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
