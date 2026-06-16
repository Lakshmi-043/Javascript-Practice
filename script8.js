//Task1:Employee Salary Management
const employees = [
    { id: 1, name: "Manu", salary: 26000 },
    { id: 2, name: "Shiva", salary: 52000 },
    { id: 3, name: "Lalli", salary: 75000 }
];
function salaryFilter(list) {
return list.filter(({ salary }) => salary > 40000);
}
function seniorFinder(list) {
return list.find(({ salary }) => salary > 60000);
}
function expenseTracker(list) {
return list.reduce((total, { salary }) => total + salary,0);
}
function nameValues(list) {
return list.map(({ name }) => name);
}
console.log(salaryFilter(employees));
console.log(seniorFinder(employees));
console.log(expenseTracker(employees));
console.log(nameValues(employees));


//Task2:College Admission Form
const candidate = [
    {
    name: prompt("Enter Name"),
    age: Number(prompt("Enter Age")),
    percentage: Number(prompt("Enter Percentage"))
    }
];
function checkAdmission(candidate) {
let admissionResult;
if (candidate.age >= 18) {
if (candidate.percentage >= 60) {
    admissionResult = "Admission Approved";
} else {
    admissionResult = "Admission Rejected - Low Percentage";
}
} else {
    admissionResult = "Admission Rejected - Age Not Eligible";
    }
return {
    studentName: candidate.name,
    status: admissionResult
};
}
const report = candidate.map(candidate => checkAdmission(candidate));
console.log(report);


//Task3:E-Commerce Cart
const cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];
const retailDashboard = {
featuredProducts: cart.map(({ product }) => product),
highestValueAsset: cart.reduce((max, item) => item.price > max.price ? item : max),
grossCollection: cart.reduce((sum, { price, qty }) => sum + (price * qty),0)
};
console.log(retailDashboard);


//Task4:Traffic Fine System
const signal = prompt("Enter Signal");
let controlDesk = {
    status: "",
    penalty: 0
};
switch (signal.toLowerCase()) {
case "red":
    controlDesk.status = "Stop Immediately";
    controlDesk.penalty = 1000;
    break;
case "yellow":
    controlDesk.status = "Slow Down";
    controlDesk.penalty = 500;
    break;
case "green":
    controlDesk.status = "Continue Driving";
    controlDesk.penalty = 0;
    break;
default:
        controlDesk.status = "Invalid Entry";
}
console.log(controlDesk);


//Task5:Student Result Processing
const students = [
    { name: "Ajay", mark: 95 },
    { name: "Buntu", mark: 45 },
    { name: "Chinni", mark: 60 },
    { name: "Dolly", mark: 30 }
];
const evaluationHub = {
achieverPool: students.filter(({ mark }) => mark >= 70),
performanceTags: students.map(({ name, mark }) => ({
candidate: name,
category: mark >= 70 ? "PASS" : "FAIL"
})),
recoveryPool: students.filter(({ mark }) => mark < 70)
};
console.log(evaluationHub);


//Task6:Online Food Delivery
function placeOrder(customerName, ...foodItems) {
return {
    customer: customerName,
    totalDishes: foodItems.length,
    menuItems: foodItems.map(item => item.toUpperCase())
};
}
console.log(
placeOrder(
    "Sai",
    "Pizza",
    "Burger",
    "Biryani",
    "Juice"
));


//Task7:Bank Account System
let treasury = 25000;
function cashIn(amount) {
treasury += amount;
 return {
transaction: "Credit",
updatedBalance: treasury
};}
function cashOut(amount) {
treasury -= amount;
 return {
transaction: "Debit",
updatedBalance: treasury
};}
function accountReview() {
 return {
currentBalance: treasury
};}
console.log(cashIn(5000));
console.log(cashOut(2000));
console.log(accountReview());


//Task8:Movie Ticket Booking 
const occupiedSeats = ["B1", "B3", "C2", "D4"];
let requestedSeat = "A2";
let seatStatus = "Available";
for (let index = 0; index < occupiedSeats.length; index++) {
if (occupiedSeats[index] === requestedSeat) {
  seatStatus = "Unavailable";
}}
console.log("Seat Status:", seatStatus);
console.log("Occupied Seats:");
for (let index = 0; index < occupiedSeats.length; index++) {
console.log(occupiedSeats[index]);
}


