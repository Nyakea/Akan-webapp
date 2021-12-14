// Collect data
let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener('click', checkDateValue, true);

function checkDateValue(event) {
    event.preventDefault();
    let dateValue = document.getElementById("date").value;

    if (dateValue <= 0 || dateValue > 31) {
        alert("Invalid date")
    }



    let monthValue = document.getElementById("month").value;

    if (monthValue <= 0 || monthValue > 12) {
        alert("invalid month")
    }



let gender = document.querySelector("input[name='gender']");
let genderValue = gender.value;
let yearValue = document.getElementById("year").value;


// function to calculate day of birth

let birthDay;




// assigns name to day of the week and gender

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

if(genderValue = male){
    if(birthDay = 1){
        alert("You were born on " + weekDays[0] + " and your Akan name is " + maleNames[0]);
    }
    if(birthDay = 2){
        alert("You were born on " + weekDays[1] + " and your Akan name is " + maleNames[1]);
    }
    else if(birthDay = 3){
        alert("You were born on " + weekDays[2] + " and your Akan name is " + maleNames[2]);
    }
    else if(birthDay = 4){
        alert("You were born on " + weekDays[3] + " and your Akan name is " + maleNames[3]);
    }
    else if(birthDay = 5){
        alert("You were born on " + weekDays[4] + " and your Akan name is " + maleNames[4]);
    }
    else if(birthDay = 6){
        alert("You were born on " + weekDays[5] + " and your Akan name is " + maleNames[5]);
    }
    else if(birthDay = 7){
        alert("You were born on " + weekDays[6] + " and your Akan name is " + maleNames[6]);
    }
}
else if(genderValue = female){
    if(birthDay = 1){
        alert("You were born on " + weekDays[0] + " and your Akan name is " + femaleNames[0]);
    }
    if(birthDay = 2){
        alert("You were born on " + weekDays[1] + " and your Akan name is " + femaleNames[1]);
    }
    else if(birthDay = 3){
        alert("You were born on " + weekDays[2] + " and your Akan name is " + femaleNames[2]);
    }
    else if(birthDay = 4){
        alert("You were born on " + weekDays[3] + " and your Akan name is " + femaleNames[3]);
    }
    else if(birthDay = 5){
        alert("You were born on " + weekDays[4] + " and your Akan name is " + femaleNames[4]);
    }
    else if(birthDay = 6){
        alert("You were born on " + weekDays[5] + " and your Akan name is " + femaleNames[5]);
    }
    else if(birthDay = 7){
        alert("You were born on " + weekDays[6] + " and your Akan name is " + femaleNames[6]);
    }
}
}
        