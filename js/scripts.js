function getNames() {
    // Collect data
    //Gender values
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;


    // Birth date values
    let dateValue = parseInt(document.getElementById("date").value);
    let monthValue = parseInt(document.getElementById("month").value);
    let yearValue = (document.getElementById("year").value);

    // Array of days and names assigned to days
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    // Validate date
    if (dateValue <= 0 || dateValue > 31) {
        alert("Invalid date! Please enter valid date.")
    }
    // Validate month
    else if (monthValue <= 0 || monthValue > 12) {
        alert("Invalid month! Please enter valid month.")
    }





    // To calculate day of birth
    let century = parseInt(yearValue.slice(0, 2));
    let yearDigits = parseInt(yearValue.slice(2));
    let birthDay = (((century / 4) - (2 * century) - 1) + (5 * (yearDigits / 4)) + ((26 * (monthValue + 1) / 10)) + dateValue) % 7;

    // To assign names to gender and day
    if (male === true) {
        document.getElementById("results").innerHTML = "You were born on " + weekDays[(birthDay - 1)] + " and your Akan name is " + maleNames[birthDay - 1];
    } else if (female === true) {
        document.getElementById("results").innerHTML = "You were born on " + weekDays[(birthDay - 1)] + " and your Akan name is " + femaleNames[birthDay - 1];
    }

}