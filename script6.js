//Task1:Employee Bonus Calculator
const employees = [
    { name: "Prabha", salary: 30000, experience: 6 },
    { name: "Aditya", salary: 25000, experience: 3 },
    { name: "Bujji", salary: 20000, experience: 1 }
];
// Function + Rest Parameter
function calculateBonus(...employeeData) {
    let updatedEmployees = [];
    for (let employee of employeeData) {
        const { name, salary, experience } = employee;   //Destructuring
        let bonus = 0;
        if (experience >= 5) {
            bonus = salary * 20 / 100;
        } else if (experience >= 2) {
            bonus = salary * 10 / 100;
        } else {
            bonus = salary * 5 / 100;
        }
        const finalSalary = salary + bonus;
        updatedEmployees.push({     //Spread Operator
            ...employee,
            bonus,
            finalSalary
        });
    }
    return updatedEmployees;
}
function processEmployees(callback, ...employees) {  // Higher-Order Function + Callback Function
  return callback(...employees);
}
const employeeDetails = processEmployees(
    calculateBonus,
    ...employees
);
function* employeeGenerator(data) {     // Generator Function
   for (let employee of data) {
        yield employee;
    }
}
const employeeList = employeeGenerator(employeeDetails);
for (let employee of employeeList) {
    switch (true) {
        case employee.experience >= 5:
            console.log("Senior Employee");
            break;
        case employee.experience >= 2:
            console.log("Experienced Employee");
            break;
        default:
            console.log("Junior Employee");
    }
    console.log("Employee :", employee.name);
    console.log("Salary :", employee.salary);
    console.log("Bonus :", employee.bonus);
    console.log("Final Salary :", employee.finalSalary);
    console.log("------------------");
}

//Task2:College Admission System
const childrens = [
    { name: "Klara", age: 18, percentage: 72 },
    { name: "Myra", age: 16, percentage: 85 },
    { name: "Akaay", age: 19, percentage: 58 }
];
function checkAdmission(...studentList) {
    return studentList.map(function (student) {
        let { name, age, percentage } = student;
        let status = "";
        let category = "";
        if (age >= 17) {
            if (percentage >= 60) {
                status = "Admission Approved";
                category = "Eligible";
            } else {
                status = "Admission Rejected";
                category = "Low Percentage";
            }
        } else {
            status = "Admission Rejected";
            category = "Under Age";
        }
        switch (category) {
            case "Eligible":
                console.log(name + " meets all requirements");
                break;
            case "Low Percentage":
                console.log(name + " needs higher percentage");
                break;
            default:
                console.log(name + " does not meet age requirement");
        }
        return {
            ...student,
            status
        };
    });
}
const admissionResult = checkAdmission(...childrens);
function* studentRecords(data) {
    for (let student of data) {
        yield student;
    }
}
const studentDetails = studentRecords(admissionResult);
for (let student of studentDetails) {
    console.log("--------------------");
    console.log("Name :", student.name);
    console.log("Age :", student.age);
    console.log("Percentage :", student.percentage);
    console.log("Result :", student.status);
}

//Task3:Food Delivery Menu
const foodMenu = [
    { itemNo: 1, itemName: "Pizza" },
    { itemNo: 2, itemName: "Burger" },
    { itemNo: 3, itemName: "Shawarma" },
    { itemNo: 4, itemName: "Fried Rice" }
];
let selectedItem = 10;
function placeOrder(...menuItems) {
    const orderInfo = menuItems.map(function (food) {
        let { itemNo, itemName } = food;
        let orderStatus = "";
        switch (selectedItem) {
            case 1:
                orderStatus = "Order Confirmed : Pizza";
                break;
            case 2:
                orderStatus = "Order Confirmed : Burger";
                break;
            case 3:
                orderStatus = "Order Confirmed : Shawarma";
                break;
            case 4:
                orderStatus = "Order Confirmed : Fried Rice";
                break;
            default:
                orderStatus = "Invalid Selection";
        }
        return {
            ...food,
            orderStatus
        };
    });
    return orderInfo;
}
const orderDetails = placeOrder(...foodMenu);
function* generateOrder(data) {
    for (let item of data) {
        yield item;
    }
}
const orderList = generateOrder(orderDetails);
for (let item of orderList) {
    if (item.itemNo === selectedItem) {
        console.log("Selected Item :", item.itemName);
        console.log(item.orderStatus);
    }
}

