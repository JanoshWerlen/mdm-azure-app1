var resultList = [];

function doubleNumber() {
    var inputNumber = document.getElementById("numberInput").value;

    if (isNaN(inputNumber)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert the input to a number and double it
    var result = parseFloat(inputNumber) * 2;

  
    resultList.push(result)

    // Display the result in the output element
    document.getElementById("output").innerHTML = "Double of " + inputNumber + " is: " + result;
    document.getElementById("resultList").innerHTML = "Previous Doubles: " + resultList.join(", ");
}

function clearResultList() {
   
    resultList = [];

    document.getElementById("resultList").innerHTML = "Previous Doubles: " + resultList.join(", ");
}
