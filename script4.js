//Task1:Age Category Finder
let age = Number(prompt("Enter your age:"));
if (age >= 0 && age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20 && age <= 59) {
    console.log("You are an adult.");
} else if (age >= 60) {
    console.log("You are a senior citizen.");
}

//Task2:Salary Hike calculator
let salary = Number(prompt("Enter your current salary:"));
let oldSalary = salary;
if (salary < 20000) {
    salary = salary + (salary * 0.20);
}
else if ( salary >= 20000 && salary < 50000) {
    salary = salary + (salary * 0.10);
}
else {
    salary = salary + (salary * 0.05);
}
console.log("Your old salary was: " + oldSalary);
console.log("Your new salary is: " + salary);

//Task3:Electricity Department
let unitsConsumed = Number(prompt("Enter the number of units consumed:"));
let billAmount = 0;
if (unitsConsumed <= 100) {
    billAmount = unitsConsumed * 5;
}
else if (unitsConsumed > 100 && unitsConsumed <= 200) {
    billAmount = (100 * 5) + ((unitsConsumed - 100) * 7);
}
else {
    billAmount = (100 * 5) + (100 * 7) + ((unitsConsumed - 200) * 10);
}
console.log("Total Bill Amount: " + billAmount);

//Task4:Simple ATM
let accountBalance = 10000;
let withdrawalAmount = Number(prompt("Enter the amount to withdraw:"));
if (withdrawalAmount <=10000 && withdrawalAmount > 0) {
    accountBalance -= withdrawalAmount;
    console.log("Withdrawal successful. ");
    console.log("Remaining balance: " + accountBalance);
}
else if (withdrawalAmount > 10000) {
    console.log("Insufficient balance.");
}

//Task5:Login Validation
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
if (username === "Lakshmi" && password === "123#") {
    console.log("Login successful.");
}else if (username !== "Lakshmi") {
    console.log("Invalid username.");
}else {
    console.log("Invalid password.");
}

//Task6:Mobile Recharge Offer
let rechargeAmount = Number(prompt("Enter recharge amount:"));
let Offer = 0;
if (rechargeAmount >= 499) {
    rechargeAmount = ("Netflix Offer");
}
else if (rechargeAmount > 299){
    rechargeAmount = ("2GB Extra Data");
}
else if(rechargeAmount <= 299){
    rechargeAmount = ("No Offer");
}
console.log("Recharge Amount: " + rechargeAmount);

//Task7:Traffic Signal System
let signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
switch (signalColor) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal color");
}

//Task8:Employee Attendance
let workingDays = Number(prompt("Enter the number of working days in a month:"));
let presentDays = Number(prompt("Enter the number of days present in a month:"));
let attendancePercentage = (presentDays / workingDays) * 100;
if (attendancePercentage >= 75) {
    console.log("Eligible for promotion");
} else {
    console.log("Not eligible for promotion");
}

//Task9:Bus Ticket Booking
let ticketPrice = 500;
let numberOfTickets = Number(prompt("Enter the number of tickets:"));
let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;
console.log("Total Amount: " + totalAmount);
console.log("GST: " + gst);
console.log("Final Amount: " + finalAmount);

//Task10:Restaurant Bill
let foodCost = Number(prompt("Enter food cost:"));
let finalBill;
if (foodCost > 2000) {
    let discount = foodCost * 0.10;
    finalBill = foodCost - discount;
} else {
    finalBill = foodCost;
    console.log("No discount");
}
console.log("Final Bill: ₹" + finalBill);

//Task11:Police Recruitment
let candidateAge = Number(prompt("Enter your age:"));
let candidateHeight = Number(prompt("Enter your height in cm:"));
let candidateWeight = Number(prompt("Enter your weight in kg:"));
if (candidateAge >= 21 ) {
    console.log("Age criteria met");
}
else {
    console.log("Age criteria not met");
}
if (candidateHeight >= 160) {
    console.log("Height criteria met");
} else {
    console.log("Height criteria not met");
}
if (candidateWeight >= 55) {
    console.log("Weight criteria met");
} else {
    console.log("Weight criteria not met");
}
if (candidateAge >= 21 && candidateHeight >= 160 && candidateWeight >= 55) {
    console.log("You are eligible for police recruitment.");
}else {
    console.log("You are not eligible for police recruitment.");
    }
    
