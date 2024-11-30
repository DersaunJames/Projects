// Product array and objects
const products = [
  {
      name: "Cherry",
      price: Number(4.99.toFixed(2)),
      quantity: 0,
      productId: 1,
      image: "images/cherry.jpg"
  },
  {
      name: "Orange",
      price: Number(3.99.toFixed(2)),
      quantity: 0,
      productId: 2,
      image: "images/orange.jpg"
  },
  {
      name: "Strawberry",
      price: Number(5.99.toFixed(2)),
      quantity: 0,
      productId: 3,
      image: "images/strawberry.jpg"
  }
];

// Cart array
let cart = [];

function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  const cartItem = cart.find(item => item.productId === productId);
  
  if (cartItem) {
      increaseQuantity(productId);
  } else {
      product.quantity = 1;
      cart.push({ 
          ...product,
          price: Number(product.price.toFixed(2))
      });
  }
}

function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
      cartItem.quantity++;
  }
}

function decreaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
          removeProductFromCart(productId);
      }
  }
}

function removeProductFromCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (product) {
      product.quantity = 0;
  }
  cart = cart.filter(item => item.productId !== productId);
}

function cartTotal() {
  const sum = cart.reduce((total, item) => {
      const itemTotal = Number((item.price * item.quantity).toFixed(2));
      return Number((total + itemTotal).toFixed(2));
  }, 0);
  return sum;
}

function emptyCart() {
  products.forEach(product => product.quantity = 0);
  cart = [];
}

let totalPaid = 0;
function pay(amount) {
  totalPaid = Number((totalPaid + amount).toFixed(2));
  const total = cartTotal();
  return Number((totalPaid - total).toFixed(2));
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
};