//Task4:Attendance Tracker
const students = [
    { name: "Ajay" },
    { name: "Lakshmi" },
    { name: "Pavan" },
    { name: "Sai" },
    { name: "Abhi" },
    { name: "Mouni" },
    { name: "Arya" },
    { name: "Preethi" },
    { name: "Megha" },
    { name: "Roy" }
];
function getStudentList(...studentData) {
    const details = studentData.map(function (student) {
        const { name } = student;
        return {
            ...student,
            name
        };
    });
    return details;
}
const studentRecord = getStudentList(...students);
function* studentGenerator(data) {
    for (let student of data) {
        yield student;
    }
}
const studentList = studentGenerator(studentRecords);
let totalStudents = 0;
for (let student of studentList) {
    console.log("Student Name :", student.name);
    totalStudents++;
}
console.log("Total Students :", totalStudents);

//Task5:E-Commerce Cart
const cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];
function cartSummary(items) {
    let totalValue = 0;
    let expensiveProduct = items[0];
    for (let item of items) {
        const { product, price } = item;
        console.log("Product :", product);
        totalValue += price;
        if (price > expensiveProduct.price) {
            expensiveProduct = item;
        }
    }
    return {
        totalValue,
        expensiveProduct
    };
}
const result = cartSummary([...cart]); 
console.log("Total Cart Value :", result.totalValue);
switch (result.expensiveProduct.product) {
    case "Mobile":
    case "Headset":
    case "Charger":
        console.log("Most Expensive Product :", result.expensiveProduct.product);
        break;
    default:
        console.log("No Product Found");
}

//Task6:Bank Account Management
const account = {
    holderName: "Ajay",
    balance: 10000
};
function deposit(acc, amount) {
    acc.balance += amount;
    return acc;
}
function withdraw(acc, amount) {
    if (amount <= acc.balance) {
        acc.balance -= amount;
    } else {
        console.log("Insufficient Balance");
    }
    return acc;
}
function checkBalance({ holderName, balance }) {
    return `${holderName} Balance : ₹${balance}`;
}
function processTransaction(action, accountInfo, amount) {
    return action(accountInfo, amount);
}
const transactions = [
    { type: "deposit", amount: 5000 },
    { type: "withdraw", amount: 7000 }
];
for (let transaction of transactions) {
    const { type, amount } = transaction; 
    switch (type) {
        case "deposit":
            processTransaction(deposit, account, amount);
            break;
        case "withdraw":
            processTransaction(withdraw, account, amount);
            break;
        default:
            console.log("Invalid Transaction");
    }
}
function* accountInfo(data) {
    yield { ...data }; 
}
const accountDetails = accountInfo(account);
for (let details of accountDetails) {
    console.log(checkBalance(details));
}

//Task7:Movie Ticket Booking
const visitors = [
    { name: "Cummin", age: 54 },
    { name: "Dhoni", age: 44 },
    { name: "Virat", age: 35 },
    { name: "Rohit", age: 45 }
];
function getTicketPrice(person) {
    const { age } = person;
    let price = 0;
    if (age < 5) {
        price = 0;
    } else if (age <= 18) {
        price = 100;
    } else if (age <= 60) {
        price = 200;
    } else {
        price = 120;
    }
    return price;
}
const ticketDetails = visitors.map(function (person) {
    return {
        ...person, 
        ticketPrice: getTicketPrice(person)
    };
});
function* visitorData(data) {
    for (let visitor of data) {
        yield visitor;
    }
}
const tickets = visitorData(ticketDetails);
for (let visitor of tickets) {
    switch (visitor.ticketPrice) {
        case 0:
            console.log(visitor.name, "- Free Ticket");
            break;
        default:
            console.log(visitor.name, "- ₹" + visitor.ticketPrice);
    }
}

//Task8:Online Shopping Discount
const orders = [
    { customer: "Ajju", amount: 6500 },
    { customer: "Tom", amount: 3500 },
    { customer: "Sai", amount: 15000 },
    { customer: "Megha", amount: 800 }
];
function getDiscount(amount) {
    let discount = 0;
    if (amount > 5000) {
        discount = amount * 20 / 100;
    } else if (amount > 3000) {
        discount = amount * 10 / 100;
    } else if (amount > 1000) {
        discount = amount * 5 / 100;
    } else {
        discount = 0;
    }
    return discount;
}
const billDetails = orders.map(function (order) {
    const { customer, amount } = order; 
    let discount = getDiscount(amount);
    return {
        ...order,
        originalAmount: amount,
        discount,
        finalAmount: amount - discount
    };
});
let customerName = prompt("Enter Customer Name");
const customerInfo = billDetails.find(function (bill) {
    return bill.customer.toLowerCase() === customerName.toLowerCase();
});
switch (customerInfo ? "Found" : "Not Found") {
    case "Found":
        console.log("Customer :", customerInfo.customer);
        console.log("Original Amount :", customerInfo.originalAmount);
        console.log("Discount :", customerInfo.discount);
        console.log("Final Amount :", customerInfo.finalAmount);
        break;
    default:
        console.log("Customer Not Found");
}
function* billGenerator(data) {
    for (let bill of data) {
        yield bill;
    }
}
const allBills = billGenerator(billDetails);
for (let bill of allBills) {
    console.log("------------------");
    console.log(bill.customer);
    console.log("Final Amount :", bill.finalAmount);
}