//Task9:User Login Validation
function checkUser(email, password, username) {
console.log("VALIDATION START");
if (email.indexOf("@") !== -1) {
  console.log("Email format OK");
} else {
  console.log("Email must contain '@'");
}
let cleanPassword = password.trim();
if (cleanPassword.length >= 8) {
  console.log("Password length OK");
} else {
  console.log("Password must be at least 8 characters");
}
let maskedPassword = cleanPassword.replace(/./g, "*");
  console.log("Masked Password:", maskedPassword);
let cleanUsername = username.trim();
if (cleanUsername.includes(" ") || cleanUsername.startsWith(" ")) {
        console.log("Username should not contain spaces");
} else {
  console.log("Username OK");
}
  console.log("VALIDATION END");
}
checkUser("Lakshmi@gmail.com", "  p123456#4  ", "Sai Lakshmi");


//Task10:Product API Dashboard
const API_URL = "https://fakestoreapi.com/products";
async function loadProductDashboard() {
console.log(" 🛒 PRODUCT DASHBOARD LOADING  ");
console.log("...............................\n")
try {
    const response = await fetch(API_URL);
    const products = await response.json();
const titles = products.map(product => product.title);
console.log("📌 PRODUCT TITLES:");
titles.forEach((title, index) => {
console.log(`${index + 1}. ${title}`);
});
const expensiveProducts = products.filter(product => product.price > 500);
console.log("\n💰 HIGH VALUE PRODUCTS (Above ₹500):");
expensiveProducts.forEach(product => {
console.log(`- ${product.title} | ₹${product.price}`);
});
const summary = {
   totalProducts: products.length,
   expensiveCount: expensiveProducts.length,
   normalCount: products.length - expensiveProducts.length
};
console.log("\n📊 SUMMARY REPORT:");
console.log(`Total Products   : ${summary.totalProducts}`);
console.log(`Expensive Items  : ${summary.expensiveCount}`);
console.log(`Normal Items     : ${summary.normalCount}`);
console.log("\n..........................")
console.log("  ✅ DATA LOADED SUCCESSFULLY    ");
} 
catch (error) {
   console.log("❌ ERROR WHILE FETCHING DATA:", error.message);
}
}
loadProductDashboard();


//Task11:Birth Day Finder
function analyzeDOB() {
console.log("..DOB ANALYZER SYSTEM..\n");
const input = prompt("Enter your DOB (YYYY-MM-DD):");
const dob = new Date(input);
if (!input || dob.toString() === "Invalid Date") {
    console.log("❌ Invalid DOB");
    return;
}
const dobInfo = {
   day: dob.getDate(),
   month: dob.getMonth() + 1,
   year: dob.getFullYear(),
   weekday: dob.toLocaleDateString('en-US', { weekday: 'long' })
};
for (let key in dobInfo) {
console.log(`${key.toUpperCase()} : ${dobInfo[key]}`);
}
console.log("\n..END OF REPORT..");
}
analyzeDOB();


//Task12:Netflix Subscription System
function showPlanBenefits() {
console.log("=== SUBSCRIPTION SERVICE ===");
const plan = prompt("Enter plan (Mobile / Basic / Standard / Premium):");
const selectedPlan =
plan === "Mobile" ? {
    name: "Mobile Plan",
    icon: "📱",
    benefit: "Mobile-only streaming access",
    quality: "SD Quality",
    devices: 1
}
: plan === "Basic" ? {
    name: "Basic Plan",
    icon: "🟢",
    benefit: "Watch on single device",
    quality: "HD Quality",
    devices: 1
}
: plan === "Standard" ? {
    name: "Standard Plan",
    icon: "🔵",
    benefit: "Watch on multiple devices",
    quality: "Full HD Quality",
    devices: 2
        }
: plan === "Premium" ? {
    name: "Premium Plan",
    icon: "🟣",
    benefit: "All features + downloads",
    quality: "Ultra HD Quality",
    devices: 4
}
: null;
if (!selectedPlan) {
 console.log("❌ Invalid plan selected. Please choose a valid subscription.");
   return;
}
console.log("\n PLAN DETAILS:");
console.log(`${selectedPlan.icon} ${selectedPlan.name}`);
console.log("Benefit :", selectedPlan.benefit);
console.log("Quality :", selectedPlan.quality);
console.log("Devices :", selectedPlan.devices);
console.log("\n..END OF SERVICE..");
}
showPlanBenefits();


