//Task1:Student Management System
let students = [
    { id: 1, name: "Shekhar", department: "CSE", mark: 95 },
    { id: 2, name: "Yeshu", department: "ECE", mark: 54 },
    { id: 3, name: "Sai", department: "IT", mark: 74 },
    { id: 4, name: "Rakesh", department: "MECH", mark: 67 },
    { id: 5, name: "Anu", department: "CSE", mark: 89 }
];
function getGrade(mark) {
    switch (true) {
        case mark >= 90:
            return "A";
        case mark >= 75:
            return "B";
        case mark >= 50:
            return "C";
        default:
            return "Fail";
    }
}
function displayDetails(student) {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.department);
    console.log("Mark:", student.mark);
    console.log("Grade:", getGrade(student.mark));
    console.log("-------------------");
}
console.log("Student Names:");
for (let student of students) {
    console.log(student.name);
}
let totalMarks = 0;
for (let student of students) {
    totalMarks += student.mark;
}
console.log("Total Marks:", totalMarks);
console.log("Students Scored Above 80:");
for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name);
    }
}
function showStudents(action) {
    for (let student of students) {
        action(student);
    }
}
console.log("Student Details:");
showStudents(displayDetails);

//Task2:Employee Payroll System
let employees = [
    { id: 1, name: "Ram", salary: 25000, department: "HR" },
    { id: 2, name: "Chitti", salary: 35000, department: "IT" },
    { id: 3, name: "Abbu", salary: 20000, department: "Finance" },
    { id: 4, name: "Pavani", salary: 28000, department: "Marketing" },
    { id: 5, name: "Ajay", salary: 50000, department: "IT" }
];
function getDepartmentDescription(department) {
    switch (department) {
        case "HR":
            return "Human Resources";
        case "ML":
            return "Machine Learning";
        case "Finance":
            return "Finance Department";
        case "Marketing":
            return "Marketing Department";
        default:
            return "General Department";
    }
}
function generatePayroll(employee) {
    console.log("ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Salary:", employee.salary);
    console.log("Department:", getDepartmentDescription(employee.department));
    console.log("--------------------");
}
console.log("Employee Names:");
for (let employee of employees) {
    console.log(employee.name);
}
let totalSalaryExpense = 0;
for (let employee of employees) {
    totalSalaryExpense += employee.salary;
}
console.log("Total Company Salary Expense:", totalSalaryExpense);
console.log("Employees Earning Above ₹30,000:");
for (let employee of employees) {
    if (employee.salary > 30000) {
        console.log(employee.name);
    }
}
function processEmployees(reportFunction) {
    for (let employee of employees) {
        reportFunction(employee);
    }
}
console.log("Payroll Reports:");
processEmployees(generatePayroll);

//Task3:Online Food Order System
let foodItems = [
    { id: 1, foodName: "Biryani", price: 250, category: "MainCourse" },
    { id: 2, foodName: "Noodles", price: 300, category: "FastFood" },
    { id: 3, foodName: "Panipuri", price: 120, category: "FastFood" },
    { id: 4, foodName: "IceCream", price: 120, category: "Dessert" },
    { id: 5, foodName: "PaneerTikka", price: 220, category: "Starter" }
];
function getCategory(category) {
    switch (category) {
        case "MainCourse":
            return "Full Meal";
        case "FastFood":
            return "Quick Bite";
        case "Dessert":
            return "Sweet Item";
        case "Starter":
            return "Appetizer";
        default:
            return "Other Food";
    }
}
function orderConfirmation(food) {
    console.log("ID:", food.id);
    console.log("Food Name:", food.foodName);
    console.log("Price:", food.price);
    console.log("Category:", getCategory(food.category));
    console.log("Order Confirmed");
    console.log("----------------");
}
console.log("Food Names:");
for (let food of foodItems) {
    console.log(food.foodName);
}
let totalMenuValue = 0;
for (let food of foodItems) {
    totalMenuValue += food.price;
}
console.log("Total Menu Value:", totalMenuValue);
console.log("Foods Above ₹200:");
for (let food of foodItems) {
    if (food.price > 200) {
        console.log(food.foodName);
    }
}
function processFood(action) {
    for (let food of foodItems) {
        action(food);
    }
}
console.log("Order Reports:");
processFood(orderConfirmation);

