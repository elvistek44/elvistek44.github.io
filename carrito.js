// Datos de los productos
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 25.00 },
    { id: 2, nombre: 'Producto 2', precio: 50.00 },
    { id: 3, nombre: 'Producto 3', precio: 70.00 },
  ];
  
  // Elementos del DOM
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  // Carrito de compras
  let carrito = [];
  
  // Función para agregar productos al carrito
  function addToCart(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
      carrito.push(producto);
      updateCart();
    }
  }
  
  // Función para actualizar el carrito
  function updateCart() {
    // Limpiar la lista del carrito
    cartItemsList.innerHTML = '';
  
    // Agregar cada producto al carrito
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
      cartItemsList.appendChild(li);
    });
  
    // Calcular el total
    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    totalPriceElem.textContent = total.toFixed(2);
  }
  
  // Función para manejar el checkout
  function handleCheckout() {
    if (carrito.length > 0) {
      alert('Gracias por tu compra, vuelve pronto!');
      carrito = [];
      updateCart();
    } else {
      alert('Tu carrito está vacío.');
    }
  }
  
  // Eventos de los botones de añadir al carrito
  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productoId = parseInt(button.parentElement.getAttribute('data-id'));
      addToCart(productoId);
    });
  });
  
  // Evento de realizar la compra
  checkoutBtn.addEventListener('click', handleCheckout);