//Task13:Hospital Patient Management
const patients = [
    { id: 101, name: "Kavi", age: 45, condition: "stable" },
    { id: 102, name: "Ajay", age: 60, condition: "critical" },
    { id: 103, name: "Janu", age: 30, condition: "stable" },
    { id: 104, name: "Meera", age: 55, condition: "critical" },
    { id: 105, name: "Navya", age: 40, condition: "recovering" }
];
function getCriticalPatients(list) {
    return list.filter(p => p.condition === "critical");
}
function getPatientById(list, id) {
    return list.find(p => p.id === id);
}
function getTotalPatients(list) {
    return list.length;
}
function showHospitalReport() {
console.log("..HOSPITAL DASHBOARD SYSTEM..");
const critical = getCriticalPatients(patients);
console.log("\n🚨 CRITICAL PATIENTS:");
critical.forEach(p => {
console.log(`${p.id} - ${p.name} (${p.age})`);
});
const searchId = 100;
const patient = getPatientById(patients, searchId);
console.log("\nPATIENT SEARCH RESULT:");
if (patient) {
console.log(`${patient.id} - ${patient.name} - ${patient.condition}`);
} else {
console.log("Patient not found");
}
console.log("\nTOTAL PATIENTS:", getTotalPatients(patients));
console.log("\n..END OF DASHBOARD..");
}
showHospitalReport();


//Task14:Inventory Management System
const warehouseOne = [
    { id: 80, name: "Laptop", price: 55000 },
    { id: 90, name: "Mouse", price: 800 }
];
const warehouseTwo = [
    { id: 100, name: "Keyboard", price: 1500 },
    { id: 200, name: "Monitor", price: 12000 }
];
const fullStock = [...warehouseOne, ...warehouseTwo];
const updatedStock = [                //spread operator updating details
    ...fullStock,
    { id: 300, name: "Headphones", price: 2500 },
    { id: 400, name: "Webcam", price: 3200 }
];
function searchProductById(stockList, productId) {
return stockList.find(item => item.id === productId);
}
function displayProductDetails(product) {
if (!product) {
 console.log("❌ Product not found");
    return;
}
const { id, name, price } = product; // destructuring extract the product details
console.log("\nPRODUCT DETAILS:");
console.log(`ID    : ${id}`);
console.log(`Name  : ${name}`);
console.log(`Price : ₹${price}`);
}
function runInventorySystem() {
console.log("--INVENTORY MANAGEMENT SYSTEM--");
const searchId = 300;
const result = searchProductById(updatedStock, searchId);
displayProductDetails(result);
console.log("\nTOTAL PRODUCTS:", updatedStock.length);
}
runInventorySystem();


//Task15:WhatsApp Group Management
function displayFinalGroup(list) {
    console.log("\n--FINAL GROUP LIST--");
    console.log(list);
}
function addNewMembers(list) {      //push
    list.push("Jay");
    list.push("Akshi");
    console.log("\n Added Members using push():");
    console.log(list);
}
function removeLastMember(list) {   //Pop
    const removed = list.pop();
    console.log("\n Removed Last Member using pop():", removed);
}
function removeFirstMember(list) {   //Shift
    const removed = list.shift();
    console.log("\n Removed First Member using shift():", removed);
}
function addMemberAtStart(list) {    //Unshift
    list.unshift("Billu");
    console.log("\nAdded Member at Start using unshift():");
    console.log(list);
}
function insertMemberAtPosition(list) {      //Splice
    list.splice(2, 0, "Dolly");
    console.log("\nInserted Member using splice():");
    console.log(list);
}
function startGroupSystem() {
console.log("..GROUP MANAGEMENT ..");
let groupMembers = ["Kavi", "Navya", "Komal"];
console.log("\n--Initial Group--");
console.log(groupMembers);
addNewMembers(groupMembers);        
addMemberAtStart(groupMembers);     
removeLastMember(groupMembers);     
removeFirstMember(groupMembers);    
insertMemberAtPosition(groupMembers); 
displayFinalGroup(groupMembers);
console.log("\nSYSTEM END");
}
startGroupSystem();