//Task12:Student Result
let marks = Number(prompt("Enter your marks:"));
let hindiMarks = Number(prompt("Enter your Hindi marks:"));
let mathsMarks = Number(prompt("Enter your Maths marks:"));
let scienceMarks = Number(prompt("Enter your Science marks:"));
let englishMarks = Number(prompt("Enter your English marks:"));
let socialMarks = Number(prompt("Enter your Social Studies marks:"));
let totalMarks = hindiMarks + mathsMarks + scienceMarks + englishMarks + socialMarks;
let percentage = (totalMarks / 500) * 100;
console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage + "%");
let grade = "";
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log("Grade: " + grade);

//Task13:Employee Shift Finder
let time = Number(prompt("Enter the time in 24-hour format (0-23):"));
let shift;
if (time >= 6 && time < 14) {
    shift = "Morning Shift";
}
else if (time >= 14 && time < 22) {
    shift = "Afternoon Shift";
}
else if (time >= 22 || time < 6) {
    shift = "Night Shift";
}
console.log("Shift: " + shift);

//Task14:Loan Eligibility
let userAge = Number(prompt("Enter your age:"));
let income = Number(prompt("Enter your monthly income:"));
let experience = Number(prompt("Enter your years of experience:"));
let loanEligibility;
if (userAge >= 21 && userAge <= 60 && income >= 25000 && experience >= 2) {
    loanEligibility = "Eligible for loan";
} else {
    loanEligibility = "Not eligible for loan";
}
console.log("Loan Eligibility: " + loanEligibility);

//Task15:Cab Fare Calculator
let distance = Number(prompt("Enter distance in kilometers:"));
let fare;
if (distance <= 5) {
    fare = distance * 20;
    console.log("Cab Fare: ₹" + fare);
} else {
    remainingDistance = distance - 5;
    fare = (5 * 20) + (remainingDistance * 15);
    console.log("Cab Fare: ₹" + fare);
}

//Task16:Multiplication Table Generator
let number = Number(prompt("Enter a number to generate its multiplication table:"));
console.log("Multiplication Table for " + number + ":");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
console.log("Multiplication Table generated successfully.");

//Task17:Password Checker
let passwordLength = prompt("Enter a password:");
if (passwordLength.length < 6) {
    console.log("Password is invalid. It should be at least 6 characters long.");
} else {
    console.log("Password is valid.");
}
if (passwordLength.length >= 6 && passwordLength.length <= 10) {
    console.log("Password strength: Medium");
}
if (passwordLength.length > 10) {
    console.log("Password strength: Strong");
}

//Task18:Company Bonus System
let workExperience = Number(prompt("Enter your years of experience:"));
let bonus = "";
if (workExperience >=0 && workExperience <= 2) {
    bonus = "5% of annual salary";
} else if (workExperience > 3 && workExperience <= 5) {
    bonus = "10% of annual salary";
} else if (workExperience > 6) {
    bonus = "20% of annual salary";
}
else {
    bonus = "No bonus";
}
console.log("Bonus: " + bonus);

//Task19:Countdown Timer
let countdown = Number(prompt("Enter the number of seconds for the countdown:"));
console.log("Countdown: " + countdown + " seconds");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Happy New Year!");
console.log("Countdown completed.");

//Task20:Interview Selection System
let candidateName = prompt("Enter candidate's name:");
let graduationCompleted = prompt("Have you completed your degree? (Yes/No)");
let conversation = prompt("Rate your conversation (Good/Average/Poor):");
let technicalScore = Number(prompt("Enter your technical score (0-100):"));
if (graduationCompleted === "Yes") {
    if (conversation === "Good") {
        if (technicalScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical Score is less than 70");
        }
    } else {
        console.log("Rejected: Conversation is not Good");
    }
} else {
    console.log("Rejected: Graduation is not Completed");
}