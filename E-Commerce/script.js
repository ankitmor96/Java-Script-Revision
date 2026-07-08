const products = [
    {
        id: 1,
        name: "Apple iPhone 16 Pro",
        price: 119999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 2,
        name: "Samsung Galaxy S25 Ultra",
        price: 10099,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        price: 3999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 4,
        name: "Apple MacBook Air M3",
        price: 139999,
        image: "https://images.pexels.com/photos/19281840/pexels-photo-19281840.jpeg"
    },
    {
        id: 5,
        name: "Dell XPS 15 Laptop",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 6,
        name: "Apple Watch Series 10",
        price: 49999,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500"
    },
    {
        id: 7,
        name: "Nike Air Max Sneakers",
        price: 1800,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 8,
        name: "Adidas Running Shoes",
        price: 1600,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        id: 9,
        name: "Canon EOS R10 Camera",
        price: 9990,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 10,
        name: "Logitech MX Master 3S Mouse",
        price: 999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        id: 11,
        name: "Mechanical RGB Keyboard",
        price: 1299,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
    },
    {
        id: 12,
        name: "Gaming Monitor 27 Inch",
        price: 3499,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
    },
    {
        id: 13,
        name: "Bluetooth Portable Speaker",
        price: 899,
        image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=500"
    },
    {
        id: 14,
        name: "Leather Office Backpack",
        price: 799,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 15,
        name: "Premium Sunglasses",
        price: 1499,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 16,
        name: "Coffee Maker Machine",
        price: 1999,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500"
    },
    {
        id: 17,
        name: "Modern Office Chair",
        price: 2999,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    },
    {
        id: 18,
        name: "Smart LED TV 55 Inch",
        price: 79999,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
    }
];

function ShowProduct() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach((p) => {
        productList.innerHTML += `

         <div class="col-md-4 mt-4">
    <div class="card p-card shadow img-fluid rounded-3 ">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
    <p>⭐⭐⭐⭐⭐</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h2 class = " card-price card-text">₹${p.price}</h2>
  </div>
</div>
    </div>`
    });

    console.log("products", products);
    
}

ShowProduct();