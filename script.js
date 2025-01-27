// Sample products with updated images
const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, image: './images/smartphone.png' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 999, image: './images/laptop.png' },
    { id: 3, name: 'T-Shirt', category: 'clothing', price: 20, image: './images/tshirt.png' },
    { id: 4, name: 'Headphones', category: 'electronics', price: 199, image: './images/headphones.png' },
    { id: 5, name: 'Jacket', category: 'clothing', price: 120, image: './images/jacket.png' },
  ];
  
  // Render products
  function renderProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
      productGrid.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Filter products by category
  const categoryFilter = document.getElementById('categoryFilter');
  const categoryFilterMobile = document.getElementById('categoryFilterMobile');
  
  [categoryFilter, categoryFilterMobile].forEach(filter => {
    filter.addEventListener('change', (event) => {
      const selectedCategory = event.target.value;
      const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);
      renderProducts(filteredProducts);
    });
  });
  
  // Add to Cart functionality
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
  }
  
  // Initial rendering
  renderProducts(products);
  