//Task4:Movie Ticket Booking System
let movies = [
    { movieName: "Darling", ticketPrice: 250, availableSeats: 50, language: "Telugu" },
    { movieName: "Bahubali2", ticketPrice: 300, availableSeats: 40, language: "Tamil" },
    { movieName: "Hi Nanna", ticketPrice: 350, availableSeats: 60, language: "Telugu" },
    { movieName: "Jawan", ticketPrice: 280, availableSeats: 0, language: "Hindi" },
    { movieName: "Kalki", ticketPrice: 320, availableSeats: 25, language: "Kannada" }
];
function getLanguage(language) {
    switch (language) {
        case "Telugu":
            return "Telugu Movie";
        case "Tamil":
            return "Tamil Movie";
        case "Hindi":
            return "Hindi Movie";
        case "Kannada":
            return "Kannada Movie";
        default:
            return "Other Language Movie";
    }
}
function bookingConfirmation(movie) {
    console.log("Movie Name:", movie.movieName);
    console.log("Ticket Price:", movie.ticketPrice);
    console.log("Available Seats:", movie.availableSeats);
    console.log("Language:", getLanguage(movie.language));
    if (movie.availableSeats > 0) {
        console.log("Booking Confirmed");
    } else {
        console.log("Booking Not Possible");
    }
    console.log("---------------------");
}
console.log("Movie Names:");
for (let movie of movies) {
    console.log(movie.movieName);
}
let totalSeats = 0;
for (let movie of movies) {
    totalSeats += movie.availableSeats;
}
console.log("Total Available Seats:", totalSeats);
console.log("Booking Status:");
for (let movie of movies) {
    if (movie.availableSeats > 0) {
        console.log(movie.movieName + " - Booking Possible");
    } else {
        console.log(movie.movieName + " - Booking Not Possible");
    }
}
function processMovies(action) {
    for (let movie of movies) {
        action(movie);
    }
}
console.log("Booking Confirmations:");
processMovies(bookingConfirmation);

//Task5:Hospital Patient Records
let patients = [
    { patientId: 1, patientName: "Keerthi", age: 65, disease: "Heart" },
    { patientId: 2, patientName: "Raji", age: 40, disease: "Skin" },
    { patientId: 3, patientName: "Devi", age: 28, disease: "Eye" },
    { patientId: 4, patientName: "Nicky", age: 30, disease: "Bone" },
    { patientId: 5, patientName: "Viraj", age: 68, disease: "Diabetes" }
];
function getDepartment(disease) {
    switch (disease) {
        case "Heart":
            return "Cardiology";
        case "Skin":
            return "Dermatology";
        case "Eye":
            return "Ophthalmology";
        case "Bone":
            return "Orthopedics";
        default:
            return "General Medicine";
    }
}
function appointmentConfirmation(patient) {
    console.log("Patient ID:", patient.patientId);
    console.log("Patient Name:", patient.patientName);
    console.log("Age:", patient.age);
    console.log("Department:", getDepartment(patient.disease));
    console.log("Appointment Confirmed");
    console.log("----------------------");
}console.log("Patient Names:");
for (let patient of patients) {
    console.log(patient.patientName);
}
let totalPatients = 0;
for (let patient of patients) {
    totalPatients++;
}
console.log("Total Patients:", totalPatients);
console.log("Patients Above Age 60:");
for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }
}
function processPatients(action) {
    for (let patient of patients) {
        action(patient);
    }
}
console.log("Appointment Confirmations:");
processPatients(appointmentConfirmation);

