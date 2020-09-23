'use strict';

var busMAll = ['bag', 'banana','bathroom','boots','breakfast', 'bubblegum', 'chair', 'cthulhu',
  'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','shark','sweep', 'tauntaun',
  'unicorn', 'usb', 'water-can','wine-glass'];


//var body=document.getElementById("deck col-2");


var item=document.getElementById("items");

function viewResult()
{
  var cart=document.getElementById("cartContents");
var ul=document.createElement('ul');

//itemArray = JSON.parse(localStorage.getItem('Cart'));
var list;
for(var j=0;j<itemArray.length;j++)
{
 list=document.createElement("li");
  list.textContent= itemArray[j];
  ul.appendChild(list);

}
cart.appendChild(ul);

}




var option;

for(var i=0;i<busMAll.length;i++)
{
 option=document.createElement("option");
  option.textContent=busMAll[i];
  item.appendChild(option);

}


var itemArray=[];

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
   this.items = items;
   itemArray.push({items});
  localStorage.setItem('Cart',JSON.stringify(itemArray));
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items


    new  CartItem(product,quantity);
       /* var cartItem=new  CartItem(product,quantity);
          this.item.push(cartItem);*/
    
        //  itemArray.push(this.items);
          console.log("This is item array"+itemArray);

};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
      
  /*if(localStorage.getItem('allProducts')){
    Product.allProducts = JSON.parse(localStorage.getItem('allProducts'));
  } else{
    Product.allProducts = [];
  }*/

  if(localStorage.getItem('Cart')){
   itemArray = JSON.parse(localStorage.getItem('Cart'));
  } 


};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  cart.removeItem(item);

      

};

//var catItemArray=[];

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
  new Cart({product,quantity})
  //this.items.push(this);

  //localStorage.setItem('allProducts',JSON.stringify(Product.allProducts));

};



// Product contructor.
var Product = function(filePath, name) {

  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);

  localStorage.setItem('allProducts',JSON.stringify(Product.allProducts));

};


Product.allProducts = [];


function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}


console.log(this.items);
// Initialize the app by creating the big list of products with images and names
generateCatalog();



