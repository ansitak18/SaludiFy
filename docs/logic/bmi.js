document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // input values
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // validation
    if(height === "" || weight === ""){
        alert("Please enter both height and weight");
        return;
    }

    // convert height to meters
    height = height / 100;

    // BMI calculation
    let bmi = (weight / (height * height)).toFixed(2);

    // show BMI
    document.querySelector(".result h3").innerText = "Your BMI: " + bmi;

    // status check
    let statusText = "";
    let statusColor = "";

    if(bmi < 18.5){
        statusText = '<i class="fa-solid fa-face-frown"></i> Underweight';
        statusColor = "orange";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        statusText = '<i class="fa-solid fa-circle-check"></i> Normal';
        statusColor = "green";
    }
    else if(bmi >= 25 && bmi < 29.9){
        statusText = '<i class="fa-solid fa-triangle-exclamation"></i> Overweight';
        statusColor = "darkorange";
    }
    else{
        statusText = '<i class="fa-solid fa-circle-xmark"></i> Obese';
        statusColor = "red";
    }

    let statusElement = document.querySelector(".result p");
    statusElement.innerHTML = "Status: " + statusText;
    statusElement.style.color = statusColor;
});