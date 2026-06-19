// //E-Commerce Dashboard using API
console.log("E-Commerce Dashboard");
let state = {
  products: [],
  cart: []
};
const DOM = {
  productContainer: document.getElementById("productContainer"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  cartCount: document.getElementById("cartCount"),
  status: document.getElementById("status"),
  total: document.getElementById("totalProducts"),
  avg: document.getElementById("avgPrice"),
  highest: document.getElementById("highestProduct"),
  lowest: document.getElementById("lowestProduct")

};
function loadProducts() {
  DOM.status.innerText = "Loading Products...";
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      state.products = data;
      renderProducts(data);
      updateStats(data);
      fillCategories(data);
      DOM.status.innerText = "Products Loaded Successfully";
    })
    .catch(err => {
      console.log(err);
      DOM.status.innerText = "Failed To Load Products";
    })
    .finally(() => {
      console.log("Fetch Completed");
    });
}
function renderProducts(list) {
  DOM.productContainer.innerHTML = "";
  list.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" />
    <h3>${product.title}</h3>
    <p>₹${product.price}</p>
    <p>${product.category}</p>
    <p>⭐ ${product.rating.rate}</p>
    <button onclick="addToCart(${product.id})">Add To Cart</button>
    <button onclick="removeFromCart(${product.id})">Remove</button>
  `;
  DOM.productContainer.appendChild(card);
});
}
function applyFilters() {
  const searchValue = DOM.searchInput.value.toLowerCase().trim();
  const categoryValue = DOM.categoryFilter.value;
function normalize(text) {
  return text.toLowerCase().replace(/['"]/g, "").trim();
}
  let filtered = state.products;
  if (categoryValue !== "all") {
    filtered = filtered.filter(product =>
    normalize(product.category) === normalize(categoryValue));
  }
  if (searchValue) {
   filtered = filtered.filter(product =>
   normalize(product.title).includes(normalize(searchValue)) ||
   normalize(product.category).includes(normalize(searchValue)));
}
renderProducts(filtered);
updateStats(filtered);
}
function fillCategories(data) {
  const categories = [...new Set(data.map(p => p.category))];
  DOM.categoryFilter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.innerText = "All Categories";
  DOM.categoryFilter.appendChild(allOption);
   categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.innerText = cat;
    DOM.categoryFilter.appendChild(option);
  });
}
function addToCart(id) {
    if (!state.products.length) return;
    const product = state.products.find(p => p.id === id);
    if (product) {
    state.cart.push(product);
    console.log("Added:", product.title);
    console.log("Cart:", state.cart);
    updateCart();
  }
}
function removeFromCart(id) {
  const index = state.cart.findIndex(p => p.id === id);
  if (index !== -1) {
    const removedItem = state.cart[index];
    state.cart.splice(index, 1);
    console.log("Removed:", removedItem.title);
    console.log("Cart:", state.cart);
    updateCart();
  }}
function updateCart() {
DOM.cartCount.innerText = `(${state.cart.length})`;
const totalPrice = state.cart.reduce((sum, item) => sum + item.price,0);
console.log("Total Price: ₹" + totalPrice.toFixed(2));
console.log("Items in Cart:", state.cart);
console.log("Number of Items:", state.cart.length);
console.log("Total Price: ₹" + totalPrice.toFixed(2));
  renderCartItems();
}
function renderCartItems() {
  const cartContainer = document.getElementById("cartItems");
if (!cartContainer) return;
cartContainer.innerHTML = "";
if (state.cart.length === 0) {
    cartContainer.innerHTML = "<p>No items in cart</p>";
    return;
  }
  state.cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p>${item.title}</p>
      <p>₹${item.price}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(div);
});
}
function updateStats(list) {
  if (!list.length) return;
  const total = list.length;
  const avg = list.reduce((sum, p) => sum + p.price, 0) / total;
  const highest = list.reduce((max, p) =>p.price > max.price ? p : max);
  const lowest = list.reduce((min, p) =>p.price < min.price ? p : min);
  DOM.total.innerText = `Total Products : ${total}`;
  DOM.avg.innerText = `Average Price : ₹${avg.toFixed(2)}`;
  DOM.highest.innerText = `Highest : ${highest.title}`;
  DOM.lowest.innerText = `Lowest : ${lowest.title}`;
}
DOM.searchInput.addEventListener("input", applyFilters);
DOM.categoryFilter.addEventListener("change", applyFilters);
loadProducts();
function toggleCart() {
  const panel = document.getElementById("cartPanel");
  panel.classList.toggle("hidden");
}
