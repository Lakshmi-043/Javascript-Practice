//Task1:Traffic Signal Management
let signalColor = prompt("Enter Signal Color:");
function report(color) {
    console.log("Signal Checked:", color);
}
function trafficControl(color, callback) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("STOP");
            break;
        case "yellow":
            console.log("GET READY");
            break;
        case "green":
            console.log("GO");
            break;
        default:
            console.log("INVALID SIGNAL");
    }
    callback(color);
}
trafficControl(signalColor, report);

//Task2:Employee Attendance Report
//Method1:
for (let employee = 1; employee <= 30; employee++) {
    console.log(`Employee ${employee} Present`);
}
//Method2:
for (let i = 1; i <= 30; i++) {
console.log("Employee " + i + " Present");
}

//Task3:ATM Cash Withdrawal
//Method1: 
let balance = 10000;
while (balance >= 500) {
    console.log("Balance After Withdrawal: ₹" + (balance - 500));
    balance -= 500;
}
//Metohd2:
let balance = 10000;
while (balance > 0) {
    balance = balance - 500;
    console.log("Remaining Balance: ₹" + balance);
}

//Task4:College Admission Eligibility
let age = Number(prompt("Enter the age:"));
let percentage = Number(prompt("Enter the percentage:"));
let entranceExamPassed = prompt("Enter entranceExamPassed(Yes/No)");
if (age >= 18) {
    if (percentage >= 70) {
        if (examPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Admission Rejected: Entrance Exam Not Passed");
        }
    } else {
console.log("Admission Rejected: Percentage Less Than 70");
    }
} else {
console.log("Admission Rejected: Age Less Than 18");
}

//Task5:Food Delivery Status
let customerName = prompt("Enter Customer Name:");
let foodItem = prompt("Enter Food Item:");
let deliveryAddress = prompt("Enter Delivery Address:");
function deliveryConfirmation(order) {
let { customerName, foodItem, deliveryAddress } = order;
console.log(customerName +", your order for" + foodItem + " will be delivered to " + deliveryAddress );
}
deliveryConfirmation({
    customerName,
    foodItem,
    deliveryAddress
});

//Task6:Salary Processing System
let basicSalary = Number(prompt("Enter Basic Salary:"));
function calculateSalary() {
    return basicSalary;
}
function calculateBonus(salary) {
    let bonus = salary * 0.20;
    return salary + bonus;
}
let finalSalary = calculateBonus(calculateSalary());
console.log("Final Salary: ₹" + finalSalary);

//Task7:E-commerce Discount Engine
let amount = Number(prompt("Enter Bill Amount:"));
function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + finalAmount);
}
function applyDiscount(amount, callback) {
let discountedAmount = amount - (amount * 0.10);
console.log("Discount Applied");
callback(discountedAmount);
}
applyDiscount(amount, generateInvoice);

//Task8:Promotional Offers
function* offerGenerator() {
    let offers = [
        "10% OFF",
        "20% OFF",
        "Free Delivery",
        "Buy 1 Get 1"
];
let firstOffer = offers[0];
let remainingOffers = [...offers.slice(1)];
yield firstOffer;
for (let offer of remainingOffers) {
    yield offer;
    }
}
let offers = offerGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//Task9:Student Database Merge
const scienceStudents = ["Anju", "Abhi", "Ajay"];
const commerceStudents = ["Megha", "Sai", "Lilly"];
function createDatabase(...students) {
    return students;
}
const studentDatabase = createDatabase(
    ...scienceStudents,
    ...commerceStudents
);
console.log(studentDatabase);

//Task10:Online Exam System
function calculateResult(studentName, ...marks) {      //Rest Operator
const total = marks.reduce((sum, mark) => sum + mark, 0);
const upperName = studentName.toUpperCase();
let grade;
switch (true) {
    case total >= 450:
        grade = "A+";
        break;
    case total >= 350:
        grade = "A";
        break;
    case total >= 250:
        grade = "B";
        break;
    default:
        grade = "C";
    }
function printReport(callback) {   
    callback();
}
function studentReport() {
console.log("Student:", upperName);
console.log("Total Marks:", total);
console.log("Grade:", grade);
}
printReport(studentReport);
}
calculateResult("Lakshmi", 90, 85, 88, 92, 95,65,75,43,35);

//Task11:Employee Profile
const employee = {
    name: "Klinkara",
    department: "IT",
    salary: 50000,
    experience: 2
};
const { name, department, salary, experience } = employee;  // Object Destructuring 
const upperName = name.toUpperCase();
let level;
switch (true) {
    case experience >= 5:
        level = "Senior";
        break;
    case experience >= 3:
        level = "Mid-Level";
        break;
    default:
        level = "Junior";
}
function displayEmployeeDetails(callback) {
    callback();
}
function showDetails() {
    console.log("Employee Name:", upperName);
    console.log("Department:", department);
    console.log("Salary:", salary);
    console.log("Experience:", experience + " years");
    console.log("Level:", level);
}
displayEmployeeDetails(showDetails);