//Task9:Food Inventory System
let groceryItems = ["Rice", "Oil", "Sugar", "Milk", "Egg"];
groceryItems.push("Bread", "Tea");
groceryItems.shift();
groceryItems.pop();
function processItems(callback, ...items) {
    return callback(items);
}
const totalItems = processItems(
    function (items) {
        return items.length;
    },
    ...groceryItems
);
console.log("Total Items :", totalItems);
function checkItem(items, searchItem) {
    let status = "Not Available";
    for (let item of items) {
        if (item === searchItem) {
            status = "Available";
        }
    }
    return status;
}
const milkStatus = checkItem(groceryItems, "Milk");
const storeData = {
    items: [...groceryItems],
    milkStatus
};
switch (storeData.milkStatus) {
    case "Available":
        console.log("Milk Exists");
        break;
    default:
        console.log("Milk Not Found");
}
function* itemGenerator(data) {
    for (let item of data) {
        yield item;
    }
}
const finalItems = itemGenerator(storeData.items);
const [firstItem, secondItem] = storeData.items;
console.log("First Item :", firstItem);
console.log("Second Item :", secondItem);
console.log("Final Grocery List");
for (let item of finalItems) {
    console.log(item);
}

//Task10:Hospital Patient Management
const patient = {
    patientName: "Sai Lakshmi",
    age: 23,
    disease: "Fever",
    doctor: "Dr.Jagadeesh"
};
//Destructuring extracting the values
const { patientName, age, disease, doctor } = patient;
function processPatient(callback, ...details) {
    return callback(details);
}
const totalDetails = processPatient(
    function (details) {
        return details.length;
    },
    patientName,
    age,
    disease,
    doctor
);
console.log("Total Details :", totalDetails);
const patientInfo = {
    ...patient
};
function* patientGenerator(data) {
    yield data;
}
const patientData = patientGenerator(patientInfo);
for (let info of patientData) {
    switch (info.disease) {
        case "Fever":
            console.log("Patient Under Treatment");
            break;
        default:
            console.log("Patient Status Unknown");
    }
    console.log("Patient Details");
    for (let key in info) {          //For in loop to Display all details
        if (info[key]) {
            console.log(key + " :", info[key]);
        } else {
            console.log("Value Not Available");
        }
    }
}

//Task11:Amazon Order Tracker
const order = {
    customerId: "Ajay",
    product: "Wireless Headset",
    orderId: 101
};
const { customerId, product, orderId } = order;
//Callback Function
function sendSMS() {
    console.log("SMS Sent To Customer");
    return "Notification Sent";
}
//Main Function
function placeOrder(callback, ...orderDetails) {
    console.log("Order Placed Successfully");
    if (orderDetails.length > 0) {
        callback();
    } else {
        console.log("Order Details Missing");
    }
    return orderDetails;
}
const orderInfo = { ...order };
function* orderGenerator(data) {  //Generator Function
    yield data;
}
const trackingData = orderGenerator(orderInfo);
for (let details of trackingData) {
    for (let key in details) {
        console.log(key + " :", details[key]);
    }
    switch (details.product) {
        case "Wireless Headset":
            console.log("Product Ready For Delivery");
            break;
        default:
            console.log("Processing Order");
    }
}
const results = placeOrder(
    sendSMS,
    customerId,
    product,
    orderId
);
console.log("Total Order Details :", results.length);

//Task12:Cashback Offer Generator
const offerDetails = {
    storeName: "Smart Mart",
    offers: [
        "10% Cashback",
        "20% Cashback",
        "Free Delivery",
        "Buy 1 Get 1"
    ]
};
const { storeName, offers } = offerDetails;
function showOffers(data) {
    if (data.length > 0) {
        return "Offers Available";
    } else {
        return "No Offers";
    }
}
const offerStatus = showOffers(offers);
const offerData = {
    ...offerDetails,
    offerStatus
};
switch (offerData.offerStatus) {
    case "Offers Available":
        console.log("Cashback Offers Ready");
        break;
    default:
        console.log("No Offers Found");
}
function processOffers(callback, ...items) {
    return callback(items);
}
const totalOffers = processOffers(
    function (items) {
        return items.length;
    },
    ...offers
);
console.log("Total Offers :", totalOffers);
//Using Generator Function
function* cashbackGenerator(data) {
    for (let offer of data) {
        yield offer;
    }
}
const availableOffers = cashbackGenerator(offers);
// Displaying each offer Using .next()
console.log(availableOffers.next().value);
console.log(availableOffers.next().value);
console.log(availableOffers.next().value);
console.log(availableOffers.next().value);
for (let key in offerData) {
    console.log(key + " :", offerData[key]);
}