//Task6:Library Management System
let books = [
    { bookId: 1, bookName: "The white tiger", author: "Aravind", price: 450, category: "Fantasy" },
    { bookId: 2, bookName: "The Lord of the rings", author: "J.R.R.Tolkien", price: 650, category: "Fiction" },
    { bookId: 3, bookName: "Harry Potter", author: "Rowling", price: 800, category: "Fiction" },
    { bookId: 4, bookName: "To kill a mocking bird", author: "Harper Lee", price: 550, category: "Classic" },
    { bookId: 5, bookName: "1984", author: "George Orwell", price: 400, category: "General" }
];
function getCategory(category) {
    switch (category) {
        case "Programming":
            return "Fantasy Books";
        case "Education":
            return "Fiction Books";
        case "Fiction":
            return "Story Books";
        case "Science":
            return "Classic Books";
        default:
            return "General Books";
    }
}
function issueBook(book) {
    console.log("Book ID:", book.bookId);
    console.log("Book Name:", book.bookName);
    console.log("Author:", book.author);
    console.log("Category:", getCategory(book.category));
    console.log("Book Issued Successfully");
    console.log("----------------------");
}
console.log("Book Names:");
for (let book of books) {
    console.log(book.bookName);
}
let totalBookValue = 0;
for (let book of books) {
    totalBookValue += book.price;
}
console.log("Total Book Value:", totalBookValue);
console.log("Books Above ₹500:");
for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName);
    }
}
function processBooks(action) {
    for (let book of books) {
        action(book);
    }
}
console.log("Issued Books:");
processBooks(issueBook);

//Task7:E-Commerce Product Dashboard
let products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 15 },
    { productId: 2, productName: "Mobile", price: 20000, stock: 8 },
    { productId: 3, productName: "Headphones", price: 3000, stock: 20 },
    { productId: 4, productName: "Keyboard", price: 1500, stock: 5 },
    { productId: 5, productName: "Mouse", price: 1000, stock: 12 }
];
function getStockStatus(stock) {
    switch (true) {
        case stock === 0:
            return "Out of Stock";
        case stock < 10:
            return "Low Stock";
        default:
            return "In Stock";
    }
}
function generateReport(product) {
    console.log("Product ID:", product.productId);
    console.log("Product Name:", product.productName);
    console.log("Price:", product.price);
    console.log("Stock:", product.stock);
    console.log("Status:", getStockStatus(product.stock));
    console.log("--------------------");
}
console.log("Products:");
for (let product of products) {
    console.log(product.productName);
}
let inventoryValue = 0;
for (let product of products) {
    inventoryValue += product.price * product.stock;
}
console.log("Inventory Value:", inventoryValue);
console.log("Products with Stock Less Than 10:");
for (let product of products) {
    if (product.stock < 10) {
        console.log(product.productName);
    }
}
function processProducts(action) {
    for (let product of products) {
        action(product);
    }
}
console.log("Product Reports:");
processProducts(generateReport);

//Task8:College Admission System
let applicants = [
    { name: "Rahul", age: 19, percentage: 75, department: "CSE" },
    { name: "Priya", age: 17, percentage: 82, department: "ECE" },
    { name: "Kiran", age: 20, percentage: 58, department: "MECH" },
    { name: "Divya", age: 21, percentage: 90, department: "CSE" },
    { name: "Arjun", age: 18, percentage: 65, department: "EEE" }
];
console.log("Applicant Names:");
for (let applicant of applicants) {
    console.log(applicant.name);
}
function checkEligibility(applicant) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        return true;
    } else {
        return false;
    }
}
let eligibleCount = 0;
for (let applicant of applicants) {
    if (checkEligibility(applicant)) {
        eligibleCount++;
    }
        switch (applicant.department) {
        case "CSE":
            break;
        case "ECE":
            break;
        case "EEE":
            break;
        case "MECH":
            break;
        default:
            break;
    }
}
console.log("Eligible Students:", eligibleCount);
function admissionResult(applicant, callback) {
    callback(applicant);
}
function printResult(applicant) {
    if (checkEligibility(applicant)) {
        console.log(applicant.name + " : Admission Approved");
    } else {
        console.log(applicant.name + " : Admission Rejected");
    }
}
console.log("Admission Results:");
for (let applicant of applicants) {
    admissionResult(applicant, printResult);
}