//Task12:Product Inventory Filter
const products = [
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Book", price: 500, category: "Education" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Chair", price: 3000, category: "Furniture" },
    { name: "Headphones", price: 6000, category: "Electronics" }
];
const filteredProducts = products.filter(product => product.price > 5000);   // Filter Method 
for (let { name, price, category } of filteredProducts) {       // Destructuring + String Method
console.log("Product:",name.toUpperCase(),"| Price: ₹" + price,"| Category:" + category);
}

//Task13:Find First Premium Customer
const customers = [
    { name: "Navya", purchase: 52000, city: "Nellore" },
    { name: "Renu", purchase: 52000, city: "Guntur" },
    { name: "Mouni", purchase: 75000, city: "Hyderabad" },
    { name: "Anu", purchase: 18000, city: "Bangalore" }
];
const topCustomer = customers.find(({ purchase }) => purchase > 50000);   //find method
const showCustomer = (customer) => {                //arrow synatx
if (!customer) {
    console.log("No customer found above ₹50,000");
    return;
}
const { name, purchase, city } = customer;
console.log("First Premium Customer : ");
console.log(name.toUpperCase());
console.log("Purchase:", "₹" + purchase);
console.log("City:", city);
};
showCustomer(topCustomer);

//Task14:Company Expense Tracker
const expenses = [
    { type: "Salary", amount: 40000 },
    { type: "Rent", amount: 15000 },
    { type: "Transport", amount: 5000 },
    { type: "Electricity", amount: 3000 },
    { type: "Internet", amount: 2000 }
];
const totalExpense = expenses.reduce(function (accumulator, { amount }) {     //Reduce method
    return accumulator + amount;
}, 0);
const showExpenseSummary = () => {
console.log("Company Expense Tracker:");
console.log("Total Expense:", "₹" + totalExpense);
};
showExpenseSummary();

//Task15:Gaming Tournament Verification
const players = [
    { name: "Preethi", age: 20 },
    { name: "Keerthi", age: 22 },
    { name: "Sai", age: 19 },
    { name: "Sruthi", age: 19 }
];
const checkPlayers = (list) => {
    return list.every(player => player.age >= 18);
};
const result = checkPlayers(players);
console.log("All players above 18 years old:", result);

//Task16:Job Portal Search
const candidates = [
    { name: "Sai", skill: "Java" },
    { name: "Vani", skill: "React" },
    { name: "Suri", skill: "Python" },
    { name: "Yeshu", skill: "HTML" }
];
const hasReactSkill = candidates.some(({ skill }) => skill === "React");      //some function
function printResult(value) {
 switch (value) {
    case true:
     console.log("YES: REACT SKILL FOUND");
     break;
    default:
     console.log("NO: REACT SKILL NOT FOUND");
    }
}
printResult(hasReactSkill);

//Task17:Mobile Number Validator
const mobileNumber = "987654321";
const validateNumber = (num) => {
const lengthCheck = num.length === 10;
const startCheck = ["6", "7", "8", "9"].some(digit =>
    num.startsWith(digit)
);
return lengthCheck && startCheck;
};
const status = validateNumber(mobileNumber);
const showValidationResult = (result) => {
    if (result) {
        console.log("✔ MOBILE NUMBER IS VALID ");
    } else {
        console.log("✖ MOBILE NUMBER IS INVALID");
    }
};
const runValidationProcess = (callback) => callback(status);
runValidationProcess(showValidationResult);

//Task18:URL Slug Generator
const text = "Learn JavaScript Complete Course";
function convertToSlug(sentence) {
let words = sentence.split(" ");
let slugParts = [];
for (let i = 0; i < words.length; i++) {
slugParts[i] = words[i].toLowerCase().slice(0);
}
let slug = slugParts.join("-");
return slug;
}
console.log(convertToSlug(text));

//Task19:Employee Sorting Dashboard
const employees = [
    { name: "Navi", salary: 40000 },
    { name: "Dolly", salary: 75000 },
    { name: "Junnu ",salary: 50000 },
    { name: "Sunny", salary: 30000 }
];
function sortEmployees(list) {            //Sorting Logic
const highToLow = [...list].sort((a, b) => b.salary - a.salary);
const lowToHigh = [...list].sort((a, b) => a.salary - b.salary);
return { highToLow, lowToHigh };
}
const result = sortEmployees(employees);
console.log("HIGH → LOW:");
result.highToLow.forEach(({ name, salary }) =>
console.log(name + " : ₹" + salary)
);
console.log("\nLOW → HIGH:");
result.lowToHigh.forEach(({ name, salary }) =>
console.log(name + " : ₹" + salary)
);

//Task20:Movie Booking System
const movies = ["Peddi", "Blast", "Obsession", "Maa inti Bangaram"];
function createTickets(list) {                  //map method
return list.map((movie, index) => {
 const code = movie.slice(0, 3).toUpperCase();
 return {
  movie,
  bookingId: `${code}-${index + 1}`
};
});
}
const tickets = createTickets(movies);
tickets.forEach(ticket => {
    const { movie, bookingId } = ticket;
    console.log(`🎬 ${movie} | Ticket ID: ${bookingId}`);
});