//Task13:Employee Database
const workers = [
    { id: 1, name: "Shekhar", salary: 30000 },
    { id: 2, name: "Yeshu", salary: 50000 },
    { id: 3, name: "Manvi", salary: 60000 }
];
const companyData = {
    team: [...workers]
};
function processWorkers(callback, ...staff) {
    return callback(staff);
}
function getSalaryReport(staff) {
    let totalSalary = 0;
    let highestPaid = staff[0];
// For-Of Loop
    for (let employee of staff) {
        totalSalary += employee.salary;
        if (employee.salary > highestPaid.salary) {
            highestPaid = employee;
        } else {
            highestPaid = highestPaid;
        }
    }
    return {
        totalSalary,
        highestPaid
    };
}
const report = processWorkers(getSalaryReport, ...companyData.team);
//Function Generator
function* employeeGenerator(data) {
    for (let employee of data) {
        yield employee;
    }
}
const employeeData = employeeGenerator(companyData.team);
console.log("Employee Names");
// Generator + For-Of
for (let employee of employeeData) {
    const { name } = employee;
    console.log(name);
}
switch (report.highestPaid.name) {
    case "Shekhar":
    case "Yeshu":
    case "Manvi":
        console.log("Highest Salary Employee :", report.highestPaid.name);
        break;
    default:
        console.log("Employee Not Found");
}
console.log("Highest Salary Employee Details");
for (let key in report.highestPaid) {
    console.log(key + " :", report.highestPaid[key]);
}
console.log("Total Salary Expense :", report.totalSalary);

//Task14:Railway Reservation System
const trainDetails = {
    trainName: "Express Train",
    totalSeats: 50,
    availableSeats: 50
};
const { trainName } = trainDetails;
function processBooking(callback, ...details) {
    return callback(...details);
}
function bookSeats(train, seatsRequired) {
    let bookingStatus = "";
    if (seatsRequired <= train.availableSeats) {
        train.availableSeats -= seatsRequired;
        bookingStatus = "Booking Confirmed";
    } else {
        bookingStatus = "Seats Not Available";
    }
    return {
        ...train,
        bookingStatus
    };
}
const requests = [
    { customer: "Kavi", seats: 10 },
    { customer: "Navya", seats: 15 },
    { customer: "Geethu", seats: 30 }
];
const bookingRecords = [];
for (let request of requests) {
    const { customer, seats } = request;
    const reservation = processBooking(
        bookSeats,
        trainDetails,
        seats
    );
    bookingRecords.push({
        customer,
        seats,
        ...reservation
    });
}
let customerLog = prompt("Enter Customer Name");
let customerDetails = null;
for (let record of bookingRecords) {
    if (record.customer.toLowerCase() === customerLog.toLowerCase()) {
        customerDetails = record;
    }
}
if (customerDetails) {
    switch (customerDetails.bookingStatus) {
        case "Booking Confirmed":
            console.log("Booking Successful");
            break;
        case "Seats Not Available":
            console.log("Booking Rejected");
            break;
        default:
            console.log("Invalid Status");
    }
    function* customerGenerator(data) {  //Generator Function
        yield data;
    }
    const customerData = customerGenerator(customerDetails);
    for (let details of customerData) {
        // For-In Loop
        for (let key in details) {
            console.log(key + " :", details[key]);
        }
    }
} else {
    console.log("Customer Not Found");
}
console.log("Train Name :", trainName);
console.log("Remaining Seats :", trainDetails.availableSeats);

//Task15:Mobile Store Billing System
const products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};
const selectedProducts = ["Mobile", "Headphone", "Smartwatch"];
function* productGenerator(items) {
    for (let item of items) {
        yield item;
    }
}
const selectedItems = productGenerator(selectedProducts);
function calculateBill(productList) {
let totalReward = 0;
    for (let product of productList) {
        if (products[product]) {
            totalRewardoducts[product];
        } else {
            console.log(product + " Not Available");
        }
    }
    const gst = totalReward * 18 / 100;
    const finalBill = totalReward + gst;
    return {
        totalReward,
        gst,
        finalBill
    };
}
function billingProcess(callback, ...items) {
    return callback(items);
}
const billHistory = billingProcess(
    calculateBill,
    ...selectedProducts
);
const invoice = {
    clientName: "Lakshmi",
    billHistory, totalReward, gst, finalBill } = invoice;
    const { clientName } = invoice;
switch (selectedProducts.length > 0) {
    case true:
        console.log("Products Selected");
        break;
    default:
        console.log("No Products Selected");
}
console.log("Selected Products");

for (let item of selectedItems) {
    console.log(item);
}
console.log("------------------");
console.log("Client :", clientName);
console.log("Total Reward :", totalReward);
console.log("GST 18% :", gst);
console.log("Final Bill :", finalBill);