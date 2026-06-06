//Task1:Student Result Checker
let marks = 30;
let result = (marks >= 35) ? "Pass" : "Fail";
let grade = (marks >= 90) ? "Grade A" :
            (marks >= 75) ? "Grade B" :
            (marks >= 60) ? "Grade C" :
            "No Grade";
console.log("Marks:", marks);
console.log("Result:", result);
console.log("Grade:", grade);

//Task2:Employee Bonus Calculator
let salary = 25000;
let bonus = salary * 0.10;
let finalSalary = salary;
finalSalary += bonus;
console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);

//Task3:Login Validation
let email = "Lakshmi@gmail.com";
let password = "Lakshmi3#";
if (email === "Lakshmi@gmail.com" && password === "Lakshmi3") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

//Task4:Product Discount Calculator
let price = 2000;
let discount = (price > 1000) ? price * 0.20 : 0;
let finalAmount = price - discount;
console.log("Price :", price);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

//Task5:Array Product Management
let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

//Task6:Employee Object
let employee = {
    name: "SaiLakshmi",
    department: "Web Development",
    salary: 35000
};
console.log("Employee Details:", employee);
console.log("Employee Name:", employee.name);
console.log("Salary:", employee.salary);

//Task7:E-Commerce Cart Total
let shirt = 500;
let pant = 1000;
let shoe = 1500;
let totalBill = shirt + pant + shoe;
let savings = totalBill * 0.10;
let totalAmount = totalBill - savings;
console.log("Total Bill :", totalBill);
console.log("Savings :", savings);
console.log("Total Amount :", totalAmount);

//Task8:Age Eligibility Checker
let age = 16;
if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}

//Task9:Increment decrement Practice
let a = 10;
console.log("Initial value:", a);
a++;
console.log("After a++ :", a);
++a;
console.log("After ++a :", a);
a--;
console.log("After a-- :", a);
--a;
console.log("After --a :", a);

//Task10:Mini Employee Attendance
let isPresent = true;
let completedTask = false;
if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}

//Employee Management ConsoleApp
let staff = {
    id: "STK",
    name: "Lakshmi",
    department: "FrontEnd Development",
    salary: 30000,
    experience: 1
};
let reward = staff.salary * 0.10;
let totalSalary = staff.salary + reward;
let performanceStatus;
if (staff.experience >= 2) {
    performanceStatus = "Good";
} else {
    performanceStatus = "Average";
}
console.log("Staff ID :", staff.id);
console.log("Staff Name :", staff.name);
console.log("Department :", staff.department);
console.log("Salary :", staff.salary);
console.log("Experience :", staff.experience + " Years");
console.log("\nReward :", reward);
console.log("Total Salary :", totalSalary);
console.log("\nPerformance Status :", performanceStatus);
