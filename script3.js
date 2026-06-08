//Task1:Employee Salary calculator
let basicSalary = 25000;
let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;
let totalSalary = basicSalary + hra + bonus;
let tax = totalSalary * 0.05;
let finalSalary = totalSalary - tax;
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

//Task2:Student Grade System
let marks = Number(prompt("Enter your marks:"));
if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Grade: A");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade: B");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade: C");
}
else {
    console.log("Grade: Fail");
}

//Task3:Login authentication System
let username = prompt("Enter Username:");
let password = prompt("Enter Password:");
if (username === "SaiLakshmi") {
    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

//Task4:ATM Withdrawal Machine
let balance = 5000;
let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));
if (withdrawalAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance = balance - withdrawalAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance:", balance);
}

//Task5:E-Commerce Discount System
let purchaseAmount = Number(prompt("Enter Purchase Amount:"));
let discount = 0;
if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.20;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.10;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 0.05;
}
else {
    discount = 0;
}
let finalAmount = purchaseAmount - discount;
console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

//Task6:Traffic Fine Checker
let helmet = prompt("Do you have a helmet? (Yes/No)");
let license = prompt("Do you have a license? (Yes/No)");
if (helmet === "No" && license === "No") {
    console.log("Fine: ₹3000");
}
else if (helmet === "No") {
    console.log("Fine: ₹1000");
}
else if (license === "No") {
    console.log("Fine: ₹2000");
}
else {
    console.log("No Fine");
}

//Task7:Employee Attendance Tracker
let attendance = ["P", "A", "A", "P", "A", "P", "P"];
let presentDays = 0;
let absentDays = 0;
for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}
console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);

//Task8:Product Inventory Management
let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};
for (let key in product) {
    console.log(key + " : " + product[key]);
}

//Task9:Cab Fare Calculator
let distance = 12;
let fare = 0;
if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
}
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}
console.log("Distance :", distance, "KM");
console.log("Total Fare : ₹" + fare);

//Task10:MiniEmployee Management System
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];
console.log("All Employees:");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
let highestSalaryEmployee = employees[0];
let lowestSalaryEmployee = employees[0];
let employeeSalary = 0;
for (let i = 0; i < employees.length; i++) {
    employeeSalary += employees[i].salary;

    if (employees[i].salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employees[i];
    }

    if (employees[i].salary < lowestSalaryEmployee.salary) {
        lowestSalaryEmployee = employees[i];
    }
}
let totalEmployees = employees.length;
console.log("Highest Salary Employee:", highestSalaryEmployee);
console.log("Lowest Salary Employee:", lowestSalaryEmployee);
console.log("Total Employees:", totalEmployees);
console.log("Total Salary Expenditure:", employeeSalary);
