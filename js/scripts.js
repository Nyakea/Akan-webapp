// Collect data
let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener('click', checkDateValue, checkMonthValue, true);

function checkDateValue(event) {
    event.preventDefault();
    let dateValue = document.getElementById("date").value;

    if (dateValue <= 0 || dateValue > 31) {
        alert("Invalid date")
    }
}

function checkMonthValue(event) {
    event.preventDefault();
    let monthValue = document.getElementById("month").value;

    if (monthValue <= 0 || monthValue > 12) {
        alert("invalid month")
    }

}

let gender = document.getElementsByName("gender").value;
let yearValue = document.getElementById("year").value;


// function to calculate day of birth






// assigns name to day of the week and gender

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// 