//Task9:Bus Reservation System
let passengers = [
    { passengerId: 1, name: "Kavi", seatNumber: 12, ticketPrice: 500, busType: "AC" },
    { passengerId: 2, name: "Ajay", seatNumber: 15, ticketPrice: 450, busType: "NONAC" },
    { passengerId: 3, name: "Sai", seatNumber: 18, ticketPrice: 600, busType: "SLEEPER" },
    { passengerId: 4, name: "Divi", seatNumber: 20, ticketPrice: 550, busType: "AC" }
];
console.log("Passenger Names:");
for (let passenger of passengers) {
    console.log(passenger.name);
}
let totalCollection = 0;
for (let passenger of passengers) {
    totalCollection = totalCollection + passenger.ticketPrice;
}
console.log("Total Collection:", totalCollection);
console.log("Occupied Seats:");
for (let passenger of passengers) {
    if (passenger.seatNumber > 0) {
        console.log("Seat", passenger.seatNumber, "is Occupied");
    } else {
        console.log("Seat Not Assigned");
    }
}
for (let passenger of passengers) {
    switch (passenger.busType) {
        case "AC":
            console.log(passenger.name + " booked AC Bus");
            break;
        case "NONAC":
            console.log(passenger.name + " booked Non-AC Bus");
            break;
        case "SLEEPER":
            console.log(passenger.name + " booked Sleeper Bus");
            break;
        default:
            console.log(passenger.name + " booked Other Bus");
    }
}
function ticketConfirmation(passenger, callback) {
    callback(passenger);
}
function printTicket(passenger) {
    console.log(
        "Ticket Confirmed for " +
        passenger.name +
        " | Seat No: " +
        passenger.seatNumber
    );
}
console.log("Ticket Confirmations:");
for (let passenger of passengers) {
    ticketConfirmation(passenger, printTicket);
}

//Task10:Mobile Store Management
let mobiles = [
    { brand: "Samsung", model: "Galaxy A54", price: 25000, stock: 10 },
    { brand: "Vivo", model: "V30", price: 22000, stock: 8 },
    { brand: "Redmi", model: "Note 13", price: 18000, stock: 15 },
    { brand: "Apple", model: "iPhone 15", price: 70000, stock: 5 }
];
console.log("Mobile Names:");
for (let mobile of mobiles) {
    console.log(mobile.model);
}
let totalStockValue = 0;
for (let mobile of mobiles) {
    totalStockValue = totalStockValue + (mobile.price * mobile.stock);
}
console.log("Total Stock Value:", totalStockValue);
console.log("Mobiles Above ₹20,000:");
for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(mobile.model);
    }
}
for (let mobile of mobiles) {
    switch (mobile.brand) {
        case "Samsung":
            console.log(mobile.brand + " - Android Premium");
            break;
        case "Vivo":
            console.log(mobile.brand + " - Android Mid Range");
            break;
        case "Redmi":
            console.log(mobile.brand + " - Budget Android");
            break;
        case "Apple":
            console.log(mobile.brand + " - iOS Premium");
            break;
        default:
            console.log(mobile.brand + " - Other Brand");
    }
}
function generateSalesReport(mobile, callback) {
    callback(mobile);
}
function printReport(mobile) {
    console.log(
        mobile.model +
        " | Price: ₹" +
        mobile.price +
        " | Stock: " +
        mobile.stock
    );
}
console.log("Sales Report:");
for (let mobile of mobiles) {
    generateSalesReport(mobile, printReport);
}